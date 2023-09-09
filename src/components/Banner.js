import React, { useEffect, useState } from "react";
import axios from "../axios";

import classes from "./Banner.module.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      const data = response.data.results;
      const rndMovie = data[Math.floor(Math.random() * data.length - 1)];
      setMovie(rndMovie);
      console.log(rndMovie);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className={classes.contents}>
        <h1 className={classes.title}>
          {movie?.title ||
            movie?.name ||
            movie?.original_title ||
            movie?.original_name}
        </h1>
        <div className={classes["button-section"]}>
          <button className={classes.button}>Play</button>
          <button className={classes.button}>My List</button>
        </div>

        <p className={classes.description}>{truncate(movie?.overview, 150)}</p>
      </div>

      <div className={classes["fade-bottom"]}></div>
    </header>
  );
}

export default Banner;
