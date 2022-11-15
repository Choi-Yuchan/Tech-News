import { getUserInfo, getItemInfo, fetchList } from "@/api";

export default {
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
  FETCH_LIST({ commit }, pageName) {
    const fetchDataList = async () => {
      try {
        const { data } = await fetchList(pageName);
        commit("SET_LIST", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataList();
  },
};
