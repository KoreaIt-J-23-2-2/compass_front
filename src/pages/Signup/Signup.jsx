import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { instance } from "../../api/config/instance";

function Signup() {
    const navigate = useNavigate();

    // form states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [phone, setPhone] = useState("");

    // UI states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // validations (프론트 단 간단검사)
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const pwdValid = password.length >= 4 && password.length <= 20;
    const pwdMatch = password === confirmPassword;
    const nameValid = name.trim().length > 0;
    const nicknameValid = nickname.trim().length > 0;
    const phoneValid = phone.trim().length > 0; // 형식 강제 필요하면 정규식으로 교체

    const formValid =
        emailValid &&
        pwdValid &&
        pwdMatch &&
        nameValid &&
        nicknameValid &&
        phoneValid;

    const handleSignup = async () => {
        if (!formValid) return;

        try {
            setSubmitting(true);
            await instance.post("/auth/signup", {
                email,
                password,
                name,
                nickname,
                phone,
            });

            alert("회원가입 성공! 로그인 페이지로 이동합니다.");
            navigate("/auth/signin");
        } catch (error) {
            // 백엔드 DuplicateException(errorMap) 형식 대응
            const data = error?.response?.data;
            if (data && typeof data === "object") {
                const msgs = Object.values(data).join("\n");
                alert(msgs || "회원가입에 실패했습니다.");
            } else {
                alert("회원가입에 실패했습니다.");
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle}>회원가입</h1>
                <h2 css={S.STitle2}>학습 나침반과 함께 시작하세요.</h2>

                <div css={S.SForm}>
                    <input
                        type="text"
                        placeholder="이름"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        css={S.SInput}
                    />
                    <input
                        type="text"
                        placeholder="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        css={S.SInput}
                    />
                    <input
                        type="text"
                        placeholder="전화번호 (예: 010-1234-5678)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        css={S.SInput}
                    />
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        css={S.SInput}
                    />

                    {/* 비밀번호 */}
                    <div css={S.SPasswordBox}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호 (4~20자)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            css={S.SPasswordInput}
                        />
                        <span
                            css={S.SEyeIcon}
                            onClick={() => setShowPassword((p) => !p)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* 비밀번호 확인 */}
                    <div css={S.SPasswordBox}>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            css={S.SPasswordInput}
                        />
                        <span
                            css={S.SEyeIcon}
                            onClick={() => setShowConfirmPassword((p) => !p)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button
                        onClick={handleSignup}
                        css={S.SButton}
                        disabled={!formValid || submitting}
                    >
                        {submitting ? "처리 중..." : "회원가입"}
                    </button>

                    <div css={S.SLoginMove}>
                        <span css={S.SLoginTitle}>이미 계정이 있으신가요?</span>
                        <button
                            css={S.SLoginBtn}
                            onClick={() => navigate("/auth/signin")}
                        >
                            로그인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
