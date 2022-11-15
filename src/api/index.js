import axios from "axios";

const config = {
  baseUrl: import.meta.env.VITE_API_URL,
};
// VITE_API_URL = https://api.hnpwa.com/v0/

const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

const getUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

const getItemInfo = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
};
export { getUserInfo, getItemInfo, fetchList };
