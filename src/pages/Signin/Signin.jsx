import React, { useState } from "react";
import RootContainer from "../../components/RootContainer/RootContainer";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import kakaologin from "../../assets/kakao_login.png";
import naverlogin from "../../assets/naver_login.png";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/config/instance";
import { useQueryClient } from "react-query";
import { auth } from "../../api/firebase/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const pwdValid = password.length >= 4 && password.length <= 20;
    const formValid = emailValid && pwdValid;

    const queryClient = useQueryClient();

    // Enter 키로 로그인
    const onKeyDown = (e) => {
        if (e.key === "Enter" && formValid && !submitting) {
            handleLogin();
        }
    };

    // 일반 로그인 요청
    const handleLogin = async () => {
        if (!formValid) return;
        try {
            setSubmitting(true);
            const res = await instance.post("/auth/signin", {
                email,
                password,
            });
            const data = res?.data ?? res; // (인터셉터로 data만 반환되는 경우 대비)

            const tokenType = data?.tokenType ?? "Bearer";
            const accessToken = data?.accessToken;
            const firebaseToken = data?.firebaseToken;

            if (!accessToken || !firebaseToken)
                throw new Error("토큰 응답이 없습니다.");

            localStorage.setItem("accessToken", `${tokenType} ${accessToken}`);

            // Firebase 로그인
            try {
                await signInWithCustomToken(auth, firebaseToken);
            } catch (e) {
                console.error("firebase 로그인 실패", e);
            }

            alert("로그인 성공!");
            navigate("/");
            await queryClient.invalidateQueries("getPrincipal");
        } catch (error) {
            alert("이메일 또는 비밀번호가 올바르지 않습니다.");
        } finally {
            setSubmitting(false);
        }
    };

    // 소셜 로그인 (로컬 백엔드 기준)
    const handleKaKaoLogin = () => {
        window.location.href =
            "https://3-34-44-250.sslip.io/oauth2/authorization/kakao";
    };
    const handleNaverLogin = () => {
        window.location.href =
            "https://3-34-44-250.sslip.io/oauth2/authorization/naver";
    };

    return (
        <RootContainer>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <div css={S.STitleRow}>
                        <h1 css={S.STitle}>로그인</h1>
                        <span css={S.STestTooltipWrapper}>
                            <AiOutlineInfoCircle /> 관리자 계정으로 테스트
                            <div css={S.STestTooltip}>
                                <p>email: test@naver.com</p>
                                <p>password: Test1234!!</p>
                            </div>
                        </span>
                    </div>
                    <h2 css={S.STitle2}>학습 나침반의 가치를 느껴보세요.</h2>

                    <div css={S.SLoginBox}>
                        {/* 👉 일반 로그인 폼 */}
                        <input
                            type="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={onKeyDown}
                            css={S.SInput}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호 (4~20자)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={onKeyDown}
                            css={S.SInput}
                        />
                        <button
                            onClick={handleLogin}
                            css={S.SLoginBtn}
                            disabled={!formValid || submitting}
                        >
                            {submitting ? "처리 중..." : "로그인"}
                        </button>

                        {/* 👉 회원가입 이동 버튼 */}
                        <div css={S.SSignupBtnBox}>
                            <span css={S.SSignupTitle}>
                                아직 회원이 아니신가요?
                            </span>
                            <button
                                css={S.SSignupBtn}
                                onClick={() => navigate("/auth/signup")}
                            >
                                회원가입
                            </button>
                        </div>
                    </div>

                    {/* 소셜 로그인 버튼 */}
                    <div css={S.SDivider}>
                        <span>소셜 로그인 하러가기</span>
                    </div>
                    <div css={S.SSocialLoginBox}>
                        <div css={S.SkakaoLoginBtn}>
                            <img
                                src={kakaologin}
                                onClick={handleKaKaoLogin}
                                alt="카카오 로그인"
                            />
                        </div>
                        <div css={S.SNaverLoginBtn}>
                            <img
                                src={naverlogin}
                                onClick={handleNaverLogin}
                                alt="네이버 로그인"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </RootContainer>
    );
}

export default Signin;
