import axios from "axios";

/** base url to make requests to the movie database*/

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// https://api.themoviesdb.org/3/discover/tv?api_key=50832de084e907f7283dcc6fc83e3fec&with_networks=213
