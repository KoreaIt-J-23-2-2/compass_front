import { css } from '@emotion/react';

export const FilterLayout = css`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    width: 300px;
    height: 100%;
`;

export const InitialContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    font-size: 16px;
    & h2 {
        line-height: 26px;
        font-size: 20px;
        font-weight: 600;
    }

    & button {
        transition: all ease 0.3s;
        border: none;
        background-color: white;
        font-size: 15px;
        color: #aaa;
        cursor: pointer;
        :hover {
            color: black;
        }
    }
`;