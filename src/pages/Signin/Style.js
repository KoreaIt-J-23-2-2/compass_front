import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

// 레이아웃 & 컨테이너
export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SContainer = css`
    margin: 90px auto;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 50px;
    width: 500px;
`;

export const STitleRow = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const STitle = css`
    font-size: 30px;
    font-weight: 1000;
`;

export const STestTooltipWrapper = css`
    position: relative;
    font-size: 14px;
    color: #999;
    cursor: default;

    &:hover {
        color: #1976de;
    }

    &:hover div {
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
    }

    svg {
        vertical-align: middle;
    }
`;

export const STestTooltip = css`
    position: absolute;
    top: -5px; /* 글자 높이에 맞게 살짝 위로 */
    left: calc(100% + 10px);
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 12px;
    width: 220px;
    font-size: 13px;
    color: #333;
    line-height: 1.5;
    opacity: 0;
    visibility: hidden;
    transform: translateX(-5px);
    transition: all 0.25s ease;
    z-index: 10;

    /* 말풍선 꼬리 */
    &::before {
        content: "";
        position: absolute;
        top: 10px; /* 글자 옆쯤에 오도록 */
        left: -6px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 6px solid #dbdbdb;
    }

    &::after {
        content: "";
        position: absolute;
        top: 10px;
        left: -5px;
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid #fff;
    }

    & p {
        margin: 3px 0;
    }
`;

export const STitle2 = css`
    color: #8c98a4;
`;

// 일반 로그인
export const SLoginBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
`;

export const SInput = css`
    width: 380px;
    height: 45px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: #1976de;
        box-shadow: 0 0 5px rgba(25, 118, 222, 0.5);
    }
`;

export const SLoginBtn = css`
    width: 380px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #1976de;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #125ab2;
    }
`;

// 회원가입 이동
export const SSignupBtnBox = css`
    margin-top: 15px;
    text-align: center;
`;

export const SSignupTitle = css`
    font-size: 15px;
    color: #8c98a4;
    margin-right: 8px;
`;

export const SSignupBtn = css`
    color: #1976de;
    background: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

// 소셜 로그인
export const SDivider = css`
    display: flex;
    align-items: center;
    margin: 30px 0;
    width: 100%;
    font-size: 14px;
    color: #8c98a4;

    &::before,
    &::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid #dbdbdb;
    }

    &::before {
        margin-right: 10px;
    }

    &::after {
        margin-left: 10px;
    }
`;

export const SSocialLoginBox = css`
    display: flex;
    align-items: center;
    gap: 20px;
    & img {
        height: 40px;
    }
`;

export const SkakaoLoginBtn = css`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: #fee500;
    width: 180px;
    cursor: pointer;
`;

export const SNaverLoginBtn = css`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: #03c75a;
    width: 180px;
    cursor: pointer;
`;

// 로고
export const SMainLogo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
    margin-bottom: 10px;
`;
