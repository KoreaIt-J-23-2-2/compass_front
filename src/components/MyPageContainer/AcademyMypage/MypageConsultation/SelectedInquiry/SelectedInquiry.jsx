import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { instance } from '../../../../../api/config/instance';
import { useQueryClient } from 'react-query';

function SelectedInquiry({ selectedInquiry, setSelectedInquiry, page, selectedAcademy }) {
    const queryClient = useQueryClient(); // useQueryClient 훅을 사용하여 queryClient 가져오기
    const [ inquiry, setInquiry ] = useState({
        answer: selectedInquiry.answer,
        answerChecked: 1
    });

    const handleAnswerOnChange = (e) => {
        setInquiry({
            ...inquiry,
            answer: e.target.value
        });
    }

    const handleClose = () => {
        setSelectedInquiry(null);
    }

    const handleAnswerSubmit = async () => {
        if (inquiry.answer === selectedInquiry.answer) {
            return;
        }
        if (inquiry.answer === "") {
            alert("답변을 입력해 주세요");
            return;
        }
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.put(`/inquiry/${selectedInquiry.inquiryId}/answer`, inquiry, option);
            alert("답변 완료.")
            // getInquiryList 쿼리를 다시 불러오기 위해 invalidateQueries 사용
            queryClient.invalidateQueries(['getInquiryList', page, selectedAcademy]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div css={S.SContainer}>
            <div css={S.SNameContainer}>
                <div css={S.SNameContainerLeft}>
                    <div css={S.SName}>문의 내역</div>
                    <div css={S.SAnswerStatusColor(selectedInquiry.answer)}>
                        {selectedInquiry.answer ? '답변 완료' : '답변 대기중'}
                    </div>
                </div>
                <div css={S.SClose} onClick={handleClose}>✖</div>
            </div>
            <div>
                <div css={S.SInfoContainer}>
                    <span>학원명</span>
                    <div>{selectedInquiry.acaNm}</div>
                </div>
                <div css={S.SInfoContainer}>
                    <span>제목</span>
                    <div>{selectedInquiry.inquiryTitle}</div>
                </div>
                <div css={S.SInfoContainer}>
                    <span>내용</span>
                    <div>{selectedInquiry.inquiryContent}</div>
                </div>
            </div>
            <div css={S.SLine}></div>
            <div css={S.SInquiryAnswerContainer}>
                <div css={S.SInquiryAnswer}>
                    <span>답변</span>
                    <textarea name="" id="" cols="80" rows="10" 
                        defaultValue={inquiry.answer}
                        onChange={handleAnswerOnChange}
                    />
                </div>
                <button css={S.SubmitButton} onClick={handleAnswerSubmit}>
                    확인
                </button>
            </div>
        </div>
    );
}

export default SelectedInquiry;