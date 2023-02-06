import axios from 'axios';

const method_get = {
    method: 'GET'
}

export function getBooks() {
    return axios.get(`https://api.itbook.store/1.0/new`, method_get)
}

export function getCurrentBook(isbn) {
    return axios.get(`https://api.itbook.store/1.0/books/${isbn}`, method_get)
}
export function searchBook(text) {
    return axios.get(`https://api.itbook.store/1.0/search/${text}`, method_get)
}
