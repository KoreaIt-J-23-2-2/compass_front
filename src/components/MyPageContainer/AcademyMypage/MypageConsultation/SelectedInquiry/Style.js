import { css } from '@emotion/react';

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
    align-items: center;
    margin-bottom: 10px;
    height: 60px;
`;

export const SNameContainerLeft= css`
    display: flex;
`;

export const SName = css`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 600;
`;

export const SAnswerStatusColor = (answer) => css`
    border-left: 2px solid #dbdbdb;
    padding-left: 10px;
    color: ${answer ? 'blue' : 'red'};
`;

export const SClose = css`
    cursor: pointer;
`;

export const SInfoContainer = css`
    display: flex;
    margin-bottom: 10px;
    width: 660px;
    align-items: center;

    span {
        width: 100px;
        font-size: 18px;
        overflow-wrap: break-word;
    }

    div {
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 10px;
        width: 560px;
        background-color: #eee;
        overflow-wrap: break-word;
    }
`;

export const SLine = css`
    margin: 10px 0px;
    border-top: 1px solid #dbdbdb;
`;

export const SInquiryAnswerContainer = css`
    display: flex;
    flex-direction: column;
`;

export const SInquiryAnswer = css`
    display: flex;
    margin-bottom: 10px;
    width: 660px;
    align-items: center;

    span {
        width: 100px;
        font-size: 18px;
        overflow-wrap: break-word;
    }

    textarea {
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 10px;
        width: 560px;
        font-size: 18px;
        background-color: #eee;
        overflow-wrap: break-word;
    }
`;

export const SubmitButton = css`
    
`;