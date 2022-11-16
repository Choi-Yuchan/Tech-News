import axios from "axios";

const config = {
  baseUrl: import.meta.env.VITE_API_URL,
};
// VITE_API_URL = https://api.hnpwa.com/v0/

//first
const getUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
};

const getItemInfo = (itemId) => {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
};

//second
const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export { getUserInfo, getItemInfo, fetchList };
