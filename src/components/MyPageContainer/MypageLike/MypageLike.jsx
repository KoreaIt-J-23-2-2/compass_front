import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useQuery, useQueryClient } from "react-query";
import { instance } from "../../../api/config/instance";
import LiAcademyBox from "../../LiAcademyBox/LiAcademyBox";
import EmptyBox from "../../EmptyBox/EmptyBox";
import Pagination from "../../Pagination/Pagination";
import { useParams } from "react-router";

function MypageLike(props) {
    const { page } = useParams();

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const principal = principalState?.data?.data;
    const likeCountOfMypage = queryClient.getQueryState("getLikeCountOfMypage");

    const userId = principal?.userId;

    const getLikeAcademiesQuery = useQuery(
        ["getLikeAcademies", page],
        async () => {
            try {
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken"),
                    },
                };
                return await instance.get(
                    `/account/mypage/like/${userId}/${page}`,
                    option
                );
            } catch (error) {
                console.error(error);
            }
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
        }
    );

    useEffect(() => {
        // Refetch data when the component mounts
        getLikeAcademiesQuery.refetch();
    }, []);

    if (likeCountOfMypage?.isLoading || getLikeAcademiesQuery?.isLoading) {
        return <></>;
    }

    return (
        <div>
            <h2>❤️ 나의 관심 학원</h2>
            <div>
                {likeCountOfMypage?.data?.data === 0 ? (
                    <EmptyBox
                        comment={"나의 관심 학원을 추가해 보세요!"}
                        link={"/academy/find/1"}
                        btn={"보러 가기"}
                    />
                ) : (
                    <>
                        <ul css={S.UlBox}>
                            {!getLikeAcademiesQuery?.isLoading &&
                                Array.isArray(
                                    getLikeAcademiesQuery?.data?.data
                                ) &&
                                getLikeAcademiesQuery?.data?.data.map(
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
                        <Pagination
                            totalCount={likeCountOfMypage?.data?.data}
                            link={"/account/mypage/like"}
                            search={""}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default MypageLike;
