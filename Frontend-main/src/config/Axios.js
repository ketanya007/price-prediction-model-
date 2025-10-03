import axios from "axios";
const instance = axios.create({
  baseURL: "https://realestate-minor-project.glitch.me"
});
export default instance;
