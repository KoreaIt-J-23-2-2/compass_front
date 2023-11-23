import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const STopContainer = css`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 40px auto;
    border: none;
    border-radius: 50px;
    padding: 30px 40px 40px;
    width: 800px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
`;

export const SH1 = css`
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: 600;
`;

export const STopSpan = css`
    margin-bottom: 15px;
    color: #999;
`;

export const SMatchButtonContainer = css`
    margin-top: 15px;
    & > input {
        display: none;
    }

    & > input + label {
        margin: 0px 15px;
        border: 1px solid #dbdbdb;
        border-radius: 25px;
        padding: 10px 50px;
        background-color: white;
        font-size: 23px;
        box-shadow: 1px 5px 5px 1px #eee;
        cursor: pointer;
    }

    & > input:checked+label {
        background-color: #5FA8D3;
        color: white;
    }
    
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    margin: 40px auto;
    border: none;
    border-radius: 50px;
    padding: 30px 40px;
    width: 800px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
`;

export const SContainerName = css`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

export const SInfoContainer = css`
    position: relative;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        color: #aaa;
        cursor: pointer;
    }
    
    p svg {
        margin-left: 5px;
    }
    
    p:hover + div {
        opacity: 1;
    }
    
    div {
        transition: all ease 0.3s;
        position: absolute;
        right: 0;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px;
        line-height: 20px;
        width: 300px;
        opacity: 0;
        cursor: default;
    }
`;

export const SSelectBoxContainer = css`
    padding-bottom: 30px;
    & > p {
        padding-bottom: 10px;
    }
`;

export const SChoiceBox = css`
    display: flex;
    align-items: center;
    margin: 5px 0px;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
`;

export const SNameContainer= css`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: 13px;
        color: #999;
    }
`;

export const SImgContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    width: 100%;
`;

export const SImg = css`
    width: 500px;
`;

export const SButtonContainer = css`
    display: flex;
    justify-content: center;
    margin: 30px 0px;
    width: 100%;
`;

export const SSpanContainer = css`
    margin: 10px auto;
    width: 500px;

    & > span {
        color: #999;
    }
`;

export const SSubmitButton = css`
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 5px 0;
    width: 500px;
    font-size: 20px;
    background-color: #5FA8D3;
    color: white;
    font-size: 23px;
    box-shadow: 1px 5px 5px 1px #eee;
    cursor: pointer;
`;
