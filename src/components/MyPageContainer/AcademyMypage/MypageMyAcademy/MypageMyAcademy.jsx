import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './Style';
import * as GS from '../../../../styles/Global/Common';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import DetailMyAcademy from './DetailMyAcademy/DetailMyAcademy';
import { useEffect } from 'react';

function MypageMyAcademy(props) {

    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ selectedAcademy, setSelectedAcademy ] = useState(null);
    const [ selectedTarget, setSelectedTarget ] = useState(null);
    const [ selectAcademyInfoOpen, setSelectAcademyInfoOpen ] = useState(false);

    const getMyAcademies = useQuery(["getMyAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/${principal.data.data.userId}/${page}`, option);
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
            setSelectAcademyInfoOpen((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setSelectAcademyInfoOpen(true);
    }

    const pagination = () => {
        if(getMyAcademies.isLoading) {
            return <></>
        }
        const totalAcademyCount = getMyAcademies.data.data.listTotalCount;
        const lastPage = getMyAcademies.data.data.listTotalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1;

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/academies/${principal.data.data.userId}/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`/academies/${principal.data.data.userId}/${num}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/academies/${principal.data.data.userId}/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    return (
        <div>
            <h2>🎒 나의 학원</h2>
            <div>
                <div css={S.SComment}>나의 학원 정보를 수정해보세요! 학원명을 클릭하면 상세 페이지로 이동합니다.</div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>학원 번호</td>
                            <td>학원명</td>
                            <td>학원 선택</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getMyAcademies.isLoading && 
                            Array.isArray(getMyAcademies?.data?.data.academyRegistrations) && 
                            getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                                return  <tr key={academy.academyRegistrationId} 
                                            style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                            <td>{academy.acaAsnum}</td>
                                            <td css={S.SAcaNm} onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.academyId}`)}}>{academy.acaNm}</td>
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
                <div css={S.SPageNumbers}>
                    {pagination()}
                </div>
                <div>
                    {selectAcademyInfoOpen && !!selectedAcademy && <DetailMyAcademy selectedAcademy={selectedAcademy}/>}
                </div>
            </div>
        </div>
    );
}

export default MypageMyAcademy;