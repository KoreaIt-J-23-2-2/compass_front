/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const SLinkBtn = css`
    .button_container {
        width: 200px;
    }

    .btn {
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        outline: none;
        overflow: hidden;
        position: relative;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        background-color: #1B4965;
        padding: 17px 60px;
        margin: 0 auto;
        box-shadow: 0 5px 15px rgba(0,0,0,0.20);
    }

    .btn span {
        position: relative; 
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn span svg {
        margin-left: 5px;
    }

    .btn:after {
    content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
        width: 140%;
        background: #5FA8D3;
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btn:hover:after {
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
        transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
`