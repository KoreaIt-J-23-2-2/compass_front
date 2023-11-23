import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../Style";
import MyPageSidebar from '../MyPageSidebar';
import {AiFillSetting} from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../api/config/instance';




function StudentSidebar({ uncheckedAnswerCount, setUncheckedAnswerCount }) {

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const likeCountOfMypage = queryClient.getQueryState("getLikeCountOfMypage");
    const { likeId } = useParams(); 

    const getUncheckedAnswerCount = useQuery(['getUncheckedAnswerCount'], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/inquiry/${principal?.data?.data.userId}/UncheckedAnswerCount`, option)
        } catch (error) {
            console.error(error);
        }
    },{
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            // uncheckedInquiryCount 값을 가져와서 상태 업데이트
            setUncheckedAnswerCount(data.data);
        }
    })

    return (
        <MyPageSidebar role={'학생'}>
            <div css={S.IconContainer}>
                <Link to='/account/mypage'>
                    <div>
                        <span>❤️</span>
                        <span>관심 학원 {likeCountOfMypage?.data?.data}개</span>
                    </div>
                </Link>
                <Link to='/account/mypage/user'>
                    <div>
                        <span><AiFillSetting/></span>
                        <span>개인 정보 수정</span>
                    </div>
                </Link>
            </div>
            <div css={S.RoleContainer}>
                <Link to='/account/mypage/appliedacademy/1'>
                    <div>🗒️ 학원 신청 목록</div>
                </Link>
                <Link to='/account/mypage/inquiry/1'>
                    <div css={S.InquiryBox}>
                        📞 나의 학원 문의 
                        { uncheckedAnswerCount > 0 && <div>{uncheckedAnswerCount}</div>}
                    </div>
                </Link>
                <Link to='/account/mypage/review'>
                    <div>📜 작성한 후기</div>
                </Link>
            </div>
        </MyPageSidebar>
    );
}

export default StudentSidebar;