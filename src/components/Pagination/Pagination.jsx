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

        const pagesToShow = 5; // 항상 버튼 5개씩
        const startIndex =
            page % pagesToShow === 0
                ? page - (pagesToShow - 1)
                : page - (page % pagesToShow) + 1;
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
