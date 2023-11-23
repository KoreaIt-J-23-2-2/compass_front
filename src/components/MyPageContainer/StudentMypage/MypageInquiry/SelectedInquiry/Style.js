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
`;

export const SName = css`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

export const SAnswerStatusColor = (answer) => css`
    color: ${answer !== null ? 'blue' : 'red'};
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

export const SInquiryAnswer = css`

`;