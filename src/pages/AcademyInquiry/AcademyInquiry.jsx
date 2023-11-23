import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';

function AcademyInquiry(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const academyId = queryParams.get('academyId');

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyData, setAcademyData ] = useState(); // 학원 정보 상태
    const [ inquiryData, setInquiryData ] = useState({
        userId: "",
        academyId: "",
        inquiryTitle: "",
        inquiryContent: "",
        answerChecked: 0
    });

    useEffect(() => {
        setInquiryData({
            ...inquiryData,
            userId: principal.data.data.userId,
            academyId: academyId
        })
    }, []);

    // 학원 정보 가져오기
    const getAcademy = useQuery(["getAcademy"], async () => {
        try {
            const options = {
                params: {
                    pIndex: 1,
                    pSize: 1,
                    ACADEMY_ID: academyId
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
            setAcademyData(response.data.academy)
        }
    })
    
    const handleTitle = (e) => {
        setInquiryData({
            ...inquiryData,
            inquiryTitle: e.target.value
        });
    }
    
    const handleContent = (e) => {
        setInquiryData({
            ...inquiryData,
            inquiryContent: e.target.value
        });
    }

    const InquiryButtonClick = async() => {
        // inquiryTitle과 inquiryContent가 빈값이나 null인지 확인
        if (!inquiryData.inquiryTitle || !inquiryData.inquiryContent) {
            // 필수 입력값이 비어있는 경우 처리
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        const confirmed = window.confirm(`학원명: ${academyData.ACA_NM}\n에 문의하시겠습니까?`);
        if (confirmed) {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            try {
                await instance.post("/inquiry", inquiryData, option);
                navigate("/account/mypage/inquiry/1");
            } catch (error) {
                console.error(error);
            }
        } else {
            return;
        }
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <h1 >문의사항</h1>
                <div css={S.AcademyContainer}>
                    <div>{academyData?.ACA_NM}</div>
                </div>
                <div css={S.InputContainer}>
                    <input type="text" name='title' placeholder='제목' onChange={handleTitle}/>
                    <textarea name="" id="" cols="30" rows="10" onChange={handleContent}></textarea>
                </div>
                <div css={S.ButtonContainer}>
                    <button onClick={InquiryButtonClick}>문의하기</button>
                </div>
            </div>
        </RootContainer>
    );
}

export default AcademyInquiry;