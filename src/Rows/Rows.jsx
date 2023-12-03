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
	};

	const handleMouseLeave = () => {
		setHoveredMovie(null);
		setShowButtons(false);
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

	// trailer viewer
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
	const handleClick = (movies) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movies?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<div
			className="row"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2 className="title-text">{title}</h2>
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
						{!isLargeRow && hoveredMovie && hoveredMovie.id === movie.id && (
							<div>
								<React.Fragment>
									<h6 className="row__title">{movie.title}</h6>
								</React.Fragment>
								<button
									className="row__trailerButton"
									onClick={() => handleClick(movies)}
								>
									View Trailer{" "}
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
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
};

export default Row;
