import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */


export const MySidebarLayout = css`
    border-radius: 20px;
    box-shadow: 4px 4px 10px 4px #dbdbdb;
    padding: 30px 20px;
    background-color: beige;
    width: 280px;
    height: 100%;

    & a {
        text-decoration: none;
        color: black;
    }
`;

export const UserContainer = css`
    display: flex;
    align-items: center;
    padding: 0 5px;

    h2 {
        margin-right: 10px;
    }

    & div {
        border-radius: 50px;
        background-color: #dbdbdb;
        padding: 3px 6px 3px 3px;
    }
`;

export const IconContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #dbdbdb;
    padding: 30px 0;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    & span {
        margin: 5px;
    }
`;

export const RoleContainer = css`
    margin-top: 10px;

    & div {
        padding: 12px;
    }
`;

export const InquiryBox = css`
    display: flex;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        border: 1px solid red;
        border-radius: 50%;
        padding: 0px;
        width: 15px;
        height: 15px;
        color: white;
        background-color: red;
    }
`;