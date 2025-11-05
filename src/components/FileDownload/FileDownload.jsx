import React from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BsDownload } from "react-icons/bs";
import { getDownloadURL, ref } from "firebase/storage";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { storage } from "../../api/firebase/firebase";

// MIME 타입에 따른 확장자 매핑 함수
const getExtensionFromMime = (mimeType) => {
    if (!mimeType) return "dat"; // MIME 타입이 없는 경우 기본값
    if (mimeType.includes("image/jpeg")) return "jpg";
    if (mimeType.includes("image/png")) return "png";
    if (mimeType.includes("image/gif")) return "gif";
    if (mimeType.includes("application/pdf")) return "pdf";
    if (mimeType.includes("application/msword")) return "doc";
    if (
        mimeType.includes(
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        )
    )
        return "docx";
    // 필요하다면 다른 문서 형식 (xls, ppt 등) 추가 가능
    return "dat"; // 매핑되지 않은 경우
};

function FileDownload({ selectedAcademy }) {
    const { firebaseUser, loading } = useFirebaseAuth();

    const handleFileDownload = async (filePath, filename) => {
        try {
            if (!firebaseUser) {
                alert(
                    "Firebase 인증 세션이 만료되었습니다. 다시 로그인해주세요."
                );
                return;
            }

            if (!filePath) {
                alert("파일 경로가 존재하지 않습니다.");
                return;
            }

            // 1. Firebase Storage에서 다운로드 URL 가져오기
            const fileRef = ref(storage, filePath);
            const downloadURL = await getDownloadURL(fileRef);

            // 2. Blob을 만들어서 URL.createObjectURL로 다운로드 링크를 생성 (핵심)
            const response = await fetch(downloadURL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            // Blob을 가리키는 임시 URL 생성 (Same-Origin으로 간주되어 download 속성 작동)
            const blobUrl = URL.createObjectURL(blob);
            console.log("Blob MIME Type:", blob.type);
            console.log("Blob URL:", blobUrl);

            // 3. 💡 파일의 Content-Type에서 정확한 확장자 추출
            const fileExtension = getExtensionFromMime(blob.type);

            // 4. 🎯 최종 다운로드 파일명 조합
            // filename: "사업자등록증"
            // selectedAcademy.acaAsnum: "12345"
            // fileExtension: "pdf" 또는 "jpg"
            const finalDownloadName = `${filename}_${selectedAcademy.acaAsnum}.${fileExtension}`;
            // 5. a 태그를 생성하여 다운로드

            const link = document.createElement("a");
            link.href = blobUrl; // 다운로드 URL 대신 Blob URL 사용
            link.download = finalDownloadName; // 최종 파일명 강제 적용

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 6. Blob URL 해제
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };

    return (
        <>
            <div css={S.SFileDownloadContainer}>
                <span>사업자등록증 또는 사업자등록등명원 (택 1)</span>
                <div
                    css={S.SDownloadBox}
                    onClick={() =>
                        handleFileDownload(
                            selectedAcademy.businessRegistrationFile,
                            "사업자등록증"
                        )
                    }
                >
                    <BsDownload size={14} /> 다운로드
                </div>
            </div>
            <div css={S.SFileDownloadContainer}>
                <span>대표자 신분증</span>
                <div
                    css={S.SDownloadBox}
                    onClick={() =>
                        handleFileDownload(
                            selectedAcademy.idFile,
                            "대표자 신분증"
                        )
                    }
                >
                    <BsDownload size={14} /> 다운로드
                </div>
            </div>
            {selectedAcademy.match === "false" ? (
                <div css={S.SFileDownloadContainer}>
                    <span>학원설립운영등록증</span>
                    <div
                        css={S.SDownloadBox}
                        onClick={() =>
                            handleFileDownload(
                                selectedAcademy.operationRegistrationFile,
                                "학원설립운영등록증"
                            )
                        }
                    >
                        <BsDownload size={14} /> 다운로드
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default FileDownload;
