import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "../../Style"
import { useQuery } from 'react-query';

function MypageInquiry(props) {

    const getInquiryList = useQuery(['getInquiryList'], async () => {
        
    })

    return (
        <div>
            <h2>📞 나의 학원 문의</h2>
            <div>
                <table css={S.STable}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>학원명</td>
                            <td>문의사항</td>
                            <td>답변</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>ㅁㅁㅁ학원</td>
                            <td>ㅁㅁㅁ에 대해 문의드립니다.</td>
                            <td>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageInquiry;