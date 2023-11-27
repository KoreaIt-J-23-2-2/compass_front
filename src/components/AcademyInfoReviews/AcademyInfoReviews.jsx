import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../api/config/instance';
import { useState } from 'react';
import * as S from "./Style";
import * as GS from "../../styles/Global/Common";
import { AiFillStar} from 'react-icons/ai';
import { BsFillPencilFill } from 'react-icons/bs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import StarRating from '../StarRating/StarRating';
import { Rating } from '@micahlt/react-simple-star-rating';

function AcademyInfoReviews({ academyId, page }) {
    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");
    const userId = principal?.data?.data?.userId;

    const [ reviewData, setReviewData ] = useState();     // 리뷰 정보 저장하는 상태 변수
    const [ modifyButtonState, setModifyButtonState ] = useState(false);
    const reviewSectionRef = useRef(null);
    
    const [ rating, setRating ] = useState(0);

    const [ reviewWriteData, setReviewWriteData] = useState({
        ACADEMY_ID: parseInt(academyId),
        userId: userId,
        score: 0,
        reviewContent: ""
    })

    //리뷰 가져오기
    const getReviews = useQuery(["getReviews", modifyButtonState, page], async () => {
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

    console.log(reviewData);

    const getReview = useQuery(["getReview", modifyButtonState], async () => {
        try {
            return await instance.get(`/review/${academyId}/${userId}`);
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 1,
        refetchOnWindowFocus: false
    });
    console.log(rating);

    const reviewSubmitButton = async () => {
        try {
            // 사용자가 로그인되어 있고 이메일이 확인된 경우 확인
            if (principal.data && principal.data.data.enabled) {
                const options = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                };
                if(modifyButtonState) {
                    if(window.confirm("작성한 후기를 수정하시겠습니까?")){
                        setModifyButtonState(false);
                        await instance.put(`/review`, reviewWriteData);              
                    }
                } else {
                    if(window.confirm("후기를 등록하시겠습니까?")){
                        await instance.post("/review", reviewWriteData);
                    }
                }
                setReviewWriteData({
                    ...reviewWriteData,
                    score: "",
                    reviewContent: ""
                })
                getReview.refetch();
                return getReviews.refetch();
            } else if (principal.data.data.roleId === 0){
                alert("관리자는 후기를 작성할 수 없습니다.")
            } else {
                alert("이메일 인증 후 이용해주세요.");
                navigate("/account/mypage/user")
                return;
            }
            
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    const reviewScoreChange = (value) => {
        setReviewWriteData({
            ...reviewWriteData,
            score: value
        })
    }

    const reviewContentChange = (e) => {
        setReviewWriteData({
            ...reviewWriteData,
            [e.target.name]: e.target.value
        })
    }

    const reviewModifyButton = (e) => {
        setModifyButtonState(true);
        setReviewWriteData(getReview.data.data.review);
    }

    const reviewDeleteButton = async (e) => {
        try{
            setModifyButtonState(false);
            getReview.refetch();
            const options = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(window.confirm("후기를 삭제하시겠습니까?")){
                await instance.delete(`/review/${academyId}/${userId}`, options);
            }
            setReviewWriteData({
                ...reviewWriteData,
                score: "",
                reviewContent: ""
            })
            return getReviews.refetch();
            
        } catch(error) {
            alert(error.response.data.message);
        }
    }

    useEffect(() => {
        getReviews.refetch();
        getReview.refetch();
    }, [modifyButtonState]);

    useEffect(()=>{
        setReviewWriteData({
            ...reviewWriteData,
            score: parseInt(`${rating}`)
        })
    }, [rating]);

    useEffect(() => {       // 페이지 로드 후 섹션으로 스크롤
        if (reviewSectionRef.current) {
            const storedScrollPosition = sessionStorage.getItem('scrollPosition');
            const targetScrollPosition = storedScrollPosition || 0;
    
            reviewSectionRef.current.scrollIntoView({
                behavior: 'auto',
                block: 'start',
                inline: 'nearest'
            });
    
            // 스크롤 위치를 세션 스토리지에 저장
            sessionStorage.setItem('scrollPosition', targetScrollPosition);
        }
    }, [academyId, page]); // 의존성 배열에 추가

    console.log(reviewWriteData);

    return (
        <div css={S.SReviewContainer} id='review' ref={reviewSectionRef}>
            <h1>수강후기</h1>
            <div css={S.SReviewScore}>
                <AiFillStar css={S.SStar}/> {reviewData?.reviewCount?.scoreAvg}
            </div>
            {!!reviewData?.reviewList[0] ? 
                <>
                    <ul css={S.SReviewListContainer}>
                        {reviewData?.reviewList.map(data => {
                            return (
                                <li css={S.SReviewList} key={reviewData.reviewId}>
                                    <h2>{data.nickname}</h2>
                                    <div><AiFillStar css={S.SStar}/> {data.score}</div>
                                    <span>{data.reviewContent}</span>
                                    {data.userId == userId && 
                                        <div>
                                            <button css={GS.SButton} onClick={() => {reviewModifyButton()}}>수정</button>
                                            <button css={GS.SButton} onClick={() => {reviewDeleteButton()}}>삭제</button>
                                        </div>
                                    }
                                </li>
                            )})}
                    </ul>
                    <Pagination totalCount={reviewData?.reviewCount?.reviewCount} link={`/academy/info`} search={`?ACADEMY_ID=${academyId}`}/>
                </>
                : <div css={S.ReviewEmpty}>아직 후기가 없습니다. 후기를 등록해보세요!</div>
            }
            <div>
                <div css={S.SReviewInfo}>
                    <div css={S.SReviewUserScoreContainer}>
                        <h2>{principal?.data?.data.nickname}</h2>
                        {/* <Rating style={{ maxWidth: 250 }} value={reviewWriteData.score} onClick={reviewScoreChange} size={20}/> */}
                        {/* <StarRating /> */}
                        <div>
                            <AiFillStar css={S.SStar}/> 
                            <input type="text" name="score" id="score" placeholder='별점' 
                                onChange={reviewScoreChange} value={reviewWriteData?.score} />
                        </div>
                    </div>
                    <button onClick={reviewSubmitButton}><BsFillPencilFill/>후기작성</button>
                </div>
                <textarea css={S.SReviewBox} name="reviewContent" id="reviewContent" cols="140" rows="10" placeholder='수강 후기를 작성해 주세요.' 
                    onChange={reviewContentChange} value={reviewWriteData?.reviewContent} />
            </div>
        </div>
    );
}

export default AcademyInfoReviews;