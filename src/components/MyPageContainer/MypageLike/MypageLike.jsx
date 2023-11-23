
import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import defalutProfile from '../../../assets/고양이.jpg';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';
import { useNavigate } from 'react-router-dom';

function MypageLike(props) {
    // 랜덤 색상을 생성하는 함수
    const getRandomColor = () => {
    // 0부터 255 사이의 랜덤한 RGB 값 생성
    const randomColor = `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
    return randomColor;
    };

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal")
    const principal = principalState?.data?.data;

    const userId = principal?.userId

    const getLikeAcademiesQuery = useQuery(["getLikeAcademies"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/mypage/like/${userId}`, option);
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    });
    
    return (
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                <ul css={S.UlBox}>
                    {!getLikeAcademiesQuery.isLoading && Array.isArray(getLikeAcademiesQuery?.data?.data) && getLikeAcademiesQuery?.data?.data.map(academy => {
                        const academyNameWithoutParentheses = academy.ACA_NM.replace(/\([^)]*\)/g, ''); // "()"를 빈 문자열로 대체
                        const koreanChars = academyNameWithoutParentheses.match(/[ㄱ-ㅎ가-힣]/g); // 한글만 추출
                        const firstTwoKoreanChars = koreanChars ? koreanChars.slice(0, 2).join('') : '';
                        const address = academy.FA_RDNMA.split(' ').slice(0, 2).join(' ');
                        const realm =
                            academy.REALM_SC_NM === '국제화'
                                ? '외국어'
                                : academy.REALM_SC_NM === '정보'
                                ? 'IT'
                                : academy.REALM_SC_NM.replace(/\(대\)/g, '').trim();
                        return  <li css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
                            {academy.logoImg ? (
                                <img src={academy.logoImg} alt={`${academy.ACA_NM}의 로고`}  />
                            ): (
                                <div css={[S.SRandomImg, { backgroundColor: getRandomColor() }]}>
                                    <span>{firstTwoKoreanChars}</span>
                                </div>
                            )}
                                <strong>{academy.ACA_NM}</strong>
                                    <div>{address}</div>
                                    <div>{realm}</div>
                            </li> 
                    })}
                </ul>
            </div>
        </div>
    );
}

export default MypageLike;