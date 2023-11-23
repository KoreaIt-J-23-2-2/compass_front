import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
import Select from 'react-select';
import SelectedInquiry from './SelectedInquiry/SelectedInquiry';

function MypageConsultation(props) {
    const navigate = useNavigate();
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    const [ academyList, setAcademyList ] = useState();
    const [ selectedAcademy, setSelectedAcademy ] = useState({ value: null, label: '전체' });
    const [ selectedInquiry, setSelectedInquiry ] = useState();
    const [ unansweredOnly, setUnansweredOnly ] = useState(0);

    const getMyAcademyAll = useQuery(['getMyAcademyAll'], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academies/${principal.data.data.userId}`,option)
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyList([{ value: null, label: '전체' }, ...response.data.map(academy => {
                return { value: academy.academyId, label: academy.acaNm };
            })])
            
        }
    })

    const getInquiryList = useQuery(['getInquiryList', page, selectedAcademy, unansweredOnly], async () => {
        try {
            const option = {
                params: {
                    userId: principal.data.data.userId,
                    academyId: selectedAcademy ? selectedAcademy.value : null,
                    page: page,
                    unansweredOnly: unansweredOnly
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/inquiries`,option)
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedInquiry(null);
        }
    })

    const pagination = () => {
        if(getInquiryList.isLoading) {
            return <></>
        }
        const totalAcademyCount = getInquiryList.data.data.listTotalCount;
        const lastPage = getInquiryList.data.data.listTotalCount % 5 === 0 
            ? totalAcademyCount / 5 
            : Math.floor(totalAcademyCount / 5) + 1

        const startIndex = page % 5 === 0 ? page - 4 : page - (page % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

        const pageNumbers = [];
        
        for(let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/account/mypage/consultation/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button  className={parseInt(page) === num ? 'selected' : ''}
                                    onClick={() => {
                                        navigate(`/account/mypage/consultation/${num}`);
                                    }} 
                                key={num}>{num}
                            </button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/account/mypage/consultation/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    const handleAcademyChange = (selectedOption) => {
        setSelectedAcademy(selectedOption);
    };

    const handleInquiryOnClick = (inquiry) => {
        setSelectedInquiry(inquiry);
    }

    const handleUnansweredOnlyChange = (event) => {
        setUnansweredOnly(event.target.checked ? 1 : 0);
    };

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div css={S.SOptionBox}>
                <Select options={academyList} 
                    css={S.SSelect}
                    defaultValue={selectedAcademy}
                    onChange={handleAcademyChange} 
                />
                <div>
                    <input 
                        type="checkbox" 
                        id='unansweredOnly' 
                        onChange={handleUnansweredOnlyChange} 
                    />
                    <label htmlFor="unansweredOnly">미답변 문의</label>
                </div>
            </div>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>학원명</td>
                            <td>문의사항</td>
                            <td>등록자</td>
                            <td>답변</td>
                        </tr>
                    </thead>
                    <tbody>
                        {!getInquiryList.isLoading && Array.isArray(getInquiryList?.data?.data.inquiries) && getInquiryList?.data?.data.inquiries.map(inquiry => {
                                const answerDisplay = inquiry.answer ? 'O' : 'X';
                                return  <tr key={inquiry.inquiryId} 
                                            onClick={() => handleInquiryOnClick(inquiry)} 
                                            style={{ fontWeight: selectedInquiry === inquiry ? 'bold' : 'normal' }}>
                                            <td>{inquiry.inquiryId}</td>
                                            <td>{inquiry.acaNm}</td>
                                            <td>{inquiry.inquiryTitle}</td>
                                            <td>{inquiry.nickname}</td>
                                            <td>{answerDisplay}</td>
                                        </tr>
                        })}
                    </tbody>
                </table>
                <div css={S.SPageNumbers}>
                    {pagination()}
                </div>
                {!!selectedInquiry && 
                    <SelectedInquiry
                        key={selectedInquiry.inquiryId}
                        selectedInquiry={selectedInquiry}
                        setSelectedInquiry={setSelectedInquiry}
                        page={page} 
                        selectedAcademy={selectedAcademy}
                    />
                }
            </div>
        </div>
    );
}

export default MypageConsultation;