import "../App.css";

import React from "react";
import Row from "../Rows/Rows";

import requests from "../requests";


const Main = () => {
	return (
		<div className="main-body">
			<h1>Movies</h1>
			<h6>
				Movies move us like nothing else can, whether they’re scary, funny,{" "}
				<br />
				dramatic, romantic or anywhere in-between. So many titles, so much to{" "}
				<br />
				experience.
			</h6>

			<Row
				title="Netflix Orginals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			

			{/* <Row title="Amharic Movies" fetchUrl={requests.amharic} isLargeRow /> */}

			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />

			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
};

export default Main;
