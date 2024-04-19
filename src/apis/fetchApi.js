import axios from "axios";

export const fetchApi = axios.create({
    baseURL: "https://moons-test-backend.onrender.com/",
});