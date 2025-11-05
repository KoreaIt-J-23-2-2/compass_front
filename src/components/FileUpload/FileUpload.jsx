import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { auth, storage } from "../../api/firebase/firebase";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Line } from "rc-progress";
import { useQueryClient } from "react-query";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";

function FileUpload({
    academyContent,
    setAcademyContent,
    uploadeFile,
    setUploadeFile,
}) {
    const [businessRegistrationFile, setBusinessRegistrationFile] = useState();
    const [idFile, setIdFile] = useState("");
    const [operationRegistrationFile, setOperationRegistrationFile] =
        useState("");
    const [progress, setProgress] = useState({
        businessRegistrationFile: 0,
        idFile: 0,
        operationRegistrationFile: 0,
    });

    const { firebaseUser, loading } = useFirebaseAuth();

    const uploadLabelChange = async (e) => {
        if (!firebaseUser) {
            alert("Firebase 인증 세션이 만료되었습니다. 다시 로그인해주세요.");
            return;
        }

        const files = [...e.target.files];

        if (!files.length) {
            // 파일이 선택되지 않은 경우를 처리 (예: 사용자가 업로드를 취소한 경우)
            return;
        }

        //화면에 보여주기 위함(label)
        switch (e.target.name) {
            case "businessRegistrationFile":
                setBusinessRegistrationFile(e.target.value);
                break;
            case "idFile":
                setIdFile(e.target.value);
                break;
            case "operationRegistrationFile":
                setOperationRegistrationFile(e.target.value);
                break;
        }

        // Firebase Auth 상태 확인
        const user = auth.currentUser;
        if (!user) {
            alert("Firebase 인증 세션이 만료되었습니다. 다시 로그인해주세요.");
            return;
        }

        // 🔹 파일 업로드
        const uploadPromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const customFileName = academyContent?.academyId;
                const storageRef = ref(
                    storage,
                    `files/${e.target.name}/${customFileName}`
                );

                // 👇👇👇 파일 다운로드를 위해 Content-Disposition을 'attachment'로 설정하는 메타데이터 추가
                const metadata = {
                    // 이 파일이 브라우저에서 '첨부 파일'로 처리되어 다운로드되도록 강제
                    contentDisposition: "attachment",
                    contentType: file.type,
                    customMetadata: {
                        originalExtension: file.name.split(".").pop(),
                    },
                };

                // 업로드 작업 생성
                const uploadTask = uploadBytesResumable(
                    storageRef,
                    file,
                    metadata
                );

                uploadTask.on(
                    //업로드가 시작되면
                    "state_changed", //파일이 변경되고 있을 때
                    (snapshot) => {
                        //파일 업로드 대기 중 프로그레스 바 적용할 때 사용, 증가하는 %가 들어있음
                        const progressValue = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                                100
                        );

                        // 파일 이름 기준으로 진행률 업데이트
                        setProgress((prev) => ({
                            ...prev,
                            [e.target.name]: progressValue,
                        }));
                    },
                    (error) => {
                        console.error(error);
                        reject(error);
                    },
                    async () => {
                        //업로드가 완료 -> 다운로드 URL 가져오기
                        try {
                            const downloadUrl = await getDownloadURL(
                                uploadTask.snapshot.ref
                            );
                            setAcademyContent((prev) => ({
                                ...prev,
                                [e.target.name]: downloadUrl,
                            }));
                            setUploadeFile({
                                ...uploadeFile,
                                [e.target.name]: 1,
                            });
                            resolve(downloadUrl);
                        } catch (error) {
                            console.error("URL 가져오기 실패:", error);
                            reject(error);
                        }
                    }
                );
            });
        });

        try {
            await Promise.all(uploadPromises);
            console.log("모든 파일 업로드 성공 ✅");
        } catch (error) {
            console.error("업로드 도중 오류 발생 ❌", error);
        }
    };

    const uploadExceptionHandler = (e) => {
        switch (e.target.htmlFor) {
            case "idFile":
                if (!uploadeFile?.businessRegistrationFile) {
                    alert(
                        "사업자등록증 또는 사업자등록등명원를 먼저 제출하세요."
                    );
                }
                break;
            case "operationRegistrationFile":
                if (!uploadeFile?.idFile) {
                    alert("대표자 신분증을 먼저 제출하세요.");
                }
                break;
        }
    };

    return (
        <>
            <div css={S.SFileUploadContainer}>
                <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                <div className="fileBox">
                    <label
                        css={S.SUploadLabel}
                        htmlFor="businessRegistrationFile"
                    >
                        <BsFillFileEarmarkArrowUpFill size={14} /> 첨부하기
                    </label>
                    <p>{businessRegistrationFile}</p>
                </div>
                <input
                    type="file"
                    name="businessRegistrationFile"
                    id="businessRegistrationFile"
                    onChange={uploadLabelChange}
                />
                {progress?.businessRegistrationFile > 0 &&
                    progress?.businessRegistrationFile < 100 && (
                        <Line
                            percent={progress?.businessRegistrationFile}
                            strokeWidth={1}
                            strokeColor="#ffe600"
                            trailColor="#D3D3D3"
                            className="progress"
                        />
                    )}
            </div>
            <div css={S.SFileUploadContainer}>
                <span>대표자 신분증</span>
                <div className="fileBox">
                    <label
                        css={S.SUploadLabel}
                        htmlFor="idFile"
                        onClick={uploadExceptionHandler}
                    >
                        <BsFillFileEarmarkArrowUpFill size={14} /> 첨부하기
                    </label>
                    <p>{idFile}</p>
                </div>
                <input
                    type="file"
                    name="idFile"
                    id="idFile"
                    onChange={uploadLabelChange}
                    disabled={uploadeFile?.businessRegistrationFile !== 1}
                />
                {progress?.idFile > 0 && progress?.idFile < 100 && (
                    <Line
                        percent={progress?.idFile}
                        strokeWidth={1}
                        strokeColor="#ffe600"
                        trailColor="#D3D3D3"
                        className="progress"
                    />
                )}
            </div>
            {academyContent?.match === "false" ? (
                <div css={S.SFileUploadContainer}>
                    <span>학원설립운영등록증</span>
                    <div className="fileBox">
                        <label
                            css={S.SUploadLabel}
                            htmlFor="operationRegistrationFile"
                            onClick={uploadExceptionHandler}
                        >
                            <BsFillFileEarmarkArrowUpFill size={14} /> 첨부하기
                        </label>
                        <p>{operationRegistrationFile}</p>
                    </div>
                    <input
                        type="file"
                        name="operationRegistrationFile"
                        id="operationRegistrationFile"
                        onChange={uploadLabelChange}
                        disabled={uploadeFile.idFile !== 1}
                    />
                    {progress?.operationRegistrationFile > 0 &&
                        progress?.operationRegistrationFile < 100 && (
                            <Line
                                percent={progress?.operationRegistrationFile}
                                strokeWidth={1}
                                strokeColor="#ffe600"
                                trailColor="#D3D3D3"
                                className="progress"
                            />
                        )}
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default FileUpload;
