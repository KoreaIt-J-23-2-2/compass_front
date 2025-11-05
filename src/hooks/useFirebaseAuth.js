import { useState, useEffect } from "react";
import { auth } from "../api/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
/**
 * Firebase 인증 상태를 관찰하고 변경 시 콜백을 호출합니다.
 * @param {function} callback - 현재 사용자(user 또는 null)를 전달받는 함수
 * @returns {function} unsubscribe - 리스너 해제 함수
 */

export function useFirebaseAuth() {
    const [firebaseUser, setFirebaseUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(
                    "✅ Firebase 로그인 상태 유지됨:",
                    user.email || user.uid
                );
                setFirebaseUser(user);
            } else {
                console.warn("⚠️ Firebase 인증 세션 없음");
                setFirebaseUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return { firebaseUser, loading };
}
