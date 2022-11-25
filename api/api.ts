import axios from "axios";

export const api = axios.create({
    baseURL:'https://imdb-top-100-movies.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '276c89c394msh21f377e488a3ca5p17c6a0jsn1a59d5b0c9cc',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
});
