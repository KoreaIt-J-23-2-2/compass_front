import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillStar, AiOutlineCheck, AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { IoHomeSharp } from 'react-icons/io5'
import { BsFillPeopleFill, BsBarChartLineFill, BsFillCalendar2CheckFill, BsFillBookFill, BsFillPencilFill, BsChatLeftTextFill } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';

function AcademyInfo(props) { //교육청 코드, 학원코드, 학원 이름 넘겨받음
    const navigate = useNavigate();
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);      // 좋아요, 문의 fixed

    const [ academyData, setAcademyData ] = useState();   // 학원 정보를 저장하는 상태 변수
    
    // const { educationOfficeCode, academyCode } = useParams();       //찾기 페이지에서 학원 정보 가져옴
    const location = useLocation();

    // React Query를 사용하여 학원 정보를 가져오는 쿼리 설정
    const getAcademies = useQuery(["getAcademies"], async () => {
        try {
            const searchParams = new URLSearchParams(location.search);

            const options = {
                params: {
                    pIndex: 1,
                    pSize: 20,
                    userId: searchParams.get('userId')
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            // api, options를 get 요청
            return await instance.get("/academies", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyData(response?.data?.academies);
        }
    })

    useEffect(() => {   //페이지 스크롤에 따른 좋아요/문의 위치 이동
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if(getAcademies.isLoading) {    //undefined인 경우
        return <></>
    }

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SHead}>
                    <div css={S.SAcademyInfoContainer}>
                        <div css={S.SAcademtLogo}></div>
                        <div css={S.SAcademyInfo}>
                            <div css={S.SAcademyName}>{academyData.ACA_NM}</div>
                            <div css={S.SAcademyLocation}><FaLocationDot/>{academyData.FA_RDNMA}</div>
                            <div css={S.SScoreAndReviewContainer}>
                                <AiFillStar css={S.SAcademyStar}/> 
                                별점 5 · 학원후기(n개)
                            </div>
                        </div>
                    </div>
                    <div css={S.SMoveBar(isHeaderFixed)}>
                        <input type="radio" id='academyintroduction' name='category'/>
                        <label htmlFor="academyintroduction">
                            <a href="#introduction" css={S.SNavigation}>학원소개</a>
                        </label>
                        <input type="radio" id='academyconvenience' name='category'/>
                        <label htmlFor="academyconvenience">
                            <a href="#convenience" css={S.SNavigation}>시설 및 편의 사항
                        </a></label>
                        <input type="radio" id='academyreview' name='category'/>
                        <label htmlFor="academyreview">
                            <a href="#review" css={S.SNavigation}>수강후기</a>
                        </label>
                        <input type="radio" id='academyclassinfo' name='category'/>
                        <label htmlFor="academyclassinfo">
                            <a href="#classinfo" css={S.SNavigation}>학원 수업 정보</a>
                        </label>
                    </div>
                </div>
                <div>
                    <div css={S.SIntroductionContainer} id='introduction'>
                        <h1 css={S.STitle}>학원소개</h1>
                        <div css={S.SIntroductions}>
                            <div css={S.SIntroduction}>
                                <div><BsFillPeopleFill/><span>수강인원</span></div>
                                <span>n명</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><BsBarChartLineFill/><span>수강연령</span></div>
                                <span>n대</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><BsFillCalendar2CheckFill/><span>수강기간</span></div>
                                <span>n개월</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><BsFillBookFill/><span>수강과목</span></div>
                                <span>토익</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><BsFillPencilFill/><span>수강목적</span></div>
                                <span>공인 영어 능력 향상</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><IoHomeSharp/><span>홈페이지</span></div>
                                <span>http://...</span>
                            </div>
                            <div css={S.SIntroduction}>
                                <div><FaLocationDot/><span>위치</span></div>
                                <span>{academyData.FA_RDNMA + academyData.FA_RDNDA}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div css={S.SConvenienceContainer} id='convenience'>
                        <h1 css={S.STitle}>시설 및 편의 사항</h1>
                        <div>
                            <AiOutlineCheck/> 편의사항
                        </div>
                    </div>
                    <div css={S.SReviewContainer} id='review'>
                        <h1 css={S.STitle}>수강후기</h1>
                        <div css={S.SReviewScore}>
                            <AiFillStar css={S.SStar}/> 5.0
                        </div>
                        <ul css={S.SReviewListContainer}>
                            <li css={S.SReviewList}>
                                <h1>닉네임</h1>
                                <div>
                                    <AiFillStar css={S.SStar}/> 5.0
                                </div>
                                <span>후기</span>
                            </li>
                            <li css={S.SReviewList}>
                                <h1>닉네임</h1>
                                <div>
                                    <AiFillStar css={S.SStar}/> 5.0
                                </div>
                                <span>후기</span>
                            </li>
                        </ul>
                        <div>
                            <div css={S.SReviewInfo}>
                                <div css={S.SReviewUserScoreContainer}>
                                    <h1>닉네임</h1>
                                    <div>
                                        <AiFillStar css={S.SStar}/>
                                        <input type="text" placeholder='별점'/>
                                    </div>
                                </div>
                                <button><BsFillPencilFill/>후기작성</button>
                            </div>
                            <textarea name="" id="" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.'/>
                        </div>
                    </div>
                    <div css={S.SClassInfo} id='classinfo'>
                        <h1 css={S.STitle}>학원 수업 정보</h1>
                        <div>
                            <table css={S.STable}>
                                <th>과정</th>
                                <th>학원비</th>
                                <tr>
                                    <td>1과정</td>
                                    <td>100,000</td>
                                </tr>
                                <tr>
                                    <td>2과정</td>
                                    <td>100,000</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div css={S.SSide}>
                <div css={S.SOptionBox}>
                    <button css={S.SLikeButton}>
                        <AiOutlineHeart css={S.SLikeIcon}/>
                        관심학원
                    </button>
                    <button css={S.SinquiryButton}>
                        <BsChatLeftTextFill css={S.SinquiryIcon}/>
                        문의
                    </button>
                </div>
                
            </div>
        </RootContainer>
    );
}

export default AcademyInfo;