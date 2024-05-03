import axios from "axios";

export const fetchApi = axios.create( {
    baseURL: "https://moons-test-backend.onrender.com/api/v1",
} );

// export const fetchApi = axios.create({
//     baseURL: "http://127.0.0.1:3000/api/v1",
// });