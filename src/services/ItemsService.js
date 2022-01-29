import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://swapi.dev/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getItems(path){
        return apiClient.get(path)
    },

    getItem(url, id) {
        return apiClient.get(url + id + "/")
    }
}