import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://anonymous-stories-jzw9.onrender.com/story"
      : "http://localhost:9090/story",
});

export default instance;
