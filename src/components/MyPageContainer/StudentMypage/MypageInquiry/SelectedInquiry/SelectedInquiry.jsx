import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQueryClient } from 'react-query';

function SelectedInquiry({ selectedInquiry, setSelectedInquiry, page }) {
    const queryClient = useQueryClient(); // useQueryClient 훅을 사용하여 queryClient 가져오기

    const handleCheckButton = () => {
        setSelectedInquiry(null);
        queryClient.invalidateQueries(['getUserInquiryList', page]);
    }
    
    return (
        <div css={S.SContainer}>
            <div css={S.SNameContainer}>
                <span css={S.SName}>문의 내역</span>
                <div css={S.SAnswerStatusColor(selectedInquiry.answer)}>{selectedInquiry.answer !== null ? '답변 완료' : '답변 대기중'}</div>
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
            {!!selectedInquiry.answer && 
                <div css={S.SInfoContainer}>
                    <span>답변</span>
                    <div>{selectedInquiry.answer}</div>
                </div>}
            <button onClick={handleCheckButton}>확인</button>
        </div>
    );
}

export default SelectedInquiry;