import { getNewsList, getJobsList, getAskList } from "@/api";

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
};
