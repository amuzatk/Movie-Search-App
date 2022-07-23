import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  // console.log(movies.Search);
  // let renderMovies = "";

  // renderMovies =
  //   movies.Response === "True" ? (
  //     movies.Search.map((movie, index) => {
  //       <MovieCard key={index} data={movie} />;
  //     })
  //   ) : (
  //     <div className="movies-error">
  //       <h3>{movies.Error} </h3>
  //     </div>
  //   );
  return (
    <>
      {/* {!(movies.Search && movies.Search.length > 0) ? (
        <div className="movies-error">
          <h3>{movies.Error} </h3>
        </div>
      ) : (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      )} */}

      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            <Slider {...Settings}>
              {!(movies.Search && movies.Search.length > 0) ? (
                <div className="movies-error">
                  <h3>{movies.Error} </h3>
                </div>
              ) : (
                movies.Search.map((movie, index) => (
                  <MovieCard key={index} data={movie} />
                ))
              )}
            </Slider>
          </div>
        </div>

        <div className="shows-list">
          <h2>Shows</h2>
          <div className="movie-container">
            <Slider {...Settings}>
              {!(shows.Search && shows.Search.length > 0) ? (
                <div className="movies-error">
                  <h3>{shows.Error} </h3>
                </div>
              ) : (
                shows.Search.map((movie, index) => (
                  <MovieCard key={index} data={movie} />
                ))
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListing;
