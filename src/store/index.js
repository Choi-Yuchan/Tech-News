import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {
    userInfo(state) {
      return state.user;
    },
    itemInfo(state) {
      return state.item;
    },
  },
  actions,
  mutations,
});
