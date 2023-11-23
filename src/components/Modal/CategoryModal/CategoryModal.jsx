import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import * as GS from "../../../styles/Global/Common"
import { instance } from '../../../api/config/instance';
import { useQuery } from 'react-query';
import ReactModal from 'react-modal';
import { selectedCategoryState } from '../../../store/searchOptions';

function CategoryModal({ modalIsOpen, setModalIsOpen, enableBodyScroll }) {
    
    const [ selectedCategory, setSelectedCategory ] = useRecoilState(selectedCategoryState); // 선택된 카테고리, 상세 카테고리 정보
    
    const [ categoryOptions, setCategoryOptions ] = useState([]); // 카테고리 목록
    const [ categoryOption, setCategoryOption ] = useState(selectedCategory.realm_sc_nm); // 선택된 카테고리
    const [ categoryNm, setCategoryNm ] = useState(selectedCategory.category_nm);
    
    const [ categoryDetailOptions, setCategoryDetailOptions ] = useState([]); // 상세 카테고리 목록
    const [ categoryDetailOption, setCategoryDetailOption ] = useState(selectedCategory.le_crse_nm); // 선택된 상세 카테고리 
    const [ categoryDetailNm, setCategoryDetailNm ] = useState(selectedCategory.category_detail_nm);

    // 선택 버튼
    const closeModal = () => {
        // api로 넘길 카테고리 검색 정보
        setSelectedCategory({
            ...selectedCategory,
            realm_sc_nm: categoryOption,
            category_nm: categoryNm,
            le_crse_nm: categoryDetailOption,
            category_detail_nm: categoryDetailNm
        })
        setModalIsOpen(false);
        enableBodyScroll();
    };

    // 초기화
    const handleResetButton = () => {
        setCategoryOption("");
        setCategoryDetailOption("");
        setSelectedCategory({
            realm_sc_nm: "",
            category_nm: "",
            le_crse_nm: ""
        });
    }


    const categoryOptionsState = useQuery(["categoryOptionsState"], async () => {
        try {
            return await instance.get("/option/categories");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCategoryOptions(response.data.map(option => {
                return { value: option.categoryValue, label: option.categoryName }
            }))
        }
    });

    const categoryDetailOptionsState = useQuery(["categoryDetailOptionsState"], async () => {
        try {
            return await instance.get("/option/category-details");
        }catch(error) {
            console.error(error);
        }
    },
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            setCategoryDetailOptions(response.data);
        }
    });

    // educationOfficeOption이 선택되었거나 administrativeDistrictOption이 존재하는 경우에만 districtOptionShow를 true로 설정
    const isDetailOptionShow = !!categoryOption || !!categoryDetailOption;

    // categoryOption 일치하는 categoryDetailOptions 필터링
    const filteredCategoryDetailOptions = categoryDetailOptions.filter(option => {
        return option.categoryValue === categoryOption;
    });

    return (
        <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} css={S.SLayout}>
            <div css={S.STitle}>카테고리 선택</div>
            <div css={S.SListContainer}>
                <ul css={S.SCategoryList}>
                    {categoryOptions.map((option) => (
                        <li key={option.value} 
                            onClick={() => {
                                setCategoryOption(option.value);
                                setCategoryDetailOption("");
                                setCategoryNm(option.label);
                            }}
                            css={[
                                S.SCategoryListItem, // 기존 스타일을 포함
                                option.value === categoryOption && S.SCategoryListItemSelected // 선택된 li에 대한 스타일
                            ]}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
                <ul css={S.SCategoryDetailList(isDetailOptionShow)}>
                    {filteredCategoryDetailOptions.map((option) => (
                        <li key={option.categoryDetailValue} 
                        onClick={() => {
                            setCategoryDetailOption(option.categoryDetailValue);
                            setCategoryDetailNm(option.categoryDetailName);
                            }
                        }
                        css={[
                            S.SCategoryDetailListItem, // 기존 스타일을 포함
                            option.categoryDetailValue === categoryDetailOption && S.SCategoryDetailListItemSelected // 선택된 li에 대한 스타일
                        ]}
                        >
                            {option.categoryDetailName}
                        </li>
                    ))}
                </ul>
            </div>
            <div css={S.ButtonContainer}>
                <button onClick={handleResetButton} css={GS.SButton}>초기화</button>
                <button onClick={closeModal} css={GS.SButton}>선택</button>
            </div>
            
        </ReactModal>
    );
}

export default CategoryModal;