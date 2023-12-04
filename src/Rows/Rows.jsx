import React, { useState, useEffect, useRef } from "react";
import baseURL from "../Axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ fetchUrl, title, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [showButtons, setShowButtons] = useState(false);
	const [hoveredMovie, setHoveredMovie] = useState(null);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [showTitle, setShowTitle] = useState(true);
	const [showTrailer, setShowTrailer] = useState(false);
	const [errorTrailerMessage, setErrorTrailerMessage] = useState("");
	const [hiddenTitle, setHiddenTitle] = useState(null);


	const img_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await baseURL.get(fetchUrl);
				setMovies(data.results);
			} catch (error) {
				console.log(error);
			}
		}

		fetchData();
	}, [fetchUrl]);

	const rowRef = useRef(null);

	const handleMouseEnter = (movie) => {
		setHoveredMovie(movie);
		setShowButtons(true);
		setHiddenTitle(movie.id); 
		setShowTitle(true);
	};

	const handleMouseLeave = () => {
		setHoveredMovie(null);
		setShowButtons(false);
		setHiddenTitle(null); 
		setShowTitle(true);
	};

	const scrollLeft = () => {
		if (rowRef.current) {
			rowRef.current.scrollLeft -= 200;
		}
	};

	const scrollRight = () => {
		if (rowRef.current) {
			rowRef.current.scrollLeft += 200;
		}
	};

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setShowTrailer(false);
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
					setShowTrailer(true);
					setErrorTrailerMessage("");
				})
				.catch((error) => {
					console.log(error);
					setErrorTrailerMessage(
						"Sorry, there is an error. Could you try again?"
					);
				});
		}
	};

	const handleCloseTrailer = () => {
		setShowTrailer(false);
		setTrailerUrl("");
	};

	return (
		<div
			className="row"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className={isLargeRow && "title-text"}>{title}</h2>

			{showButtons && movies.length > 0 && (
				<button className="row__nav row__nav-left" onClick={scrollLeft}>
					&lt;
				</button>
			)}

			<div className="row__posters" ref={rowRef}>
				{movies.map((movie) => (
					<div
						key={movie.id}
						className="row__poster"
						onMouseEnter={() => handleMouseEnter(movie)}
						onMouseLeave={handleMouseLeave}
					>
						<img
							className={`row__poster ${isLargeRow && "row__posterLarge"}`}
							src={`${img_url}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.title}
						/>

						{showTitle && hiddenTitle !== movie.id && (
							<h4 className="ower-title">{movie.title}</h4>
						)}

						{!isLargeRow && hoveredMovie && hoveredMovie.id === movie.id && (
							<div>
								<div>
									<h6 className="row__title">{movie.title}</h6>
								</div>
								<button
									className="row__trailerButton"
									onClick={() => handleClick(movie)}
								>
									View Trailer
								</button>
							</div>
						)}
					</div>
				))}
			</div>

			{showButtons && movies.length > 0 && (
				<button className="row__nav row__nav-right" onClick={scrollRight}>
					&gt;
				</button>
			)}

			<div style={{ padding: "40px" }}>
				{showTrailer && (
					<div>
						<button className="close-button" onClick={handleCloseTrailer}>
							<i className="fa-solid fa-xmark"></i>
						</button>
						{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
						<h2>{errorTrailerMessage}</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Row;
