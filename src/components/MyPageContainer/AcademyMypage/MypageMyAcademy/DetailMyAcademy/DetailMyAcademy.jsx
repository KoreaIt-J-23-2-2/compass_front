import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import * as GS from "../../../../../styles/Global/Common"
import { instance } from '../../../../../api/config/instance';
import { useQuery, useQueryClient } from 'react-query';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../../api/firebase/firebase';
import { Line } from 'rc-progress';

function DetailMyAcademy({ type, selectedAcademy }) {

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const academyInfo = {
        academyInfoId: null,
        ACADEMY_ID: selectedAcademy.academyId,
        userId: principal.data.data.userId,
        logoImg: null,
        classSize: null,
        coursePeriod: null,
        purpose: null,
        homePage: null,
        phone: null
    }
    
    const [ academyDetailInfo, setAcademyDetailInfo ] = useState({
        "academyInfo": {},
        "age": [],
        "convenience": [],
        "classInfo": []
    });

    const [ newAcademyDetailInfo, setNewAcademyDetailInfo ] = useState(academyDetailInfo)

    const [tableData, setTableData] = useState([
        { id: 1, classInfoId: '', className: '', classPrice: '' }, // 초기에 하나의 행을 가진 배열로 시작
    ]);

    const [ ageOptions, setAgeOptions ] = useState([]);
    const [ convenienceOptions, setConvenienceOptions ] = useState([]);

    const [ selectedAgeOptions, setSelectedAgeOptions ] = useState([]);
    const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useState([]);

    const [ logoImgProgressPercent, setLogoImgProgressPercent ] = useState(0);

    // 학원 정보 가져오기
    const getAcademy = useQuery(["getAcademy", selectedAcademy], async () => {
        try {
            const options = {
                params: {
                    pIndex: 1,
                    pSize: 1,
                    ACADEMY_ID: selectedAcademy.academyId
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            // api, options를 get 요청
            return await instance.get("/academy", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyDetailInfo({
                "academyInfo": response.data.academyInfo ? response.data.academyInfo : academyInfo,
                "age": response.data.age,
                "convenience": response.data.convenience,
                "classInfo": response.data.classInfo
            });
            setNewAcademyDetailInfo({
                "academyInfo": !!response.data.academyInfo ? response.data.academyInfo : academyInfo,
                "age": response.data.age,
                "convenience": response.data.convenience,
                "classInfo": response.data.classInfo
            });

            setSelectedAgeOptions(response.data.age.map(option => {
                return { value: option.ageId, label: option.ageRange }
            }));
            setSelectedConvenienceOptions(response.data.convenience.map(option => {
                return { value: option.convenienceId, label: option.convenienceName }
            }));

            setTableData(
                response.data.classInfo.map((classItem, index) => ({
                    id: index + 1,
                    classInfoId: classItem.classInfoId,
                    className: classItem.className,
                    classPrice: classItem.classPrice
                }))
            );
        }
    })

    const ageOptionsState = useQuery(["ageOptionsState"], async () => {
        try {
            return await instance.get("/option/ages");
        } catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAgeOptions(response.data.map(option => {
                return { value: option.ageId, label: option.ageRange }
            }))
        }
    });

    const convenienceOptionsState = useQuery(["convenienceOptionsState"], async () => {
        try {
            return await instance.get("/option/conveniences");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setConvenienceOptions(response.data.map(option => {
                return { value: option.convenienceId, label: option.convenienceName }
            }))
        }
    });

    const handleImgInputChange = (e) => {
        const file = e.target.files[0];
        //firebase에 저장
        const storageRef = ref(storage, `logoImg/${selectedAcademy.academyId}/logoImg.jpg`);    // 해당 파일의 이름으로 firebase의 storage에 저장됨
        const uploadTask = uploadBytesResumable(storageRef, file);        // 파일 업로드가 실행됨
        uploadTask.on(          //업로드가 시작되면
            "state_changed",    //파일이 변경되고 있을 때
            (snapshot) => {     //파일 업로드 대기 중 프로그레스 바 적용할 때 사용
                // 증가하는 %가 들어있음
                setLogoImgProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
            },
            (error) => {        //업로드 실패할 경우
                console.error(error);
            },
            () => { //업로드가 완료되었을 경우
                getDownloadURL(storageRef).then(downloadUrl => {    //방금전 성공한 업로드 경로를 가져옴
                    setNewAcademyDetailInfo({
                        ...newAcademyDetailInfo, 
                        "academyInfo": {
                            ...newAcademyDetailInfo.academyInfo,
                            "logoImg": downloadUrl
                        }
                    });
                })
            }
        )
    }
    
    const handleInfoInputChange = (e) => {
        setNewAcademyDetailInfo({
            ...newAcademyDetailInfo,
            "academyInfo": {
                ...newAcademyDetailInfo.academyInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    const handleCheckboxChange = (option, optionType) => {
        const optionId = option.value;
        const optionName = option.label;
    
        if (optionType === 'age') {
            const updatedSelectedOptions = selectedAgeOptions.map(({ value }) => value).includes(optionId)
                ? selectedAgeOptions.filter(({ value }) => value !== optionId)
                : [...selectedAgeOptions, { value: optionId, label: optionName }];
            setSelectedAgeOptions(updatedSelectedOptions);
    
            setNewAcademyDetailInfo((prev) => ({
                ...prev,
                age: updatedSelectedOptions.map(({ value, label }) => ({ ageId: value, ageRange: label })),
            }));
        } else {
            const updatedSelectedOptions = selectedConvenienceOptions.map(({ value }) => value).includes(optionId)
                ? selectedConvenienceOptions.filter(({ value }) => value !== optionId)
                : [...selectedConvenienceOptions, { value: optionId, label: optionName }];
    
            setSelectedConvenienceOptions(updatedSelectedOptions);
    
            setNewAcademyDetailInfo((prev) => ({
                ...prev,
                convenience: updatedSelectedOptions.map(({ value, label }) => ({ convenienceId: value, convenienceName: label })),
            }));
        }
    };
    
    const handleEditBtnClick = async () => {
        try {
            const isAnyFieldEmpty = tableData.some((row) => !row.className || !row.classPrice);

            if (isAnyFieldEmpty) {
                alert('수업 과정에 빈 값이 없도록 모두 입력하세요!');
                return;
            }

            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }

            if(academyDetailInfo?.academyInfo?.academyInfoId === null) {   // academyInfoTb에 저장되지 않은 경우 insert 해줘야 함.
                await instance.post(`/academyInfo/${selectedAcademy.academyId}`, newAcademyDetailInfo, option);
            } else {
                if(JSON.stringify(newAcademyDetailInfo) !== JSON.stringify(academyDetailInfo)) {    // 기존 academyInfo와 달라졌을 때만 수정
                    await instance.put("/academy", newAcademyDetailInfo, option);
                }
            }
            alert("수정이 완료되었습니다.");
            getAcademy.refetch();
        } catch (error) {
            alert("수정 오류");
            console.error(error);
        }
    }
    
    const addRow = () => {
        setTableData([
            ...tableData,
            { id: tableData.length + 1, classInfoId: '', className: '', classPrice: '' },
        ]);
    };

    const handleDeleteRow = (id) => {
        const updatedTableData = tableData.filter((row) => row.id !== id);
        // 다시 번호 매기기
        const renumberedTableData = updatedTableData.map((row, index) => ({
          ...row,
          id: index + 1,
        }));
        setTableData(renumberedTableData);

        // 삭제된 데이터를 newAcademyDetailInfo에서도 제거
        const updatedClassInfo = renumberedTableData.map((row) => ({
            className: row.className,
            classPrice: row.classPrice,
        }));

        setNewAcademyDetailInfo((prev) => ({
            ...prev,
            classInfo: updatedClassInfo,
        }));
    };

    const handleClassInputChange = (id, fieldName, value) => {
        const updatedTableData = tableData.map((row) =>
            row.id === id ? { ...row, [fieldName]: value } : row
        );
        setTableData(updatedTableData);
    
        const updatedClassInfo = updatedTableData.map((row) => ({
            className: row.className,
            classPrice: row.classPrice,
        }));
    
        setNewAcademyDetailInfo((prev) => ({
            ...prev,
            classInfo: updatedClassInfo,
        }));
    };    
    
    return (
        <div>
            <div css={S.SContainer}>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>선택된 학원</span>
                </div>
                <div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원 번호</span><div>{selectedAcademy.acaAsnum}</div></div>
                        <div><span>지역</span><div>{selectedAcademy.admstZoneNm}</div></div>
                    </div>
                    <div css={S.SAcademyInfoBox}>
                        <div><span>학원명</span><div>{selectedAcademy.acaNm}</div></div>
                    </div>
                </div>
                <div css={S.SNameContainer}>
                    <span css={S.SName}>학원 상세 정보 수정</span>
                    <button css={GS.SButton} onClick={handleEditBtnClick}>수정하기</button>
                </div>
                <div css={S.SInfoContainer}>
                    <div>
                        <div css={S.STitleBox}>
                            <span>학원 정보</span>
                        </div>
                        <div css={S.SImgBox}>
                            로고 이미지
                            <div>
                                <img src={newAcademyDetailInfo.academyInfo.logoImg} alt="" />
                                <input type="file" onChange={handleImgInputChange}/>
                                {logoImgProgressPercent != 0 && logoImgProgressPercent != 100 && 
                                    <Line percent={logoImgProgressPercent} strokeWidth={2} strokeColor="#67dce2" trailColor="#D3D3D3"/>
                                }
                            </div>
                        </div>
                        <div css={S.SInfoBox}>수강 인원<input type="text" name="classSize" value={newAcademyDetailInfo?.academyInfo?.classSize || ""} onChange={handleInfoInputChange}/></div>
                        <div css={S.SInfoBox}>수강 기간<input type="text" name="coursePeriod" value={newAcademyDetailInfo?.academyInfo?.coursePeriod || ""} onChange={handleInfoInputChange}/></div>
                        <div css={S.SInfoBox}>수강 목적<input type="text" name="purpose" value={newAcademyDetailInfo?.academyInfo?.purpose || ""} onChange={handleInfoInputChange}/></div>
                        <div css={S.SInfoBox}>홈페이지<input type="text" name="homePage" value={newAcademyDetailInfo?.academyInfo?.homePage || ""} onChange={handleInfoInputChange}/></div>
                        <div css={S.SInfoBox}>학원 전화번호<input type="text" name="phone" value={newAcademyDetailInfo?.academyInfo?.phone || ""} onChange={handleInfoInputChange}/></div>
                    </div>
                    <div>
                        <div css={S.STitleBox}>
                            <span>수강 연령</span>
                        </div>
                        <div css={S.SCheckBox}>
                        {!ageOptions.isLoading && ageOptions?.map((option) => (
                            <div key={option.value}>
                                <input
                                    type="checkbox"
                                    checked={selectedAgeOptions.some((selectedOption) => selectedOption.value === option.value)}
                                    onChange={() => handleCheckboxChange(option, 'age')}
                                />
                                {option.label}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <div css={S.STitleBox}>
                            <span>시설 및 편의사항</span>
                        </div>
                        <div css={S.SCheckBox}>
                        {!convenienceOptionsState.isLoading && convenienceOptions?.map((option) => (
                            <div key={option.value}>
                                <input
                                    type="checkbox"
                                    checked={selectedConvenienceOptions.some((selectedOption) => selectedOption.value === option.value)}
                                    onChange={() => handleCheckboxChange(option, 'convenience')}
                                />
                                {option.label}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div css={S.SClassBox}>
                        <div css={S.STitleBox}>
                            <span>학원 수업 정보</span>
                            <button onClick={addRow} css={GS.SButton}>추가</button>
                        </div>
                        {tableData.length < 1 ? <div css={S.SEmpty}>수업 정보가 없습니다. 추가 버튼을 눌러 수업 정보를 추가해보세요!</div> : 
                        <table css={S.STable}>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>과정명</th>
                                    <th>가격</th>
                                    <th>과정 삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tableData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>
                                        <input type="text"
                                            value={row.className}
                                            onChange={(e) => handleClassInputChange(row.id, 'className', e.target.value)}/>
                                    </td>
                                    <td>
                                        <input type="text"
                                            value={row.classPrice}
                                            onChange={(e) => handleClassInputChange(row.id, 'classPrice', e.target.value)}/>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteRow(row.id)} css={GS.SButton}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailMyAcademy;