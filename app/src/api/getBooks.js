import axios from 'axios';


// const BEST_SELLERS_URL = 'svc/books/v3/lists/best-sellers/history'
// const API_KEY = 'api-key=2zXOJLqSPdXlaDCgUaGvU33bIgL0q2mU';
// const CATEGORY_URL = 'svc/books/v3/lists/names';
// const CURRENT_CATEGORY_URL = 'svc/books/v3/lists/current';
// const REVIEWS_URL = 'svc/books/v3/reviews';

const method_get = {
    method: 'GET'
}
// https://api.nytimes.com/${CURRENT_CATEGORY_URL}/${name}.json?$api-key=2zXOJLqSPdXlaDCgUaGvU33bIgL0q2mU

export function getBooks() {
    return axios.get(`https://api.itbook.store/1.0/new`, method_get)
}

export function getCurrentBook(isbn) {
    return axios.get(`http://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`, method_get)
}
