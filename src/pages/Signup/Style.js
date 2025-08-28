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

// 제목
export const STitle = css`
    font-size: 30px;
    font-weight: 1000;
    margin-bottom: 30px;
`;

export const STitle2 = css`
    color: #8c98a4;
    margin-bottom: 20px;
`;

// 폼
export const SForm = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SInput = css`
    width: 380px;
    height: 45px;
    margin-bottom: 15px;
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

export const SButton = css`
    width: 380px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #1976de;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #125ab2;
    }
`;

// 로그인 이동
export const SLoginMove = css`
    margin-top: 15px;
    text-align: center;
`;

export const SLoginTitle = css`
    font-size: 15px;
    color: #8c98a4;
    margin-right: 8px;
`;

export const SLoginBtn = css`
    color: #1976de;
    background: none;
    border: none;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

// 기존 SInput은 그대로 두고, 비밀번호 전용 박스/스타일 추가

export const SPasswordBox = css`
    position: relative;
    width: 380px;
    margin-bottom: 15px;
`;

export const SPasswordInput = css`
    width: 100%;
    height: 45px;
    padding: 10px;
    padding-right: 40px; /* 아이콘 공간 확보 */
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: #1976de;
        box-shadow: 0 0 5px rgba(25, 118, 222, 0.5);
    }
`;

export const SEyeIcon = css`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 18px;
    color: #8c98a4;
    &:hover {
        color: #1976de;
    }
`;
