import axios from 'axios';


const BEST_SELLERS_URL = 'svc/books/v3/lists/best-sellers/history'
const API_KEY = 'api-key=2zXOJLqSPdXlaDCgUaGvU33bIgL0q2mU';
const CATEGORY_URL = 'svc/books/v3/lists/names';
const CURRENT_CATEGORY_URL = 'svc/books/v3/lists/current';
const REVIEWS_URL = 'svc/books/v3/reviews';

const method_get = {
    method: 'GET'
}
// https://api.nytimes.com/${CURRENT_CATEGORY_URL}/${name}.json?$api-key=2zXOJLqSPdXlaDCgUaGvU33bIgL0q2mU

export function getAllCategory() {
    return axios.get(`https://api.nytimes.com/${CATEGORY_URL}.json?&${API_KEY}`, method_get)
}
export function getCurrentCategory(name) {
    return axios.get(`https://api.nytimes.com/${CURRENT_CATEGORY_URL}/${name}.json?${API_KEY}`, method_get)
}
// getCurrentCategory('ma')
export function getReviews(isbn, title, author) {
    return axios.get(`https://api.nytimes.com/${REVIEWS_URL}.json?isbn=${isbn}&title=${title}&author=${author}&${API_KEY}`, method_get)
}
export function getBestSellers() {
    return axios.get(`https://api.nytimes.com/${BEST_SELLERS_URL }.json?${API_KEY}`, method_get)
}

export function test() {
    // return axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDSZ2YchpYhI4EpFkp1aeqRSiqJWhGZRMo`, method_get)
}
