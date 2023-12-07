import  { useEffect, useState } from "react";
import "./Banner.css";
import baseURL from "../Axios";
import requests from "../requests";
// import axios from "axios";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchBanner() {
			try {
				const {data} = await baseURL.get(requests.fetchTrending);
				console.log(data)

				setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
			} catch (error) {
				console.log(error);
			}
		}

		fetchBanner();
	}, []); 

	console.log(movie);

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(movie?.overview, 180)}
				</h1>
			</div>
			<div className="banner__fadeBottom" />
		</header>
	);
}

export default Banner;
