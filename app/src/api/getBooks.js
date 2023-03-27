import axios from 'axios';

const method_get = {
  method: 'GET'
}

export function getBooks(page) {
  return axios.get(`http://gutendex.com/books/?page=${page}`, method_get)
}

export function getCurrentBook(id) {
  return axios.get(`http://gutendex.com/books/${id}/`, method_get)
}
export function searchBook(text) {
  return axios.get(`http://gutendex.com/books/?search=${text}`, method_get)
}

export function searchTopic(page,topic) {
  return axios.get(`http://gutendex.com/books/?page=${page}&topic=${topic}`, method_get)

}
export function getBooksLanguage(language) {
  return axios.get(`http://gutendex.com/books/?languages=${language}`, method_get)
}

export function searchByParameters(params) {
  return axios.get(`http://gutendex.com/books/?${params}`, method_get)
}

