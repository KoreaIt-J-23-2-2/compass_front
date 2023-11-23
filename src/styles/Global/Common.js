import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const Common = css`
    * {
        box-sizing: border-box;
        font-family: 'IBM Plex Sans KR', sans-serif !important;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgb(177, 194, 203);
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
        background: rgba(177, 194, 203, .1);
    }
`;

export const SButton = css`
    position: relative;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px 8px;
    display: inline-block;
    text-align: center;
    color: black;
    background-color: #eee;
    cursor: pointer;
    :active {
        top: 2px; 
        box-shadow: 0 0 #eee; 
        background-color: #aaa;
        color: white;
    }
`