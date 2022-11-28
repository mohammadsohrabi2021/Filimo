import axios from "axios";

export const api = axios.create({
  baseURL: "https://imdb-top-100-movies.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "dabeea4bd2msh3ce49274ccab7e2p1cb983jsn36cde7bd0b72",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
});
