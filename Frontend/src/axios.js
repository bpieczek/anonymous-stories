import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-anonymous-stories.onrender.com/story",
});

export default instance;
