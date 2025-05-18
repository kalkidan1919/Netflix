import React, { useState, useEffect } from "react";
import Axios from "../../utils/Axios";

import requests from "../../utils/Requests";
import '../../components/Banner/Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(requests.fetchNetflixOriginals); // ✅ FIXED: actual API call
        const results = response.data.results;
        const filtered = results.filter((movie) => movie.backdrop_path);
        const randomMovie =
          filtered[Math.floor(Math.random() * filtered.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: movie?.backdrop_path
            ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
            : "url('/fallback.jpg')", // fallback image path (you can import or place in public/)

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button play">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </>
  );
};

export default Banner;
