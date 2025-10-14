import React, { useEffect, useState } from "react";
import RootContainer from "../../components/RootContainer/RootContainer";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import FindAcademiesSidebar from "../../components/FindAcademiesSidebar/FindAcademiesSidebar";
import { RiAdvertisementFill } from "react-icons/ri";
import LocationModal from "../../components/Modal/LocationModal/LocationModal";
import { instance } from "../../api/config/instance";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    selectedAgeState,
    selectedCategoryState,
    selectedContentState,
    selectedConvenienceState,
    selectedLocationState,
} from "../../store/searchOptions";
import CategoryModal from "../../components/Modal/CategoryModal/CategoryModal";
import { useQuery, useQueryClient } from "react-query";
import QueryString from "qs";
import { FaLocationDot } from "react-icons/fa6";
import SearchBtn from "../../components/Button/SearchBtn/SearchBtn";
import SelectModalBtn from "../../components/Button/SelectModalBtn/SelectModalBtn";
import Loading from "../../components/Loading/Loading";
import LiAcademyBox from "../../components/LiAcademyBox/LiAcademyBox";
import NoResult from "../../components/NoResult/NoResult";
import Pagination from "../../components/Pagination/Pagination";

function FindAcademies(props) {
    const navigate = useNavigate();

    const [selectedLocation, setSelectedLocation] = useRecoilState(
        selectedLocationState
    ); // 지역
    const [selectedCategory, setSelectedCategory] = useRecoilState(
        selectedCategoryState
    ); // 카테고리
    const [selectedContent, setSelectedContent] =
        useRecoilState(selectedContentState); // 학원 이름
    const [inputValue, setInputValue] = useState(selectedContent); // 학원이름 검색창

    const [selectedAgeOptions, setSelectedAgeOptions] =
        useRecoilState(selectedAgeState); // 수강연령 정보
    const [selectedConvenienceOptions, setSelectedConvenienceOptions] =
        useRecoilState(selectedConvenienceState); // 편의사항 정보

    const [classify, setClassify] = useState("등록순");

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false);

    // 모달이 열릴 때 스크롤 막기
    const disableBodyScroll = () => {
        document.body.style.overflow = "hidden";
    };

    // 모달이 닫힐 때 스크롤 복원
    const enableBodyScroll = () => {
        document.body.style.overflow = "auto";
    };

    const [totalCount, setTotalCount] = useState(0);
    const { page } = useParams();
    const [academyList, setAcademyList] = useState([]);

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const principal = principalState?.data?.data;

    // 광고 목록 가지고오기
    const getPurchaseAcademyList = useQuery(
        ["getPurchaseAcademyList"],
        async () => {
            try {
                return await instance.get(`/ad/academies/random`);
            } catch (error) {
                console.error(error);
            }
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    // 학원 목록 가지고오기
    const getAcademyList = useQuery(
        ["getAcademyList", page],
        async () => {
            try {
                setTotalCount(0);
                setAcademyList([]);
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
                        countConvenienceId: selectedConvenienceOptions.length,
                        classify: classify,
                    },
                    headers: {
                        Authorization: localStorage.getItem("accessToken"),
                    },
                    paramsSerializer: (params) =>
                        QueryString.stringify(params, {
                            arrayFormat: "repeat",
                        }),
                };

                // options를 get 요청
                const response = await instance.get("/academies", options);

                // Update academyList with the data from the response
                setAcademyList(response.data.academies);

                // Set the total count
                setTotalCount(response.data.listTotalCount);
            } catch (error) {
                console.error(error);
            }
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    // 조건이 생길 때 학원목록 업데이트, 1page로 이동
    useEffect(() => {
        navigate("/academy/find/1");
        if (page === "1") {
            getAcademyList.refetch();
        }
    }, [
        selectedLocation,
        selectedCategory,
        selectedContent,
        selectedAgeOptions.length,
        selectedConvenienceOptions.length,
        classify,
    ]);

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            handleSelectContent();
        }
    };

    const handleSelectContent = () => {
        setSelectedContent(inputValue);
    };

    const handleClassifyChange = (e) => {
        setClassify(e.target.value);
    };

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
                                : "지역 선택"}
                        </SelectModalBtn>
                    </div>
                    <div onClick={openCategoryModal}>
                        <SelectModalBtn>
                            {selectedCategory.realm_sc_nm
                                ? `${
                                      selectedCategory.realm_sc_nm === "국제화"
                                          ? "외국어"
                                          : selectedCategory.realm_sc_nm ===
                                            "정보"
                                          ? "IT"
                                          : selectedCategory.realm_sc_nm
                                                .replace(/\(대\)/g, "")
                                                .trim()
                                  } 
                                ${
                                    selectedCategory.le_crse_nm.includes("전체")
                                        ? ""
                                        : selectedCategory.le_crse_nm
                                }`
                                : "카테고리 선택"}
                        </SelectModalBtn>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="나에게 맞는 학원을 찾아보세요"
                            value={inputValue}
                            onChange={handleInputOnChange}
                            onKeyUp={handleKeyUp}
                        />
                    </div>
                    <SearchBtn onClick={handleSelectContent} />
                </div>
            </div>
            <div css={S.PageLayout}>
                <FindAcademiesSidebar />
                <div css={S.SAcademiesContainer}>
                    <div css={S.PageContainer}>
                        <div css={S.InfoBox}>
                            <div>
                                {totalCount
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                개의 학원이 있습니다.
                            </div>
                        </div>
                        <div>
                            <div css={S.HeaderBox}>
                                <h3>이런 학원은 어떠세요?</h3>
                                <div>
                                    <span>광고</span>
                                    <RiAdvertisementFill size={22} />
                                </div>
                            </div>
                            <ul css={S.UlBox}>
                                {!getPurchaseAcademyList.isLoading &&
                                    Array.isArray(
                                        getPurchaseAcademyList?.data?.data
                                    ) &&
                                    getPurchaseAcademyList?.data?.data.map(
                                        (academy) => {
                                            return (
                                                <LiAcademyBox
                                                    key={academy.ACADEMY_ID}
                                                    academy={academy}
                                                />
                                            );
                                        }
                                    )}
                            </ul>
                        </div>
                        <div>
                            <div css={S.HeaderBox}>
                                <h3>검색된 정보</h3>
                                <select
                                    css={S.ClassifyBox}
                                    name="classifyBox"
                                    id=""
                                    value={classify} // 현재 상태 값을 선택된 값으로 설정
                                    onChange={handleClassifyChange} // 변경 시 이벤트 핸들러 호출
                                >
                                    <option value="등록순">등록순</option>
                                    <option value="좋아요순">좋아요순</option>
                                    <option value="별점순">별점순</option>
                                </select>
                            </div>
                            <ul css={S.UlBox}>
                                {getAcademyList.isLoading ? (
                                    <Loading />
                                ) : getAcademyList.isFetching ? (
                                    <Loading />
                                ) : academyList.length > 0 ? (
                                    academyList.map((academy) => {
                                        return (
                                            <LiAcademyBox
                                                key={academy.ACADEMY_ID}
                                                academy={academy}
                                            />
                                        );
                                    })
                                ) : (
                                    <NoResult />
                                )}
                            </ul>
                        </div>
                    </div>
                    {totalCount === 0 ? (
                        <></>
                    ) : (
                        <Pagination
                            totalCount={totalCount}
                            viewCount={15}
                            link={`/academy/find`}
                        />
                    )}
                </div>
            </div>
            <LocationModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                enableBodyScroll={enableBodyScroll}
            />
            <CategoryModal
                modalIsOpen={categoryModalIsOpen}
                setModalIsOpen={setCategoryModalIsOpen}
                enableBodyScroll={enableBodyScroll}
            />
        </RootContainer>
    );
}

export default FindAcademies;
