import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useRecoilState } from 'recoil';
import { selectedAgeState, selectedConvenienceState } from '../../store/searchOptions';
import ConvenienceOptions from './ConvenienceOptions/ConvenienceOptions';
import AgeOptions from './AgeOptions/AgeOptions';

function FindAcademiesSidebar(props) {

    const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState);
    const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState);

    const reset = () => {
        setSelectedAgeOptions({
            AgeCount: 0,
            list: []
        });
        setSelectedConvenienceOptions({
            convenienceCount: 0,
            list: []
        });
    }

    console.log(selectedAgeOptions);    
    console.log(selectedConvenienceOptions);

    return (
        <div css={S.FilterLayout}>
            <div css={S.InitialContainer}>
                <h2>상세 검색</h2>
                <button onClick={reset}>초기화</button>
            </div>
            <AgeOptions />
            <ConvenienceOptions />
        </div>
    );
}

export default FindAcademiesSidebar;