import { css } from '@emotion/react';

export const SLayout = css`
    position: relative;
    margin: 0px auto;
    width: 1000px;
`;

export const SHead = css`
    display: flex;
    flex-direction: column;
    margin: 30px 0px 20px;
    background-color: white;
    z-index: 100;
`;

export const SBody = css`
    padding: 0 70px;
`;

export const SAcademyInfoContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 500px;
    height: 200px;
`;

export const SAcademtLogo = css`
    margin-right: 10px;
    border: 1px solid #888;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;

    & img {
        display: flex;
        justify-content: center;
        align-items: center;

    }
    
    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-weight: 600;
        color: #fff;
        width: 150px;
        height: 150px;
    }
`;

export const SAcademyInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    height: 150px;
`;

export const SAcademyName = css`
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    width: 340px;
    word-wrap: break-word;
`;

export const SAcademyLocation = css`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    & > * {
        margin-right: 4px;
    }
`;

export const SScoreAndReviewContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    & > * {
        margin-right: 4px;
    }
`;

export const SAcademyStar = css`
    color: yellow;
    font-size: 17px;
`;

export const SStar = css`
    color: yellow;
`;

export const SNavigation = css`
    text-decoration: none;
    color: #999;
`;

export const SMoveBar = (isHeaderFixed) => css`
    position: ${isHeaderFixed ? "fixed" : "static"};
    top: ${isHeaderFixed ? "0px" : ""};
    left: ${isHeaderFixed ? "auto" : "0"};
    right: ${isHeaderFixed ? "auto" : "0"};
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid #dbdbdb;
    padding: 10px;
    width: ${isHeaderFixed ? "1000px" : ""};
    font-size: 22px;
    background-color: white;
    & > input {
        display: none;
    }

    & > input + label {
        text-decoration: none;
        color: #999;
        cursor: pointer;
    }

    & > input:checked + label {
        border-bottom: 3px solid #92C2F4;
        padding-bottom: 2px;
        color: #333;
        
    }
`;

export const SIntroductionContainer  = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
`;

export const STitle = css`
    margin-bottom: 30px;
    font-size: 23px;
    font-weight: 600;
`;

export const SIntroductions = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SIntroduction = css`
    display: flex;
    width: 50%;
    margin-bottom:10px;
    font-size: 18px;

    & > div {
        width: 200px;
    }

    & > span {
        width: 300px;
    }
`;

export const SConvenienceContainer = css`
    width: 100%;
    height: 200px;

    div {
        display: flex;
        padding: 0 20px;
    }
    span {
        margin-right: 20px;
    }
`;

export const SReviewContainer = css`
    width: 100%;
    height: 450px;
`;

export const SReviewScore = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 23px;
    &> * {
        margin-right: 5px;
    }
`;

export const SReviewListContainer = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const SReviewList = css`
    display: flex;
    border: 1px solid #dbdbdb;
    padding: 10px;

    & > h1 {
        margin-right: 20px;
    }

    & > div {
        margin-right: 20px;
    }

    & > span {
        flex-grow: 1;
    }
`;

export const SReviewInfo = css`
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > button {
        margin-bottom: 10px;
        border: 1px solid #92C2F4;
        border-radius: 5px;
        width: 200px;
        font-size: 18px;
        font-weight: 600;
        background-color: #92C2F4;
        color: white;
        cursor: pointer;
    }
`;

export const SReviewBox = css`
    width: 100%;
    height: 120px;
    resize: none;
`;

export const SReviewUserScoreContainer = css`
    display: flex;

    & > h1 {
        font-size: 18px;
        margin-right: 10px;
    }
    & > div > input {
        border: none;
        width: 40px;
    }
    
`;

export const SClassInfo = css`
    width: 100%;
    height: 300px;
`;

export const STable = css`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;

    & thead {
        background-color: #eee;
    }

    & thead, tr, th, td {
        border: 1px solid #999;
        line-height: 30px;
        height: 30px;
        text-align: center;
    }
`;

export const SSide = css`
    position: fixed;
    top: 200px;
    right: 110px;
    width: 60px;
    height: 100%;
`;

export const SOptionBox = css`
    top: 180px;
    width: 60px;
    height: 110px;
    & * {
        background-color: transparent;
    }
`;

export const SLikeButton =  css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: none;
    padding: 0px;
    width: 60px;
    font-size: 13px;
    
    background-color: #fff;
    cursor: pointer;
`;

export const SLikeIcon = (isLike) => css`
    display: flex;
    flex-direction: column;
    width: 60px;
    font-size: 30px;
    color: ${isLike ? "red" : "black"};
`;

export const SinquiryButton = (isAcademyRegistered) => css`
    display: ${isAcademyRegistered ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0px;
    width: 60px;
    text-decoration: none;
    color: black;
    font-size: 13px;
    background-color: white;
    cursor: pointer;
`;

export const SinquiryIcon = css`
    display: flex;
    flex-direction: column;
    width: 60px;
    font-size: 30px;
`;

export const SEmpty = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
`;