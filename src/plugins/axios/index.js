import axios from "axios";
console.log(process.env.VUE_APP_API_KEY);
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
  // params: {
  //   apikey: process.env.VUE_APP_API_KEY,
  //   plot: "full"
  // }
});
export default instance;
