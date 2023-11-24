import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import * as GS from '../../../../styles/Global/Common';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../../api/config/instance';
import { useQuery } from 'react-query';
import { useQueryClient } from 'react-query';
import RetryMyAcademy from './RetryMyAcademy/RetryMyAcademy';
import Pagination from '../../../Pagination/Pagination';

function MypageAppliedAcademy(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    
    const [ selectedAcademy, setSelectedAcademy ] = useState(null);
    const [ selectedTarget, setSelectedTarget ] = useState(null);
    const [ isApplicatedOpen, setIsApplicatedOpen ] = useState(false);

    const getAppliedAcademies = useQuery(["getAppliedAcademy", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/applied/${principal.data.data.userId}/${page}`, option);
    }, {
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })

    const handleAcademyOnClick = (e, academy) => {
        setSelectedAcademy((prevSelectedAcademy) => 
            prevSelectedAcademy === academy ? null : academy
        );

        if (selectedTarget === e.target) {
            setIsApplicatedOpen((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setIsApplicatedOpen(true);
    }

    return (
        <div>
            <h2>🗒️ 학원 신청 목록</h2>
            <div>
                <div css={S.SComment}>학원 승인 여부를 확인하고 재신청 해보세요!</div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                            <td>승인 여부</td>
                            <td>학원 선택</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getAppliedAcademies.isLoading && 
                            Array.isArray(getAppliedAcademies?.data?.data.academyRegistrations) && 
                            getAppliedAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal', color: academy.approvalStatus < 0 ? 'red' : 'black'}}>
                                            <td>{academy.acaAsnum}</td>
                                            <td>{academy.acaNm}</td>
                                            <td>{academy.approvalStatus === 0 ? "승인 대기" : "승인 거절"}</td>
                                            <td>
                                                <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                    {selectedAcademy === academy ? '선택 해제' : '선택'}
                                                </button>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
                {!getAppliedAcademies.isLoading &&
                    <Pagination totalCount={getAppliedAcademies?.data?.data?.listTotalCount}
                        link={`/account/mypage/appliedacademy`}/>}
                <div>
                    {isApplicatedOpen && !!selectedAcademy && 
                        (selectedAcademy?.approvalStatus > 0 ? <></> : 
                            selectedAcademy.approvalStatus === 0 ? 
                            <RetryMyAcademy type={"awaiting"} selectedAcademy={selectedAcademy}/> : 
                            <RetryMyAcademy type={"reject"} selectedAcademy={selectedAcademy}/>)}
                </div>
            </div>
        </div>
    );
}

export default MypageAppliedAcademy;