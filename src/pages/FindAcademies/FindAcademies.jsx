import React, { useEffect, useState } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import FindAcademiesSidebar from '../../components/FindAcademiesSidebar/FindAcademiesSidebar';
import { RiAdvertisementFill } from 'react-icons/ri';
import LocationModal from '../../components/Modal/LocationModal/LocationModal';
import { instance } from '../../api/config/instance';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedAgeState, selectedCategoryState, selectedContentState, selectedConvenienceState, selectedLocationState } from '../../store/searchOptions';
import CategoryModal from '../../components/Modal/CategoryModal/CategoryModal';
import { useQuery, useQueryClient } from 'react-query';
import QueryString from 'qs';
import { FaLocationDot } from "react-icons/fa6";
import SearchBtn from '../../components/Button/SearchBtn/SearchBtn';
import SelectModalBtn from '../../components/Button/SelectModalBtn/SelectModalBtn'

function FindAcademies(props) {
    const navigate = useNavigate();
    
    const [ selectedLocation, setSelectedLocation ] = useRecoilState(selectedLocationState); // 지역
    const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 카테고리
    const [ selectedContent, setSelectedContent ] = useRecoilState(selectedContentState); // 학원 이름
    const [ inputValue, setInputValue ] = useState(selectedContent); // 학원이름 검색창 
    
    const [ selectedAgeOptions, setSelectedAgeOptions ] = useRecoilState(selectedAgeState); // 수강연령 정보
    const [ selectedConvenienceOptions, setSelectedConvenienceOptions ] = useRecoilState(selectedConvenienceState); // 편의사항 정보
    
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ categoryModalIsOpen, setCategoryModalIsOpen ] = useState(false);
    
    // 랜덤 색상을 생성하는 함수
    const getRandomColor = () => {
        // 0부터 255 사이의 랜덤한 RGB 값 생성
        const randomColor = `rgb(${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)}, ${Math.floor(Math.random() * 127 + 128)})`;
        return randomColor;
    };

    // 모달이 열릴 때 스크롤 막기
    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    // 모달이 닫힐 때 스크롤 복원
    const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
    }

    const [ totalCount, setTotalCount ] = useState(0);
    const { page } = useParams();
    const [ academyList, setAcademyList] = useState([]);

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal")
    const principal = principalState?.data?.data;

    const getPurchaseAcademyList = useQuery(["getPurchaseAcademyList"], async () => {
        try{
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/ad/academies/random`, option)
        } catch(error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    })

    const getAcademyList = useQuery(["getAcademyList", page], async () => {
        try {
            const options = {
                params: {
                    pIndex: page,
                    pSize: 15,
                    ATPT_OFCDC_SC_CODE: selectedLocation.atpt_ofcdc_sc_code,
                    ADMST_ZONE_NM: selectedLocation.admst_zone_nm,
                    REALM_SC_NM: selectedCategory.realm_sc_nm,
                    LE_CRSE_NM: selectedCategory.le_crse_nm,
                    ACA_NM: selectedContent,
                    ageIds: selectedAgeOptions,
                    countAgeId: selectedAgeOptions.length,
                    convenienceIds: selectedConvenienceOptions,
                    countConvenienceId: selectedConvenienceOptions.length
                },
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                },
                paramsSerializer: params => QueryString.stringify(params, {arrayFormat: 'repeat'})
            }
    
            // options를 get 요청
            const response = await instance.get("/academies", options);

            // Update academyList with the data from the response
            setAcademyList(response.data.academies);

            // Set the total count
            setTotalCount(response.data.listTotalCount);
            
        } catch (error) {
            console.error(error);
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false
    }) 

    // 조건이 생길 때 학원목록 업데이트, 1page로 이동
    useEffect(() => {
        navigate("/academy/find/1");
        if(page === "1") {
            getAcademyList.refetch();
        }
    }, [selectedLocation, selectedCategory, selectedContent, selectedAgeOptions.length, selectedConvenienceOptions.length]);


    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSelectContent = () => {
        setSelectedContent(inputValue);
    }


    const pagenation = () => {
        const totalAcademyCount = totalCount;
        const lastPage = totalAcademyCount % 15 === 0 
            ? totalAcademyCount / 15
            // Math.floor(): 절삭 = 나머지 버림
            : Math.floor(totalAcademyCount / 15) + 1

        const startIndex = parseInt(page) % 5 === 0 ? parseInt(page) - 4 : parseInt(page) - (parseInt(page) % 5) + 1;
        const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
        const pageNumbers = [];

        for (let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button disabled={parseInt(page) === 1} onClick={() => {
                    navigate(`/academy/find/${parseInt(page) - 1}`);
                }}>&#60;</button>

                {pageNumbers.map(num => {
                    return <button className={parseInt(page) === num ? 'selected' : ''} key={num} onClick={() => {
                        navigate(`/academy/find/${num}`)
                    }}>{num}</button>
                })}

                <button disabled={parseInt(page) === lastPage} onClick={() => {
                    navigate(`/academy/find/${parseInt(page) + 1}`);
                }}>&#62;</button>
            </>
        )
    }

    const openLocationModal = () => {
        setModalIsOpen(true);
        disableBodyScroll();
    };

    const openCategoryModal = () => {
        setCategoryModalIsOpen(true);
        disableBodyScroll();
    };


    return (
        <RootContainer>
            <div css={S.SearchLayout}>
                <h1>학원찾기</h1>
                <div css={S.SearchContainer}>
                    <div onClick={openLocationModal}>
                        <SelectModalBtn>
                            {selectedLocation.atpt_ofcdc_sc_code
                                ? `${selectedLocation.si_do_name} ${selectedLocation.admst_zone_nm}`
                                : "지역 선택"
                            }   
                        </SelectModalBtn>
                    </div>
                    <div onClick={openCategoryModal}>
                        <SelectModalBtn>
                            {selectedCategory.realm_sc_nm
                                ? `${selectedCategory.realm_sc_nm === '국제화'
                                ? '외국어'
                                : selectedCategory.realm_sc_nm === '정보'
                                ? 'IT'
                                : selectedCategory.realm_sc_nm.replace(/\(대\)/g, '').trim()} 
                                ${selectedCategory.le_crse_nm.includes("전체") ? "" : selectedCategory.le_crse_nm}`
                                : "카테고리 선택"
                            }
                        </SelectModalBtn>
                    </div>
                    <div>
                        <input type="text" placeholder='나에게 맞는 학원을 찾아보세요' value={inputValue} onChange={handleInputOnChange}/>
                    </div>
                    <SearchBtn onClick={handleSelectContent}/>
                </div>
            </div>
            <div css={S.PageLayout}>
                <FindAcademiesSidebar />
                <div css={S.SAcademiesContainer}>
                    <div css={S.PageContainer}>
                        <div css={S.InfoBox}>
                            <div>{totalCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}개의 학원이 있습니다.</div>
                        </div>
                        <div>
                            <div css={S.HeaderBox}>
                                <h3>이런 학원은 어떠세요?</h3>
                                <div>
                                    <span>광고</span>
                                    <RiAdvertisementFill size={22}/>
                                </div>
                            </div>
                            <ul css={S.UlBox}>
                            {!getPurchaseAcademyList.isLoading && Array.isArray(getPurchaseAcademyList?.data?.data) && getPurchaseAcademyList?.data?.data.map(academy => {
                                const academyNameWithoutParentheses = academy.ACA_NM.replace(/\([^)]*\)/g, ''); // "()"를 빈 문자열로 대체
                                const koreanChars = academyNameWithoutParentheses.match(/[ㄱ-ㅎ가-힣]/g); // 한글만 추출
                                const firstTwoKoreanChars = koreanChars ? koreanChars.slice(0, 2).join('') : '';
                                const address = academy.FA_RDNMA.split(' ').slice(0, 2).join(' ');
                                const realm =
                                    academy.REALM_SC_NM === '국제화'
                                        ? '외국어'
                                        : academy.REALM_SC_NM === '정보'
                                        ? 'IT'
                                        : academy.REALM_SC_NM.replace(/\(대\)/g, '').trim();
                                return  <li css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
                                    {academy.logo_img ? (
                                        <img src={academy.logo_img} alt={`${academy.ACA_NM}의 로고`}  />
                                    ): (
                                        <div css={[S.SRandomImg, { backgroundColor: getRandomColor() }]}>
                                            <span>{firstTwoKoreanChars}</span>
                                        </div>
                                    )}
                                    <strong>{academy.ACA_NM}</strong>
                                    <div css={S.SAddress}><FaLocationDot />{address}</div>
                                    <div>{realm}</div>
                                </li>
                            })}
                            </ul>
                        </div>
                        <div>
                            <div css={S.HeaderBox}>
                                <h3>검색된 정보</h3>
                                <select css={S.ClassifyBox} name="classifyBox" id="">
                                    <option value="최신순">최신순</option>
                                    <option value="인기순">인기순</option>
                                    <option value="좋아요순">좋아요순</option>
                                </select>
                            </div>
                            <ul css={S.UlBox}>
                                {academyList.map((academy) => {
                                    const academyNameWithoutParentheses = academy.ACA_NM.replace(/\([^)]*\)/g, ''); // "()"를 빈 문자열로 대체
                                    const koreanChars = academyNameWithoutParentheses.match(/[ㄱ-ㅎ가-힣]/g); // 한글만 추출
                                    const firstTwoKoreanChars = koreanChars ? koreanChars.slice(0, 2).join('') : '';
                                    const address = academy.FA_RDNMA.split(' ').slice(0, 2).join(' ');
                                    const realm =
                                        academy.REALM_SC_NM === '국제화'
                                            ? '외국어'
                                            : academy.REALM_SC_NM === '정보'
                                            ? 'IT'
                                            : academy.REALM_SC_NM.replace(/\(대\)/g, '').trim();
                                    return  <li css={S.LiBox} className='recent' onClick={()=> {navigate(`/academy/info?ACADEMY_ID=${academy.ACADEMY_ID}`)}}>
                                        {academy.logoImg ? (
                                            <img src={academy.logoImg} alt={`${academy.ACA_NM}의 로고`}  />
                                        ): (
                                            <div css={[S.SRandomImg, { backgroundColor: getRandomColor() }]}>
                                                <span>{firstTwoKoreanChars}</span>
                                            </div>
                                        )}
                                        <strong>{academy.ACA_NM}</strong>
                                        <div css={S.SAddress}><FaLocationDot />{address}</div>
                                        <div>{realm}</div>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div css={S.SPageNumbers}>
                        {pagenation()}
                    </div>
                </div>
            </div>
            <LocationModal modalIsOpen={modalIsOpen} 
                setModalIsOpen={setModalIsOpen} 
                enableBodyScroll={enableBodyScroll}/>
            <CategoryModal modalIsOpen={categoryModalIsOpen} 
                setModalIsOpen={setCategoryModalIsOpen} 
                enableBodyScroll={enableBodyScroll}/>
        </RootContainer>
    );
}

export default FindAcademies;