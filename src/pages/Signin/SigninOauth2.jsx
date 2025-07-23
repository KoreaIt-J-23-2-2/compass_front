import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSearchParams, Navigate } from 'react-router-dom';

function SigninOauth2() {
    const [searchParams] = useSearchParams();
    const [done, setDone] = useState(false);
    const queryClient = useQueryClient();

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            localStorage.setItem("accessToken", "Bearer " + token);
            queryClient.refetchQueries(["getPrincipal"]);
        }
        setDone(true); // 완료 후 리디렉트
    }, [searchParams, queryClient]);

    if (!done) return <div>로그인 처리 중입니다...</div>;
    return <Navigate to="/" />;
}

export default SigninOauth2;