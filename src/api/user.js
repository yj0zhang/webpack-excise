import axios from "axios";

const url = "/api/employer/user"

export function getUserInfo() {
    return axios.get(url);
}