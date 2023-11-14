import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { BsFillFileEarmarkArrowUpFill, BsInfoCircleFill } from 'react-icons/bs'
import Select from 'react-select';
import uploadPrecautionsImg from '../../assets/uploadPrecautions.png'
import { instance } from '../../api/config/instance';
import { useQuery, useQueryClient } from 'react-query';
import FindEducationOffice from '../../components/FindEducationOffice/FindEducationOffice';
import { selectedAcademyState } from '../../store/RegistAtom';
import { useRecoilState } from 'recoil';
import { ref, getDownloadURL, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../api/firebase/firebase';
import FileUpload from '../../components/FileUpload/FileUpload';


function RegistAcademy(props) {
    const [ matchOption, setMatchOption ] = useState("true");
    const [ educationOfficeOptions, setEducationOfficeOptions ] = useState([]);
    const [ selectedEducationOffice, setSelectedEducationOffice ] = useState("");

    const [ uploadeFile, setUploadeFile ] = useState({
        businessRegistrationFile: 0,
        idFile: 0,
        operationRegistrationFile: 0
    })

    const [ selectedAcademy, setSelectedAcademy ] = useRecoilState(selectedAcademyState);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyContent, setAcademyContent ] = useState({
        academyId: "",
        userId: "",
        match: "",
        businessRegistrationFile: "",
        idFile: "",
        operationRegistrationFile: ""
    })
    
    useEffect(() => {
        setAcademyContent(prevAcademyContent => ({
            ...prevAcademyContent,
            academyId: selectedAcademy.ACADEMY_ID,
            userId: principal?.data?.data.userId,
            match: matchOption
        }));
    }, [selectedAcademy, matchOption]);

    const handleMatchOptionChange = (event) => {
        setMatchOption(event.target.value);
    }

    const educationOfficeOptionsState = useQuery(["educationOfficeOptionsState"], async () => {
        try {
            return await instance.get("/option/education-offices");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setEducationOfficeOptions(response.data.map(option => {
                return {value: option.educationOfficeCode, label: option.educationOfficeName};
            }));
        }
    });

    const handleEducationOptionChange = (option) => {
        setSelectedEducationOffice(option.value);
    }

    const handlesubmissionClick = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            };
            if (!selectedEducationOffice) {
                alert("학원을 선택해주세요");
            } else {
                const filesInputs = document.querySelectorAll('input[type="file"]');
                let AllFilesAttached = true;
        
                filesInputs.forEach((fileInput) => {
                    if (fileInput.files.length === 0) {
                        AllFilesAttached = false;
                    }
                });
                
                if (!AllFilesAttached) {
                    alert("서류를 첨부하세요");
                } else {
                    console.log(academyContent);

                    //firebase에 파일이 업로드 됐는지 확인하고 DB에 저장
                    if((uploadeFile.businessRegistrationFile == 1 && uploadeFile.idFile == 1)){
                        if(academyContent.match == 'true' || (academyContent.match == 'false' && uploadeFile.operationRegistrationFile == 1)) {
                            await instance.post("/academy", academyContent, option);
                        } else {
                            alert("업로드 중입니다. 잠시만 기다려주세요.");
                        }
                    } else {
                        alert("업로드 중입니다. 잠시만 기다려주세요.");
                    }
                    alert("등록되었습니다. 신청은 3일 이내 확인됩니다.");
                }
            }
        } catch (error) {
            alert(error.response.data.sendFail);
        }
    }

    return (
        <RootContainer>
            <div css={S.STopContainer}>
                <h1 css={S.SH1}>학원등록하기</h1>
                <span css={S.STopSpan}>사업자등록증의 상호명(법인명)과 학원명이 같나요?</span>
                <div css={S.SMatchButtonContainer} >
                    <input 
                        type="radio" 
                        id='different' 
                        name='match' 
                        value={false}
                        onChange={handleMatchOptionChange}
                    />
                    <label htmlFor="different">다릅니다</label>
                    <input 
                        type="radio" 
                        id='same' 
                        name='match' 
                        value={true}
                        onChange={handleMatchOptionChange}
                        defaultChecked
                    />
                    <label htmlFor="same">같습니다</label>
                </div>
            </div>
            <div css={S.SContainer}>
                <span css={S.SContainerName}>학원 검색*</span>
                <div css={S.SSelectBoxContainer}>
                    <p>교육청</p>
                    <Select options={educationOfficeOptions} onChange={handleEducationOptionChange}/>
                </div>
                <div css={S.SSelectBoxContainer}>
                    <p>학원명을 검색해주세요</p>
                    <FindEducationOffice educationOfficeCode={selectedEducationOffice}/>
                </div>
            </div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SContainerName}>사전확인서류 제출*</span>
                    {/* <div>
                        <p>사전확인 서류란?</p>
                        <button css={S.SModalBtn} onClick={openModal}><BsInfoCircleFill /></button>
                        {isModalOpen && (
                            <div css={`${S.SModalContainer}`}>
                                <div css={S.SModalContent}>
                                    <ul css={S.SModalDocument}>사전확인서류란?</ul>
                                    <li>학원 정보 관리 서비스를 사용하시기 전 학원 관리자님의 정보 확인을 위해 제출받는 서류입니다.<br></br>
                                        신뢰성 있는 서비스를 제공하기 위해 사전확인서류로 학원 관리자임을 확인하고 있습니다.<br></br> 
                                        학원명과 관리자 확인이 불가능한 경우 추가적인 확인 절차가 있을 수 있습니다.
                                    </li>
                                    <button css={S.SModalClosebtn} onClick={closeModal}>닫기</button>
                                </div>
                            </div>
                        )}
                    </div> */}
                    <p>사전확인 서류란?<BsInfoCircleFill /></p>
                </div>
                <FileUpload academyContent={academyContent} setAcademyContent={setAcademyContent}
                    uploadeFile={uploadeFile} setUploadeFile={setUploadeFile}/>
            </div>

            <div css={S.SImgContainer}>
                <img css={S.SImg} src={uploadPrecautionsImg} alt="" />
            </div>
            <div css={S.SSpanContainer}>
                <span>학원 등록은 3일 이내로 완료되며 그 전까지 학원 관리를 제외한 모든 기능을 정상적으로 이용하실 수 있습니다.</span>
            </div>
            <div css={S.SButtonContainer}>
                <button css={S.SSubmitButton} onClick={handlesubmissionClick}>제출</button>
            </div>
        </RootContainer>
    );
}

export default RegistAcademy;