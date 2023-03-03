import axios from 'axios';

const method_get = {
  method: 'GET'
}

export function getBooks() {
  return axios.get(`http://gutendex.com/books/`, method_get)
}

export function getCurrentBook(id) {
  return axios.get(`http://gutendex.com/books/?ids=${id}`, method_get)
}
export function searchBook(text) {
  return axios.get(`http://gutendex.com/books/?search=${text}`, method_get)
}

export function searchTopic(topic) {
  return axios.get(`http://gutendex.com/books/?topic=${topic}`, method_get)

}
export function getBooksLanguage(language) {
  return axios.get(`http://gutendex.com/books/?languages=${language}`, method_get)
}
