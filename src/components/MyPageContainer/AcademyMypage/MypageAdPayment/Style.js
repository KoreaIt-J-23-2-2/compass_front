import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SProductContainer = css`
    display: flex;
    align-items: center;
`;

export const SProductLayout = css`
    text-align: left;
    margin: 0px 10px 0px 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    height: 220px;
    background-color: transparent;
    cursor: pointer;
`;

export const SProductImgBox = css`
    position: relative;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 10px;
    width: 200px;
    height: 100px;
`;

export const SProductImg = css`
    border-radius: 10px;
    display: flex;
    width: 200px;
    height: 100px;
    z-index: 0;
`;

export const SProductImgText = css`
        position: absolute;
        top: 50px;
        left: 60px;
        color: red;
        font-size: 20px;
        font-weight: 1000;
        z-index: 1;
`;

export const SProductDetail = css`
    position: relative;
    top: auto;
`;


export const STable = css`
    margin: 0 20px;
    width: 740px;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    thead, tr, td {
        height: 40px;
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
        cursor: default;
    }
`;

export const SPageNumbers = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;

        :disabled {
            background-color: white;
            border: none;
            cursor: default;
        }

        &.selected {
            background-color: #92c2f4;
        }
    }
`;