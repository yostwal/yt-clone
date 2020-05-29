import Axios from "axios";

const API_KEY = "AIzaSyCAYdRbJbEMjf2d08_B-3e6GCqzeqmUunU";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
    type: "video",
  },
});
