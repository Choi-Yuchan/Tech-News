import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedJobs(state) {
      return state.ask;
    },
  },
  actions,
  mutations,
});
