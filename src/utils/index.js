import axios from "axios";

export const makeRequest = (url) => {
    try {
      return axios.get(url);
    } catch (e) {
      console.log("Error", e);
    }
};
