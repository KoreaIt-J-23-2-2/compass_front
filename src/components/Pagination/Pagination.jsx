import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { useNavigate, useParams } from "react-router-dom";

function Pagination({ totalCount, link, search, viewCount }) {
    const navigate = useNavigate();

    const { page } = useParams();

    const pagination = () => {
        const itemsPerPage = viewCount || 5; // viewCount가 없으면 5로 기본 설정
        const lastPage = Math.ceil(totalCount / itemsPerPage);

        const currentPage = parseInt(page, 10) || 1; // useParams에서 넘어오는 page를 숫자로
        const pagesToShow = 5; // 항상 버튼 5개씩
        const startIndex =
            currentPage % pagesToShow === 0
                ? currentPage - (pagesToShow - 1)
                : currentPage - (currentPage % pagesToShow) + 1;
        const endIndex = Math.min(startIndex + pagesToShow - 1, lastPage);

        const pageNumbers = [];

        for (let i = startIndex; i <= endIndex; i++) {
            pageNumbers.push(i);
        }

        return (
            <>
                <button
                    disabled={parseInt(page) === 1}
                    onClick={() => {
                        navigate(`${link}/${parseInt(page) - 1}${search}`);
                    }}
                >
                    &#60;
                </button>

                {pageNumbers.map((num) => {
                    return (
                        <button
                            className={parseInt(page) === num ? "selected" : ""}
                            onClick={() => {
                                navigate(`${link}/${num}${search}`);
                            }}
                            key={num}
                        >
                            {num}
                        </button>
                    );
                })}

                <button
                    disabled={parseInt(page) === lastPage}
                    onClick={() => {
                        navigate(`${link}/${parseInt(page) + 1}${search}`);
                    }}
                >
                    &#62;
                </button>
            </>
        );
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SPageNumbers}>{pagination()}</div>
        </div>
    );
}

export default Pagination;

Pagination.defaultProps = {
    search: "",
    viewCount: 5, // 기본값 5
};
