import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.112.4.79:3001"
})