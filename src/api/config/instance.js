import axios from "axios";

export const instance = axios.create({
    // axios 공통 설정
    baseURL: "https://3-34-44-250.sslip.io/api",
});
