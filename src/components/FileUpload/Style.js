import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

export const SFileUploadContainer = css`
    display: flex;
    flex-direction: column;

    span {
        font-size: 18px;
    }

    & input {
        display: none;
    }

    p {
        margin-left: 5px;
        font-size: 14px;
        color: #4c4c4cff;
        height: 100%;
    }

    .fileBox {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }

    .progress {
        margin-bottom: 10px;
    }
`;

export const SUploadLabel = css`
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding-top: 7px;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: white;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;
`;
