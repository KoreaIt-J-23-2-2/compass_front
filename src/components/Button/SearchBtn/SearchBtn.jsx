import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function SearchBtn({ onClick }) {
    return (
        <div css={S.SSearchBtnBox}>
            <button className='btn-hover color-9' onClick={onClick}><AiOutlineSearch/></button>
        </div>
    );
}

export default SearchBtn;