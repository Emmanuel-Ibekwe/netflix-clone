import { useState, useEffect } from "react";
import axios from "../axios";
import classes from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrlID, setTrailerUrlID] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const playVideoHandler = (movie) => {
    if (trailerUrlID) {
      setTrailerUrlID("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.name ||
          movie?.original_title ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrlID(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes.row}>
      <h2>{title}</h2>

      <div className={classes.posters}>
        {movies.map((movie) => (
          <img
            onClick={() => playVideoHandler(movie)}
            className={isLargeRow && classes["poster-large"]}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
      {trailerUrlID && <YouTube videoId={trailerUrlID} opts={opts} />}
    </div>
  );
};

export default Row;
