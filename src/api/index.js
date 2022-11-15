import axios from "axios";

const config = {
  baseUrl: import.meta.env.VITE_API_URL,
};
// VITE_API_URL = https://api.hnpwa.com/v0/

const getNewsList = () => {
  return axios.get(`${config.baseUrl}news/1.json`);
};

const getJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
};

const getAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
};

const getUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

const getItemInfo = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
};
export { getNewsList, getJobsList, getAskList, getUserInfo, getItemInfo };
