import { h } from "vue";
import ListView from "@/views/ListView.vue";

export default function createListView(name) {
  return {
    name,
    created() {
      this.$store.dispatch("FETCH_LIST", this.$route.name);
    },
    render() {
      return h(ListView);
    },
  };
}
