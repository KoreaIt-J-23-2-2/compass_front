import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 80px;
    background-color: white;
    font-size: 18px;
    font-weight: 500;

    & a { // & : 자신, a : 하위요소
        text-decoration: none;
    }
`;

export const SContainer = css`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 80px;
`;

export const SLogoButton = css`
    margin-left: 30px;
    width: auto;
    height: 60px;
    margin-right: 20px;
`;

export const SButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    width: 330px;
    & a {
        transition: all ease 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 20px;
        color: black;
        width: 165px;
        height: 80px;
        &:hover {
            font-size: 20px;
            background-color: #E9F6FF;
        }
    }
`;

export const SLoginButtonBox = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding: 25px 40px;
    font-size: 16px;
    & * {
        color: black;
    }
`;

export const SDropLayout = css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        margin-left: 5px;
    }
`;

export const SDropDown = css`
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #dbdbdb;
    border-top: 0;
    box-shadow: 0px 4px 10px 0px #dbdbdb;
    background-color: white;
    width: 180px;
    z-index: 1;
    font-size: 16px;
    & :hover{
        & * {
            color: white;
        }
        background-color: #5FA8D3;
    }
    & > li > * {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        cursor: pointer;
    }
    & li:first-of-type {
        border-bottom: 1px solid #dbdbdb;
    }
`;