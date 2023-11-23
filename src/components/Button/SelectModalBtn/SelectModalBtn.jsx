import React from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { AiOutlineDown } from 'react-icons/ai'

function SelectModalBtn({ children }) {

    return (
        <div css={S.SSelectBox}>
            <div>{children} <AiOutlineDown/></div>
        </div>
    );
}

export default SelectModalBtn;