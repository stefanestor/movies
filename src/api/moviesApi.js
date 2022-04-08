import axios from "axios";

export function getMovie(movieId) {
    return axios.get(`${process.env.REACT_APP_MOVIE_API}&i=${movieId}`)
}

export function getMoviesByPageAndName(page, name) {
    return axios.get(`${process.env.REACT_APP_MOVIE_API}&s=${name}&page=${page}`)
}