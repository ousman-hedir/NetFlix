import axios from "axios";

const baseURL = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default baseURL;
// export const baseURL1 = "https://api.themoviedb.org/3";
