import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signin from '../../pages/Signin/Signin';
import DetailSignup from '../../pages/DetailSignup/DetailSignup';
import SigninOauth2 from '../../pages/Signin/SigninOauth2';
import { useQueryClient } from 'react-query';
import Signup from '../../pages/Signup/Signup';

function AuthRoute(props) {

    // 로그인 상태 확인
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryState("getPrincipal");

    // 로그인된 상태라면 로그인, 회원가입 페이지로의 접근을 막음
    if (!!principal?.data?.data) {
        return <Navigate to="/" />;
    }

    return (
        <Routes>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='oauth2/signin' element={<SigninOauth2 />} />
            <Route path='detail/signup' element={<DetailSignup />} />
        </Routes>
    );
}

export default AuthRoute;