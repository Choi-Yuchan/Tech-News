import {
  getNewsList,
  getJobsList,
  getAskList,
  getUserInfo,
  getItemInfo,
} from "@/api";

export default {
  FETCH_NEWS(context) {
    const fetchNewsList = async () => {
      try {
        const { data } = await getNewsList();
        context.commit("SET_NEWS", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsList();
  },
  FETCH_JOBS(context) {
    const fetchJobsList = async () => {
      try {
        const { data } = await getJobsList();
        context.commit("SET_JOBS", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobsList();
  },
  FETCH_ASK(context) {
    const fetchAskList = async () => {
      try {
        const { data } = await getAskList();
        context.commit("SET_ASK", data);
      } catch (error) {
        console.error;
      }
    };
    fetchAskList();
  },
  FETCH_USER({ commit }, username) {
    const fetchUserInfo = async () => {
      try {
        const { data } = await getUserInfo(username);
        commit("SET_USER", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  },
  FETCH_ITEM({ commit }, itemId) {
    const fetchItemInfo = async () => {
      try {
        const { data } = await getItemInfo(itemId);
        commit("SET_ITEM", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItemInfo();
  },
};
