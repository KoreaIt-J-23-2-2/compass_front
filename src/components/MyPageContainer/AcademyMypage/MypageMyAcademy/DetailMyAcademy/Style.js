import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SContainer = css`
    display: flex;
    flex-direction: column;
    margin: 40px 20px 20px;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    width: 740px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    background-color: white;
`;

export const SNameContainer= css`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 0;

    & > p {
        font-size: 13px;
        color: #999;
    }
`;

export const SName = css`
    font-size: 20px;
    font-weight: 600;
`;

export const SAcademyInfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    font-size: 16px;
    & > div {
        flex-grow: 1;
        margin: 10px;
    }
    & > div > span {
        margin-left: 10px;
        font-weight: 600;
    }
    & > div > div {
        margin-top: 5px;
        border: 1px solid #dbdbdb;
        border-radius: 15px;
        padding: 12px 10px;
        box-shadow: 1px 5px 5px 1px #eee;
    }
`;

export const SInfoContainer = css`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    & span {
        font-size: 18px;
        font-weight: 600;
    }
    & > div {
        margin: 10px 0;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 1px 5px 5px 1px #eee;
    }
`;

export const SImgBox = css`
    display: flex;
    justify-content: space-between;
    & > div {
        display: flex;
        margin-bottom: 10px;
        width: 450px;
    }
    & > div > img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        width: 80px;
        height: 80px;
        overflow: hidden;
    }
`;

export const SInfoBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    & input {
        width: 450px;
    }
`;

export const SCheckBox = css`
    display: flex;
    flex-wrap: wrap;
    & > div {
        margin-bottom: 10px;
        width: 190px;
    }
`;

export const SClassBox = css`
    margin-bottom: 10px;
    `;

export const STitleBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 10px;
`;

export const STable = css`
    width: 100%;
    background-color: white;

    thead {
        background-color: #dbdbdb;
    }

    th, tr, td {
        line-height: 40px;
        height: 40px;
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        overflow: auto;
        cursor: default;
    }

    input {
        outline: none;
        border: none;
        padding: 0 10px 0;
        width: 100%;
        overflow-wrap: break-word;
    }
`;

export const SEmpty = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
`;