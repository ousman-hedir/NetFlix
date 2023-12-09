import React from "react";
import "./overView.css";

const MovieOverview = ({ movie }) => {
	return (
		<div className="movie-overview">
			<h2>Title :{movie.title}</h2>
			<p>{movie.overview}</p>
			<h3>Release Date: {movie.first_air_date}</h3>
			<h3>Vote Average: 👍 {movie.vote_average}</h3>
		</div>
	);
};

export default MovieOverview;
