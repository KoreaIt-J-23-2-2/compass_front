import React, { useState } from 'react';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import { useQueryClient } from 'react-query';
import { async } from 'q';
import { instance } from '../../../api/config/instance';
import * as GS from "../../../styles/Global/Common"
import { Navigate, useNavigate } from 'react-router-dom';

function MypageUser(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    const [ isEdit, setIsEdit ] = useState(false);

    const user = {
        email: principalState.data.data.email,
        name: principalState.data.data.name,
        nickname: principalState.data.data.nickname,
        phone: principalState.data.data.phone
    }

    const [ newUser, setNewUser ] = useState(user)

    const handleWithdrawal = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            if(window.confirm("정말로 회원 탈퇴하시겠습니까?\n탈퇴는 되돌릴 수 없습니다.")) {
                await instance.delete(`/account/${principalState.data.data.userId}`, option);
                localStorage.removeItem("accessToken");
                await queryClient.refetchQueries(["getPrincipal"]);
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleEditBtnOnClick = () => {
        setIsEdit(true);
    }

    const handleEditSubmitOnClick = async () => {
        try {
            setIsEdit(false);
            if(JSON.stringify(newUser) !== JSON.stringify(user)) {  // 기존 유저와 달라졌을 때만 수정
                const option = {
                    headers: {
                        Authorization: localStorage.getItem("accessToken")
                    }
                }
                const response = await instance.put(`/account/user/${principalState.data.data.userId}`, newUser, option);
                queryClient.refetchQueries(["getPrincipal"]);
                alert("개인정보 변경이 완료 되었습니다.");
            }
        } catch (error) {
            console.error(error);
            if(Object.keys(error.response.data).includes("email")) {
                alert(error.response.data.email);
            } else if(Object.keys(error.response.data).includes("nickname")) {
                alert(error.response.data.nickname);
            }
            setNewUser(user);
        }
    }

    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSendMail = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            await instance.post("/account/auth/email", {}, option);  // 주소, 데이터, 옵션
            alert("인증 메일 전송 완료. 인증 요청 메일을 확인해주세요.");
        } catch (error) {
            alert("인증 메일 전송 실패. 다시 시도해주세요.");
        }
    }

    return (
        <div>
            <h2>🛠️ 개인 정보 수정</h2>
            <div>
                <div css={S.SButtonBox}>
                    <div>
                        내 정보
                    </div>
                    {isEdit? 
                    <button onClick={handleEditSubmitOnClick}>확인</button> 
                    : 
                    <div>
                        <button onClick={handleWithdrawal}>회원 탈퇴</button>
                        <button onClick={handleEditBtnOnClick}>변경하기</button>
                    </div>
                    }
                </div>
                <table css={S.STable}>
                    <tbody>
                        <tr>
                            <td>이메일</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='email' 
                                        value={newUser.email}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.email}
                                {principalState.data.data.enabled > 0 ?
                                    <button disabled>
                                        인증 완료
                                    </button>
                                    : (!isEdit ? 
                                            <button onClick={handleSendMail}>
                                                인증 하기
                                            </button>
                                            : <button disabled>
                                                인증 하기
                                            </button>)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='name' 
                                        value={newUser.name}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.name}
                            </td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='nickname' 
                                        value={newUser.nickname}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.nickname}
                            </td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td>
                                {isEdit ?
                                    <input type="text"
                                        name='phone' 
                                        value={newUser.phone}
                                        onChange={handleInputChange}/>
                                    :principalState.data.data.phone}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MypageUser;