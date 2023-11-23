/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SSearchBtnBox = css`
    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    & > button > svg {
        margin: 0;
        color: white;
        font-size: 25px;
    }
    .btn-hover {
        width: 100px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        height: 100%;
        text-align:center;
        border: none;
        background-size: 300% 100%;

        border-radius: 5px;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    .btn-hover:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    .btn-hover:focus {
        outline: none;
    }

    .btn-hover.color-9 {
        background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
        /* box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75); */
    }
`;