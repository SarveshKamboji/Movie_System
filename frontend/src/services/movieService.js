import axios from "axios";

const API_URL = "http://localhost:5000/movie";

export function getMovies() {
  return axios.get(API_URL);
}

export function getMovieById(id) {
  return axios.get(`${API_URL}/${id}`);
}

export function addMovie(movie) {
  return axios.post(API_URL, movie);
}

export function updateMovie(id, movie) {
  return axios.put(`${API_URL}/${id}`, movie);
}

// delete by id (for list page)
export function deleteMovieById(id) {
  return axios.delete(`${API_URL}/${id}`);
}

// delete by movie name (for search page)
export function deleteByName(name) {
  return axios.delete(`${API_URL}/byname/${encodeURIComponent(name)}`);
}

// search by movie name (partial / live search)
export function searchByName(name) {
  return axios.get(`${API_URL}/search/${encodeURIComponent(name)}`);
}

// search by release date
export function searchByDate(date) {
  return axios.get(`${API_URL}/date/${date}`);
}
