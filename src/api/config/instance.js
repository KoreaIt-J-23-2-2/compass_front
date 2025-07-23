import axios from "axios";

export const instance = axios.create({  // axios 공통 설정
    baseURL: "https://compassback-production.up.railway.app/api"
})