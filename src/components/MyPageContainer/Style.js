import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SInterestAcademyBox = css`
    border-radius: 20px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    padding: 30px;
    width: 850px;
    height: 100%;
    background-color: wheat;

    & h2 {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
    }
`;

export const SInterestTitle = css`
    font-size: 20px;
    font-weight: bold;
`;

export const SInterestList = css`
    padding: 10px 0px;
    box-sizing: content-box;
`;

export const STable = css`
    margin: 0 20px;
    width: 740px;
    height: 200px;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    thead, tr, td {
        height: 50px;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
    }

    td:nth-of-type(1){    //1번째 td인 경우
        font-weight: 600;
    }

    button {
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        background-color: white;
        padding: 3px 5px;
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

export const SOptionBox = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 760px;
`;

export const SSelect = css`
    margin-left: 20px;
    width: 200px;
`;