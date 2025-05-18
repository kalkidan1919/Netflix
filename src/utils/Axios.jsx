import axios from "axios"; // ✅ correct

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  // You can also add headers or API key here if needed
});

export default instance;
