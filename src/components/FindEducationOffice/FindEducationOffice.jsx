import React, { useEffect, useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from "./Style"
import * as GS from "../../styles/Global/Common"
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import { useRecoilState } from 'recoil';
import { selectedAcademyState } from '../../store/RegistAtom';
import SearchBtn from '../Button/SearchBtn/SearchBtn';

function FindEducationOffice({ educationOfficeCode }) {
    
    // 학원명 입력 상태와 변경 함수
    const [ academyNameInput, setAcademyNameInput ] = useState("");

    // 무한 스크롤을 위한 마지막 학원 요소의 ref , ref가 객체선택 QeurySelect랑 비슷한 개념
    const lastAcademyRef = useRef();

    // 현재 페이지 번호를 관리하는 상태 변수
    const [ page, setPage ] = useState(1);

    // 학원 정보를 저장하는 상태 변수
    const [ academyData, setAcademyData ] = useState({
        totalCount: 0,
        list: []
    });

    // 선택된 학원 정보를 저장하는 상태 변수
    const [ selectedAcademy, setSelectedAcademy ] = useRecoilState(selectedAcademyState);

    useEffect(() => {
        return () => {
            setSelectedAcademy([]);
        };
    }, []);

    // Intersection Observer를 이용하여 무한 스크롤을 감지하는 useEffect
    useEffect(() => {
        // 감지 event handler
        const observerService = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    getAcademies.refetch(); // 학원 정보를 다시 불러옴
                }
            });
        }

        // Intersection Observer 생성 및 마지막 학원 요소 관찰
        const observer = new IntersectionObserver(observerService, {threshold: 1});
        observer.observe(lastAcademyRef.current);
    }, []);

    // React Query를 사용하여 학원 정보를 가져오는 쿼리 설정
    const getAcademies = useQuery(["getAcademies"], async () => {
        try {
            const options = {
                params: {
                    pIndex: page,
                    pSize: 20,
                    ATPT_OFCDC_SC_CODE: educationOfficeCode,
                    ACA_NM: academyNameInput
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
            setAcademyData({
                totalCount: response?.data?.list_total_count, 
                list: [...academyData.list].concat(response?.data?.academies)
            });
            setPage(page + 1);
        },
        enabled: false  //자동 리패치 중지
    })

    // 학원명 입력값이 변경될 때 호출되는 이벤트 핸들러
    const handleAcademyNameInput = (e) => {
        setAcademyNameInput(e.target.value);
    }

    // 검색 버튼 클릭 시 호출되는 이벤트 핸들러
    const handleSearchClick = () => {
        // 상태 초기화 및 검색 결과 다시 불러오기
        const promise = new Promise((resolve, reject) => {
            setAcademyData({...academyData, list: []});
            setPage(1);
            resolve(true);
        });

        promise.then(() => {
            getAcademies.refetch();
        })
    }

    // 선택된 학원 정보를 설정하는 이벤트 핸들러
    const selectedChoiceClick = (academy) => {
        setSelectedAcademy(academy);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SHeadContainer}>
                <div css={S.SInput}>
                    <input type="text" onChange={handleAcademyNameInput} placeholder='학원명을 입력해주세요.'/>
                </div>
                <SearchBtn onClick={handleSearchClick}/>
            </div>
            <ul css={S.SBodyContainer}>
                <li css={S.SList}>
                    <div>학원번호</div>
                    <div>행정구</div>
                    <div>학원명</div>
                    <div></div>
                </li>
                {!getAcademies.isLoading && academyData?.list?.map((academy) => {
                    return (
                        <li key={academy.ACA_ASNUM} css={S.SList}>
                            <div>{academy.ACA_ASNUM}</div>
                            <div>{academy.ADMST_ZONE_NM}</div>
                            <div>{academy.ACA_NM}</div>
                            <div><button css={GS.SButton} onClick={() => selectedChoiceClick(academy)}>선택</button></div>
                        </li> 
                    );
                })}
                <li ref={lastAcademyRef}></li>
            </ul>
            <div>
                <ul css={S.STitleName}>선택된 학원</ul>
                <div css={S.SChoiceBox}>
                    {selectedAcademy.length != 0 && (
                        <div>
                            {selectedAcademy.ACA_ASNUM}, {selectedAcademy.ADMST_ZONE_NM}, {selectedAcademy.ACA_NM}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FindEducationOffice;