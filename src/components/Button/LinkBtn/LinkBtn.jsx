import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from "./Style"
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";


function LinkBtn({ link, btn }) {
    return (
        <div css={S.SLinkBtn} className='button_container'>
            <Link className='btn' to={link}><span>{btn}<FaChevronRight /></span></Link>
        </div>
    );
}

export default LinkBtn;