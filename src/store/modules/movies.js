import axios from "@/plugins/axios";
const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      //tt0111161
      const response = await axios.get("/", {
        params: {
          plot: "full",
          apikey: process.env.VUE_APP_API_KEY,
          i: "tt0111161"
        }
      });
      console.log(response);
    }
  }
};
export default moviesStore;
