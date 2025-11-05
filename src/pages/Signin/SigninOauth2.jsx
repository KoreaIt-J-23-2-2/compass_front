import { signInWithCustomToken } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams, Navigate } from "react-router-dom";
import { auth } from "../../api/firebase/firebase";

function SigninOauth2() {
    const [searchParams] = useSearchParams();
    const [done, setDone] = useState(false);
    const queryClient = useQueryClient();

    const token = searchParams.get("token");
    const firebaseToken = searchParams.get("firebaseToken");

    useEffect(() => {
        const handleAuth = async () => {
            try {
                if (token) {
                    localStorage.setItem("accessToken", "Bearer " + token);
                    queryClient.refetchQueries(["getPrincipal"]);
                }
                if (firebaseToken) {
                    try {
                        await signInWithCustomToken(auth, firebaseToken);
                    } catch (error) {
                        console.error("Firebase 로그인 실패", error);
                    }
                }
                setDone(true); // 완료 후 리디렉트
            } catch (error) {
                console.error("로그인 처리 중 오류", error);
            }
        };

        handleAuth();
    }, [searchParams, queryClient]);

    if (!done) return <div>로그인 처리 중입니다...</div>;
    return <Navigate to="/" />;
}

export default SigninOauth2;
