import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const UlBox = css`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    overflow: auto;

    strong {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        text-align: center;
        width: 100%;
    }

    li:nth-of-type(3n+2) {
        margin: 0px 10px 20px;
    }

    li:not(.recent):nth-of-type(n) {
        margin-bottom: 15px;
    }
`;

export const LiBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 20px;
    width: 255px;
    background-color: white;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 210px;
        height: 210px;
    }

    & * {
        margin-bottom: 5px;
    }

    & div:nth-last-of-type(1) {
        margin-bottom: 0;
    }
`;

export const SRandomImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 210px;
    height: 210px;
    & span {
        font-size: 50px;
        font-weight: 600;
        color: #fff;
    }
`;
