import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSearchParams, Navigate } from 'react-router-dom';

function SigninOauth2() {
    const [searchParams] = useSearchParams();
    const [done, setDone] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        const token = searchParams.get("token");
        const firebaseToken = searchParams.get("firebaseToken");

        if (token && firebaseToken) {
            localStorage.setItem("accessToken", "Bearer " + token);
            signInWithCustomToken(auth, firebaseToken)
                .then(() => console.log("Firebase 로그인 성공"))
                .catch((err) => console.error("Firebase 로그인 실패:", err));
            queryClient.refetchQueries(["getPrincipal"]);
        }
        setDone(true); // 완료 후 리디렉트
    }, [searchParams, queryClient]);

    if (!done) return <div>로그인 처리 중입니다...</div>;
    return <Navigate to="/" />;
}

export default SigninOauth2;