import { getUserInfo, getItemInfo, fetchList } from "@/api";

export default {
  //first way
  async FETCH_USER({ commit }, username) {
    try {
      const { data } = await getUserInfo(username);
      commit("SET_USER", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async FETCH_ITEM({ commit }, itemId) {
    try {
      const { data } = await getItemInfo(itemId);
      commit("SET_ITEM", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  // second way
  async FETCH_LIST({ commit }, pageName) {
    const { data } = await fetchList(pageName);
    commit("SET_LIST", data);
    return data;
  },
};
