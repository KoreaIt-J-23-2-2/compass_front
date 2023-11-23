import React, { useState } from 'react';
import { css } from '@emotion/react';
import RootContainer from '../../components/RootContainer/RootContainer';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { Link, useNavigate } from 'react-router-dom';
import LocationModal from '../../components/Modal/LocationModal/LocationModal';
import CategoryModal from '../../components/Modal/CategoryModal/CategoryModal';
import { useRecoilState } from 'recoil';
import { selectedCategoryState, selectedContentState, selectedLocationState } from '../../store/searchOptions';
import { FaChevronRight } from "react-icons/fa";
import HomeImg from "../../assets/student.png"
import teacher from "../../assets/선생.png"
import student from "../../assets/학생.jpg"
import SearchBtn from '../../components/Button/SearchBtn/SearchBtn';
import LinkBtn from '../../components/Button/LinkBtn/LinkBtn';
import SelectModalBtn from '../../components/Button/SelectModalBtn/SelectModalBtn'


function Home(props) {

    const navigate = useNavigate();

    const [ selectedLocation, setSelectedLocation ] = useRecoilState(selectedLocationState); // 지역
    const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 카테고리
    const [ selectedContent, setSelectedContent ] = useRecoilState(selectedContentState); // 학원 이름

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ categoryModalIsOpen, setCategoryModalIsOpen ] = useState(false);

    // 모달이 열릴 때 스크롤 막기
    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    // 모달이 닫힐 때 스크롤 복원
    const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
    }

    const openLocationModal = () => {
        setModalIsOpen(true);
        disableBodyScroll();
    };

    const openCategoryModal = () => {
        setCategoryModalIsOpen(true);
        disableBodyScroll();
    };

    const handleInputOnChange = (e) => {
        setSelectedContent(e.target.value);
    }

    const handleSearch = () => {
        navigate("academy/find/1");
    }

    return (
        <>
            <div css={S.SMainLayout}>
                <div css={S.SMainContainer}>
                    <div css={S.STextContainer}>
                        <h1><b>학습 나침반</b>에서</h1>
                        <h1>쉽고 빠르게 <b>원하는 학원을 찾아보세요.</b></h1>
                    </div>
                    <div css={S.SImgBox}>
                        <img  css={S.SImgBox} src={HomeImg} alt="" />
                    </div>
                </div>
            </div>
            <RootContainer>
                <div css={S.SSearchContainer}>
                    <div css={S.SInputBox}>
                        <input type="text" placeholder='학원명, 지역, 과목으로 검색해보세요' onChange={handleInputOnChange}/>
                    </div>
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
                                ? `${selectedCategory.category_nm} ${selectedCategory.le_crse_nm}`
                                : "카테고리 선택"
                            }
                        </SelectModalBtn>
                    </div>
                    <SearchBtn />
                </div>
                <div css={S.SLinkContainer}>
                    <div css={S.SRegistContainer}>
                        <div css={S.SImgCover}>
                            <img css={S.SImg} src={teacher} alt="" />
                        </div>
                        <div css={S.SCommentContainer}>
                            <div css={S.SRegistTitle}>학원 관리자 등록하기</div>
                            <div css={S.SRegistComment}>학원 나침반에 등록해서 나의 학원을 홍보해보세요!</div>
                            <LinkBtn link={"/academy/regist"} btn={"등록하기"}/>
                        </div>
                    </div>
                    <div css={S.SRegistContainer}>
                        <div css={S.SImgCover}>
                            <img css={S.SImg} src={student} alt="" />
                        </div>
                        <div css={S.SCommentContainer}>
                            <div css={S.SRegistTitle}>나의 관심 학원 보기</div>
                            <div css={S.SRegistComment}>관심있는 학원에 하트를 누르고 한 번에 볼 수 있어요!</div>
                            <LinkBtn link={"/account/mypage"} btn={"보러가기"} />
                        </div>
                    </div>
                </div>
                <LocationModal modalIsOpen={modalIsOpen} 
                    setModalIsOpen={setModalIsOpen} 
                    enableBodyScroll={enableBodyScroll}
                    setSelectedLocation={setSelectedLocation}/>
                <CategoryModal modalIsOpen={categoryModalIsOpen} 
                    setModalIsOpen={setCategoryModalIsOpen} 
                    enableBodyScroll={enableBodyScroll}
                    setSelectedCategory={setSelectedCategory}/>
            </RootContainer>
        </>
    );
}

export default Home;