<template>
  <h1 class="text-h1">Ask</h1>
  <div v-for="ask in askLists">{{ ask.title }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      askLists: "fetchedAsk",
    }),
    // ...mapState({
    //   askLists: (state) => state.ask,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
