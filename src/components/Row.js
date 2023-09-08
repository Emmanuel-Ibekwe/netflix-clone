import { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.posters}>
        {movies.map((movie) => (
          <img
            className={isLargeRow && classes["poster-large"]}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>

      {/*  */}
    </div>
  );
};

export default Row;
