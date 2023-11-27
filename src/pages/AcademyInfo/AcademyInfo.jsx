import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillStar, AiOutlineCheck } from 'react-icons/ai'
import { IoHomeSharp } from 'react-icons/io5'
import { BsFillPeopleFill, BsBarChartLineFill, BsFillCalendar2CheckFill, BsFillBookFill, BsFillPencilFill } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';
import AcademyInfoReviews from '../../components/AcademyInfoReviews/AcademyInfoReviews';
import AcademyInfoSidebar from '../../components/AcademyInfoSidebar/AcademyInfoSidebar';
import AcademyInfoClass from '../../components/AcademyInfoClass/AcademyInfoClass';

    

function AcademyInfo(props) { //교육청 코드, 학원코드, 학원 이름 넘겨받음
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal")
    const userId = principal?.data?.data?.userId
    const roleId = principal?.data?.data?.roleId;

    const [ isHeaderFixed, setIsHeaderFixed ] = useState(false);      // 네비게이션바 fixed

    const [ academyData, setAcademyData ] = useState();   // 학원 정보 저장하는 상태 변수
    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수

    const [ isAcademyRegistered, setIsAcademyRegistered ] = useState(false);    // 학원 관리자 등록 여부
    const [ color, setColor ] = useState();
    
    // 분야명의 "(대)" 문자열 자르기
    const category = academyData?.academy.REALM_SC_NM ? academyData?.academy.REALM_SC_NM : academyData?.academy.LE_CRSE_LIST_NM;
    const str = category ? category.indexOf("(대)") : -1;
    const modifiedCategory = str !== -1 ? category.substring(0, str) : category;
    
    const { page } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const academyId = searchParams.get('ACADEMY_ID')

    // 랜덤 색상을 생성하는 함수
    const getRandomColor = () => {
        // 0부터 255 사이의 랜덤한 RGB 값 생성
        const randomColor = `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
        setColor(randomColor)
    };
    
    // 학원 정보 가져오기
    const getAcademy = useQuery(["getAcademy"], async () => {
        try {
            const options = {
                params: {
                    pIndex: 1,
                    pSize: 1,
                    ACADEMY_ID: academyId
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            // api, options를 get 요청
            return await instance.get("/academy", options);
        }catch (error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setAcademyData(response?.data);
            getRandomColor();
        }
    })

    //리뷰 가져오기
    const getReviews = useQuery(["getReviews", page], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/${academyId}/reviews/${page}`, options);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setReviewData(response.data);
        }
    });

    useEffect(() => {   //페이지 스크롤에 따른 네비게이션바 이동
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

    if(getAcademy.isLoading) {    //undefined인 경우
        return <></>
    }

    return (
        <div css={S.SPageLayout}>
            <div css={S.SLayout}>
                <div css={S.SHead}>
                    <div css={S.SAcademyInfoContainer}>
                        {!getAcademy.isLoading && !!academyData?.academyInfo?.logoImg ? 
                        <img css={S.SAcademtLogo} src={academyData?.academyInfo?.logoImg} alt="" /> : 
                        <div css={[S.SAcademtLogo, { backgroundColor: color}]}>
                            <span> {academyData?.academy.ACA_NM.replace(/\([^)]*\)/g, '') // 괄호와 그 안의 내용을 빈 문자열로 대체
                            .match(/[ㄱ-ㅎ가-힣]/g) // 문자열에서 한글만 추출
                            ?.slice(0, 2) // 추출한 한글 중 첫 두 글자 선택
                            .join('')}
                            </span>
                        </div>}
                        <div css={S.SAcademyInfo}>
                            <div css={S.SAcademyName}>{academyData?.academy.ACA_NM}</div>
                            <div css={S.SAcademyLocation}><FaLocationDot/>{academyData?.academy.FA_RDNMA}</div>
                            <div>
                                {!!academyData?.academy.FA_TELNO && "📞"}
                                {academyData?.academy.FA_TELNO}</div>
                            <div css={S.SScoreAndReviewContainer}>
                                <AiFillStar css={S.SAcademyStar}/> 
                                별점 {reviewData?.reviewCount?.scoreAvg} · 학원후기({reviewData?.reviewCount?.reviewCount}개)
                            </div>
                        </div>
                    </div>
                    <div css={S.SMoveBar(isHeaderFixed)} >
                        <input type="radio" id='academyintroduction' name='category'/>
                        <label htmlFor="academyintroduction" >
                            <a href="#introduction" css={S.SNavigation}>학원소개</a>
                        </label>
                        <input type="radio" id='academyconvenience' name='category'/>
                        <label htmlFor="academyconvenience" >
                            <a href="#convenience" css={S.SNavigation}>시설 및 편의 사항
                        </a></label>
                        <input type="radio" id='academyreview' name='category'/>
                        <label htmlFor="academyreview" >
                            <a href="#review" css={S.SNavigation}>수강후기</a>
                        </label>
                        <input type="radio" id='academyclassinfo' name='category'/>
                        <label htmlFor="academyclassinfo" >
                            <a href="#classinfo" css={S.SNavigation}>학원 수업 정보</a>
                        </label>
                    </div>
                </div>
                <div css={S.SBody}>
                    <div css={S.SIntroductionContainer} id='introduction'>
                        <h1>학원소개</h1>
                        <div css={S.SIntroductions}>
                            {academyData?.academyInfo?.classSize &&
                                <div css={S.SIntroduction}>
                                    <div><BsFillPeopleFill/><span>수강인원</span></div>
                                    <span>{academyData?.academyInfo?.classSize}</span>
                                </div>
                            }
                            {!!academyData?.age[0] && 
                                <div css={S.SIntroduction}>
                                    <div><BsBarChartLineFill/><span>수강연령</span></div>
                                    <span>
                                        {academyData?.age?.map((age) => {
                                            return (age.ageRange + " ")
                                        })}
                                    </span>
                                </div>
                            }
                            {!!academyData?.academyInfo?.coursePeriod &&
                                <div css={S.SIntroduction}>
                                    <div><BsFillCalendar2CheckFill/><span>수강기간</span></div>
                                    <span>{academyData?.academyInfo?.coursePeriod}</span>
                                </div>
                            }
                            <div css={S.SIntroduction}>
                                <div><BsFillBookFill/><span>수강과목</span></div>
                                <span>{modifiedCategory}</span>
                            </div>
                            {!!academyData?.academyInfo?.purpose &&
                                <div css={S.SIntroduction}>
                                    <div><BsFillPencilFill/><span>수강목적</span></div>
                                    <span>{academyData?.academyInfo?.purpose}</span>
                                </div>
                            }
                            {!!academyData?.academyInfo?.homePage &&
                                <div css={S.SIntroduction}>
                                    <div><IoHomeSharp/><span>홈페이지</span></div>
                                    <span><a href={academyData?.academyInfo?.homePage}>{academyData?.academyInfo?.homePage}</a></span>
                                </div>
                            }
                            <div css={S.SIntroduction}>
                                <div><FaLocationDot/><span>위치</span></div>
                                <span>{academyData?.academy.FA_RDNMA + academyData?.academy.FA_RDNDA}</span>
                            </div>
                        </div>
                    </div>
                    <div css={S.SConvenienceContainer} id='convenience'>
                        <h1>시설 및 편의 사항</h1>
                        <div>
                            {academyData?.convenience.map((con) => {
                                return <span>
                                    <AiOutlineCheck/> {con.convenienceName}
                                </span>;
                            })}
                        </div>
                        {!!!academyData?.convenience[0] &&  <span>등록된 편의사항이 존재하지 않습니다.</span>}
                    </div>
                    <AcademyInfoReviews academyId={academyId} page={page} academyData={academyData?.academyInfo}/>
                    <AcademyInfoClass academyData={academyData} />
                </div>
            </div>
            {roleId === 0 ? null : <AcademyInfoSidebar academyId={academyId} />}
        </div>
    );
}

export default AcademyInfo;