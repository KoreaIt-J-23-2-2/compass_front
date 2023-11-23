import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SSelectBox = css`
    height: 100%;
    cursor: pointer;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        padding: 10px 20px;
        width: 200px;
        height: 100%;
        background-color: white;
        color: #666;
    }
`