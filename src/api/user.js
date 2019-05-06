import axios from "axios";

const url = "/api/user"

export function getUserInfo() {
    alert(url)
    return axios.get(url);
}