import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-808fd.firebaseio.com/",
});

export default instance;
