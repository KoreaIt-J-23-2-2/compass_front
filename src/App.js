import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AuthRoute from "./components/Routes/AuthRoute";
import AccountRoute from "./components/Routes/AccountRoute";
import Header from "./components/Header/Header";
import FindAcademies from "./pages/FindAcademies/FindAcademies";
import RegistAcademy from "./pages/RegistAcademy/RegistAcademy";
import AcademyInfo from "./pages/AcademyInfo/AcademyInfo";
import Footer from "./components/Footer/Footer";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AcademyInquiry from "./pages/AcademyInquiry/AcademyInquiry";
import { useQuery } from "react-query";
import { instance } from "./api/config/instance";

const wrapper = css`
  width: 100%;
  height: 100vh;
`

const content = css`
  flex: 1;
  padding-bottom: 90px;
  min-height: 810px;
`;

function App() {

  const getPrincipal = useQuery(["getPrincipal"], async () => {
    try {
      const option = {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        }
      }
      return await instance.get("/account/principal", option);
    } catch (error) {
      throw new Error(error);
    }
  }, {
    retry: 0,
    refetchInterval: 1000 * 60 * 10,  //10분마다 refetch
    refetchOnWindowFocus: false
  });

  if(getPrincipal.isLoading) {
    return <></>;
  }

  return (
    <div css={wrapper}>
      <Header />
      <div css={content}>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/auth/*" element={ <AuthRoute/> } /> 
          <Route path="/account/*" element={ <AccountRoute/> } />
          <Route path="/academy/find/:page" element={ <FindAcademies/> } />
          <Route path="/academy/regist" element={ <RegistAcademy/> } /> 
          <Route path="/academy/info" element={ <AcademyInfo/> } /> 
          <Route path="/academy/inquiry" element={ <AcademyInquiry /> } /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
