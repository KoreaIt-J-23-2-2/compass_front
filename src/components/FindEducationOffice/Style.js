import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    width: 100%;
`;

export const SHeadContainer = css`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    height: 45px;
`;

export const SInput = css`
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    width: 100%;
    margin-right: 10px;
    & > input {
        margin-left: 5px;
        border: none;
        outline: none;
        padding: 10px;
        margin-right: 5px;
        width: 100%;
        font-size: 15px;
    }
`;

export const SBodyContainer = css`
    border: 1px solid #ccc;
    border-radius: 5px;

    width: 100%;
    height: 400px;
    overflow-y: auto;

    & > :nth-of-type(1) {
        background-color: #E7EEF1;
        font-weight: 600;
    }
    `;

export const SList = css`
    display: flex;
    padding: 7px 5px;
    border-bottom: 1px solid #dbdbdb;
    & > div {
        display: flex;
        align-items: center;
        height: 30px;
        padding: 5px;
    }

    & > :nth-of-type(1) {
        width: 20%;
    }
    & > :nth-of-type(2) {
        width: 15%;
    }
    & > :nth-of-type(3) {
        width: 55%;
    }
    & > :nth-of-type(4) {
        width: 10%;
    }
`;

export const STitleName = css`
    padding: 20px 0px 5px 0px;
`;

export const SChoiceBox = css`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    margin: 5px 0px;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
`;

