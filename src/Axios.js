import axios from "axios";

const baseURL = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default baseURL;
// export const baseURL1 = "https://api.themoviedb.org/3";

// full path is https://api.themoviedb.org/3/discover/tv?api_key=204cfa3db6d5e66b13cb586ce49f685a&with_networks=213