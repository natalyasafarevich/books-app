import axios from 'axios';

const method_get = {
    method: 'GET'
}
// export function getBofoks() {
//     // return axios.get(`https://api.itbook.store/1.0/new`, method_get)
//     return axios.get(`localhost:8000/api/v1/trailers/`, method_get)
// }
export function getBooks() {
    // return axios.get(`https://api.itbook.store/1.0/new`, method_get)
    return axios.get(`http://gutendex.com/books/`, method_get)
}

export function getCurrentBook(id) {
    return axios.get(`http://gutendex.com/books/?ids=${id}`, method_get)
}
export function searchBook(text) {
    return axios.get(`http://gutendex.com/books/?search=${text}`, method_get)
    
}
export function getBookNew() {
    return axios.get(`http://gutendex.com/books/`, method_get)
}
