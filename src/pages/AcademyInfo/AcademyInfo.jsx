import React, { useEffect, useRef, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillStar, AiOutlineCheck, AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { IoHomeSharp } from 'react-icons/io5'
import { BsFillPeopleFill, BsBarChartLineFill, BsFillCalendar2CheckFill, BsFillBookFill, BsFillPencilFill, BsChatLeftTextFill } from 'react-icons/bs'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';
import Horoscope from '../../components/Horoscope/Horoscope';

    

function AcademyInfo(props) { //교육청 코드, 학원코드, 학원 이름 넘겨받음
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal")

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);      // 좋아요, 문의 fixed

    const [ academyData, setAcademyData ] = useState();   // 학원 정보 저장하는 상태 변수
    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수
  
    const [ color, setColor ] = useState();
    
    // 분야명의 "(대)" 문자열 자르기
    const category = academyData?.academy.REALM_SC_NM ? academyData?.academy.REALM_SC_NM : academyData?.academy.LE_CRSE_LIST_NM;
    const str = category ? category.indexOf("(대)") : -1;
    const modifiedCategory = str !== -1 ? category.substring(0, str) : category;
    const userId = principal?.data?.data?.userId
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const academyId = searchParams.get('ACADEMY_ID')
    
    const [ reviewWriteData, setReviewWriteData] = useState({
        academyId: parseInt(academyId),
        userId: userId,
        score: 0,
        reviewContent: ""
    })

    // 랜덤 색상을 생성하는 함수
    const getRandomColor = () => {
        // 0부터 255 사이의 랜덤한 RGB 값 생성
        const randomColor = `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
        setColor(randomColor)
    };

    const getLikeState = useQuery(["getLikeState"], async () => {
        try {
            return await instance.get(`/account/like/${academyId}/${userId}`)
        } catch(error) {
            console.error(error)
        }
    }, {
        refetchOnWindowFocus: false,
        retry: 0
    })

    const likeCountOfInfo = useQuery(["getLikeCountOfInfo"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/account/info/like/count/${academyId}`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

    const handleLikeButtonClick = async () => {
        try {
            if(getLikeState?.data?.data) {
                await instance.delete(`/account/like/${academyId}/${userId}`);
            } else {
                await instance.post(`/account/like/${academyId}/${userId}`);
            }
            getLikeState.refetch();
            likeCountOfInfo.refetch();
        } catch(error) {
            console.error(error);
        }
    }
    
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
    const getReviews = useQuery(["getReviews", academyId], async () => {
        // api, options를 get 요청
        try {
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/academy/${academyId}/reviews`, options);
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

    const reviewSubmitButton = async () => {
        try{
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.post("/review", reviewWriteData, options);
            return getReviews.refetch();
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    if(getAcademy.isLoading) {    //undefined인 경우
        return <></>
    }

    const reviewContentChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: e.target.value
        })
    }

    const horoscopeChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    console.log(reviewWriteData);
    
    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SHead}>
                    <div css={S.SAcademyInfoContainer}>
                            <div css={[S.SAcademtLogo, { backgroundColor: color}]}>
                                <span> {academyData?.academy.ACA_NM.replace(/\([^)]*\)/g, '') // 괄호와 그 안의 내용을 빈 문자열로 대체
                                .match(/[ㄱ-ㅎ가-힣]/g) // 문자열에서 한글만 추출
                                ?.slice(0, 2) // 추출한 한글 중 첫 두 글자 선택
                                .join('')}
                                </span>
                            </div>
                        <div css={S.SAcademyInfo}>
                            <div css={S.SAcademyName}>{academyData?.academy.ACA_NM}</div>
                            <div css={S.SAcademyLocation}><FaLocationDot/>{academyData?.academy.FA_RDNMA}</div>
                            <div>📞 {academyData?.academy.FA_TELNO}</div>
                            <div css={S.SScoreAndReviewContainer}>
                                <AiFillStar css={S.SAcademyStar}/> 
                                별점 {reviewData?.reviewCount?.score_avg} · 학원후기({reviewData?.reviewCount?.review_count}개)
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
                <div>
                    <div css={S.SIntroductionContainer} id='introduction'>
                        <h1 css={S.STitle}>학원소개</h1>
                        <div css={S.SIntroductions}>
                            {academyData?.academyInfo?.class_size &&
                                <div css={S.SIntroduction}>
                                    <div><BsFillPeopleFill/><span>수강인원</span></div>
                                    <span>{academyData?.academyInfo?.class_size}</span>
                                </div>
                            }
                            {!!academyData?.ageRange[0] && 
                                <div css={S.SIntroduction}>
                                    <div><BsBarChartLineFill/><span>수강연령</span></div>
                                    <span>
                                        {academyData?.ageRange?.map((age) => {return age})}</span>
                                </div>
                            }
                            {!!academyData?.academyInfo?.course_period &&
                                <div css={S.SIntroduction}>
                                    <div><BsFillCalendar2CheckFill/><span>수강기간</span></div>
                                    <span>{academyData?.academyInfo?.course_period}</span>
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
                            {!!academyData?.academyInfo?.home_page &&
                                <div css={S.SIntroduction}>
                                    <div><IoHomeSharp/><span>홈페이지</span></div>
                                    <span>{academyData?.academyInfo?.home_page}</span>
                                </div>
                            }
                            <div css={S.SIntroduction}>
                                <div><FaLocationDot/><span>위치</span></div>
                                <span>{academyData?.academy.FA_RDNMA + academyData?.academy.FA_RDNDA}</span>
                            </div>
                        </div>
                        
                    </div>
                    <div css={S.SConvenienceContainer} id='convenience'>
                        <h1 css={S.STitle}>시설 및 편의 사항</h1>
                        <div>
                            {academyData?.convenienceInfo.map((convience) => {
                                return <span>
                                    <AiOutlineCheck/> {convience}
                                </span>;
                            })}
                        </div>
                    </div>
                    <div css={S.SReviewContainer} id='review'>
                        <h1 css={S.STitle}>수강후기</h1>
                        <div css={S.SReviewScore}>
                            <AiFillStar css={S.SStar}/> 5.0
                        </div>
                        <ul css={S.SReviewListContainer}>
                            {reviewData?.reviewList.map(data => {
                                return (<li css={S.SReviewList} key={reviewData.review_id}>
                                    <h1>{data.nickname}</h1>
                                    <div><AiFillStar css={S.SStar}/> {data.score}</div>
                                    <span>{data.review_content}</span>
                                </li>);
                            })}
                        </ul>
                        <div>
                            <div css={S.SReviewInfo}>
                                <div css={S.SReviewUserScoreContainer}>
                                    <h1>{principal?.data?.data.nickname}</h1>
                                    <div>
                                        <AiFillStar css={S.SStar}/> <input type="text" name="score" placeholder='별점' onChange={horoscopeChange}/>
                                    </div>
                                </div>
                                <button onClick={reviewSubmitButton}><BsFillPencilFill/>후기작성</button>
                            </div>
                            <textarea css={S.SReviewBox} name="reviewContent" id="review" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' onChange={reviewContentChange}/>
                        </div>
                    </div>
                    <div css={S.SClassInfo} id='classinfo'>
                        <h1 css={S.STitle}>학원 수업 정보</h1>
                        <div>
                            <table css={S.STable}>
                                <thead>
                                    <tr>
                                        <td>과정</td>
                                        <td>학원비</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!!academyData?.classInfo[0] ? 
                                        academyData?.classInfo?.map((data) => {
                                            return (<tr>
                                                <td>{data?.class_name}</td>
                                                <td>{data?.class_price}</td>
                                            </tr>)
                                        }) 
                                        :  <tr><td colSpan='2'>학원 수업 정보를 제공하지 않습니다.</td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div css={S.SSide}>
                <div css={S.SOptionBox}>
                    {!getLikeState.isLoading &&
                        <button disabled={!principal?.data?.data}
                        css={S.SLikeButton}
                        onClick={handleLikeButtonClick}>
                            {getLikeState?.data?.data ? <AiFillHeart css={S.SLikeIcon(getLikeState?.data?.data)}/> :
                            <AiOutlineHeart css={S.SLikeIcon(getLikeState?.data?.data)}/>}
                            관심학원
                            <div>{likeCountOfInfo?.data?.data}</div>
                        </button>
                    }
                    <Link to={"/academy/inquiry"} css={S.SinquiryButton}>
                        <BsChatLeftTextFill css={S.SinquiryIcon}/>
                        문의
                    </Link>
                </div>
            </div>
        </RootContainer>
    );
}

export default AcademyInfo;