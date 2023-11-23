import { css } from '@emotion/react';

export const SLayout = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 30px;
    width: 50%;
    max-width: 600px; 
    background-color: white;
`;

export const STitle = css`
    border-bottom: 2px solid #dbdbdb;
    padding-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
`;

export const SListContainer = css`
    display: flex;
    margin: 20px auto;
    cursor: pointer;
`;

export const SCategoryList = css`
    margin-right: 50px;
    cursor: pointer;
`;

export const SCategoryListItem = css`
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 8px 10px;
    width: 170px;
    font-size: 18px;
    color: #666;
`;

export const SCategoryListItemSelected = css`
    background-color: #92C2F4;
    color: white;
    font-weight: bold;
`;


export const SCategoryDetailList = (isDetailOptionShow) => css`
    ${isDetailOptionShow ? "" : "display: none"};
    overflow-y: auto; /* 세로 스크롤이 필요한 경우만 스크롤을 보여줌 */
    max-height: 700px;
    cursor: pointer;
`;

export const SCategoryDetailListItem = css`
    border-radius: 10px;
    padding: 10px 10px;
    color: #333;
`;

export const SCategoryDetailListItemSelected = css`
    background-color: #92C2F4;
    color: white;
`;

export const ButtonContainer = css`
    display: flex;
    justify-content: space-between;
`;