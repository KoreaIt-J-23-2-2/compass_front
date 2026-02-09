import axios from "axios";

export const instance = axios.create({
    // axios 공통 설정
    baseURL: "https://3-34-152-149.sslip.io/api",
});
