import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import * as GS from '../../../../styles/Global/Common';
import { useQuery, useQueryClient } from 'react-query';
import { instance } from '../../../../api/config/instance';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useNavigate, useParams } from 'react-router-dom';
import productImg from "../../../../assets/진행시켜.jpg"
import Pagination from '../../../Pagination/Pagination';
import EmptyBox from '../../../EmptyBox/EmptyBox';

function MypageAdPayment(props) {

    const navigate = useNavigate();

    const { page } = useParams();

    const [ selectedAcademy, setSelectedAcademy ] = useState(null);

    const quertClient = useQueryClient();
    const principalState = quertClient.getQueryState("getPrincipal");
    const principal = principalState?.data?.data;
    const [ refetchGetPaidList, setRefetchGetPaidList ] = useState(false);

    const [ isAcademyPaid, setIsAcademyPaid ] = useState(false);
    const [ products, setProducts ] = useState([]);

    const [ isPaymentInfoOpen, setIsPaymentInfoOpen ] = useState(false);
    const [ selectedTarget, setSelectedTarget ] = useState(null);

    // 나의학원 리스트
    const getMyAcademies = useQuery(["getMyAcademies", page], async () => {
        const option = {
            headers: {
                Authorization: localStorage.getItem("accessToken")
            }
        }
        return await instance.get(`/academies/${principal?.userId}/${page}`, option);
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: () => {
            setSelectedAcademy(null);
        }
    })

    const ispurchase = useQuery(["ispurchase"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                },
                params: {
                    userId: principal.userId,
                    academyId: selectedAcademy.academyId
                }
            }
            return await instance.get(`/purchase/check`, option)
        } catch (error) {
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        enabled: refetchGetPaidList && !!selectedAcademy,
        onSuccess: (response) => {
            setIsAcademyPaid(response?.data);
            setRefetchGetPaidList(false);
        }
    })

    useEffect(() => {
        setRefetchGetPaidList(true);
    }, [selectedAcademy]);

    useEffect(() => {
        if(!isPaymentInfoOpen) {
            setSelectedAcademy(null)
        }
    }, [isPaymentInfoOpen])

    const handleAcademyOnClick = (e, academy) => {
        setSelectedAcademy(academy);
        if(selectedTarget === e.target) {
            setIsPaymentInfoOpen((prevIsOpen) => !prevIsOpen);
            return;
        }
        setSelectedTarget(e.target);
        setIsPaymentInfoOpen(true);
    }

    // 결제
    const getProduct = useQuery(["getProduct"], async () => {
        try{
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get(`/ad/products`, option)
        } catch(error){
            console.error(error)
        }
    }, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setProducts(response.data);
        }
    })

    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

    const handlePaymentSubmit = (product) => {
        const principal = quertClient.getQueryState("getPrincipal");
        if(!window.IMP) {return}
        const { IMP } = window;
        IMP.init("imp52230315") // IMP를 초기화 시킴

        const paymentData = {
            pg: "kakaopay",
            pay_method: "kakaopay",
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: product.productPrice,
            name: product.productName,
            buyer_name: principal?.data?.data.name,
            buyer_email: principal?.data?.data.email
        }

        IMP.request_pay(paymentData, (response) => {
            const { success, error_msg } = response;

            if(success) {
                const purchaseDate = {
                    productId: product.productId,
                    userId: principal?.data?.data.userId,
                    academyId: selectedAcademy.academyId
                }
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                instance.post("/purchase", purchaseDate, option).then(response => {
                    alert("광고결제가 완료되었습니다.")
                    ispurchase.refetch()
                    quertClient.refetchQueries(["getPrincipal"])
                })
            } else {
                alert(error_msg);
            }
        })
    }
    
    if(getMyAcademies.isLoading) {
        return <></>;
    }
    
    return (
        <div>
            <h2>💸 광고 결제</h2>
            <div>
                {getMyAcademies.data.data.listTotalCount === 0 ? 
                <EmptyBox comment={<>광고 결제할 학원이 없습니다! <br />학원을 등록하고 승인 받아 나의 학원을 홍보해보세요!</>}
                    link={'/academy/regist'} btn={"등록하기"}/> :
                <>
                    <table css={S.STable}>
                        <thead>
                            <tr>
                                <td>학원 번호</td>
                                <td>학원명</td>
                                <td>학원 선택</td>
                            </tr>
                        </thead>
                        <tbody>
                        { getMyAcademies?.data?.data.academyRegistrations.map(academy => {
                            return  <tr key={academy.academyRegistrationId} 
                                        style={{ fontWeight: selectedAcademy === academy ? 'bold' : 'normal'}}>
                                        <td>{academy.acaAsnum}</td>
                                        <td>{academy.acaNm}</td>
                                        <td>
                                            <button css={GS.SButton} onClick={(e) => handleAcademyOnClick(e, academy)}>
                                                {selectedAcademy === academy ? '선택 해제' : '선택' }
                                            </button>
                                        </td>
                                    </tr>
                        })}
                        </tbody>
                    </table>
                    {!getMyAcademies.isLoading && 
                        <Pagination totalCount={getMyAcademies?.data?.data?.listTotalCount}
                            link={`/account/mypage/adpayment`}/>}
                    {isPaymentInfoOpen && !!selectedAcademy && (
                    <div css={S.SProductContainer}>
                        {ispurchase.isLoading ? <></> : !!isAcademyPaid
                        ? (<div>결제정보: 결제된 내용
                                <div>상품 : {isAcademyPaid.productName}</div>
                                <div>가격 : {isAcademyPaid.productPrice}원</div>
                                <div>기간 : {isAcademyPaid.productPeriod}일</div>
                                <div>상품설명 : {isAcademyPaid.productPrice}원의 행복</div>
                            </div>)
                        : products.map(product => {
                                return (
                                <div css={S.SProductLayout} onClick={() => { handlePaymentSubmit(product); }}>
                                    <div css={S.SProductImgBox}>
                                        <img css={S.SProductImg} src={productImg} alt="" />
                                        <p css={S.SProductImgText}>{product.productPrice}원</p>
                                    </div>
                                        <div css={S.SProductDetail}>
                                        <div>상품 : {product.productName}</div>
                                        <div>가격 : {product.productPrice}원</div>
                                        <div>기간 : {product.productPeriod}일</div>
                                        <div>상품설명 : {product.productPrice}원의 행복</div>
                                    </div>
                                </div>
                                );
                            })
                        }
                    </div>
                    )}
                </>}
            </div>
        </div>
    );
}

export default MypageAdPayment;