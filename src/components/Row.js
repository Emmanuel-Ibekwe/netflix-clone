import { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);

      console.log(response.data.results);

      //   return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.posters}>
        {movies.map((movie) => (
          <img
            src={`${base_url}${movie.poster_path}`}
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