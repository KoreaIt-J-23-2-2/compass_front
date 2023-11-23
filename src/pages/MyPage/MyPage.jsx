
import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import MyPageSidebar from '../../components/MyPageSidebar/MyPageSidebar';
import MypageContainer from '../../components/MyPageContainer/MypageContainer';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import MypageUser from '../../components/MyPageContainer/MypageUser/MypageUser';
import MyPageInquiry from '../../components/MyPageContainer/StudentMypage/MypageInquiry/MypageInquiry';
import MypageReview from '../../components/MyPageContainer/StudentMypage/MypageReview/MypageReview';
import MypageAdPayment from '../../components/MyPageContainer/AcademyMypage/MypageAdPayment/MypageAdPayment';
import MyPageConsultation from '../../components/MyPageContainer/AcademyMypage/MypageConsultation/MypageConsultation';
import AcademyWaiting from '../../components/MyPageContainer/WebMasterMypage/AcademyWaiting/AcademyWaiting';
import InquiryList from '../../components/MyPageContainer/WebMasterMypage/InquiryList/InquiryList';
import MypageLike from '../../components/MyPageContainer/MypageLike/MypageLike';
import StudentSidebar from '../../components/MyPageSidebar/StudentSidebar/StudentSidebar';
import WebMastesrSidebar from '../../components/MyPageSidebar/WebMastesrSidebar/WebMastesrSidebar';
import AcademySidebar from '../../components/MyPageSidebar/AcademySidebar/AcademySidebar';
import { css } from '@emotion/react';
import MypageAppliedAcademy from '../../components/MyPageContainer/AcademyMypage/MypageAppliedAcademy/MypageAppliedAcademy';
import MypageMyAcademy from '../../components/MyPageContainer/AcademyMypage/MypageMyAcademy/MypageMyAcademy';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';
/** @jsxImportSource @emotion/react */

const SLayout = css`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    width: 1160px;
`;

function MyPage(props) {

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const principal = principalState?.data?.data;

    const [ roleId, setRoleId ] = useState(principal.roleId);

    const [ uncheckedAnswerCount, setUncheckedAnswerCount ] = useState();

    const userId = principal?.userId

    const getLikeCountOfMypage = useQuery(["getLikeCountOfMypage"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/mypage/like/count/${userId}`, option);
        }catch(error) {
            console.error(error)
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false
    })

    const sidebarComponent =
        roleId === 0
            ? <WebMastesrSidebar/>
            : roleId === 1
            ? <StudentSidebar 
                uncheckedAnswerCount={uncheckedAnswerCount}
                setUncheckedAnswerCount={setUncheckedAnswerCount}
            />
            : roleId === 2
            ? <AcademySidebar />
            : null;

    return (
        <RootContainer>
            <div css={SLayout}>
                {getLikeCountOfMypage.isLoading ? <></> : sidebarComponent}

                <MypageContainer title={"title"}>
                    <Routes>
                        <Route path='/' element={<MypageLike />} />
                        <Route path='/user' element={<MypageUser />} />
                        <Route path='/inquiry/:page' element={<MyPageInquiry setUncheckedAnswerCount={setUncheckedAnswerCount}/>} />
                        <Route path='/review' element={<MypageReview />} />
                        <Route path='/myacademy/:page' element={<MypageMyAcademy />} />
                        <Route path='/appliedacademy/:page' element={<MypageAppliedAcademy />} />                    
                        <Route path='/consultation/:page' element={<MyPageConsultation />} />
                        <Route path='/adpayment/:page' element={<MypageAdPayment />} />
                        <Route path='/academywaiting/:page' element={<AcademyWaiting />} />
                        <Route path='/inquirylist' element={<InquiryList />} />
                    </Routes>
                </MypageContainer>
            </div>
        </RootContainer>
    );
}

export default MyPage;