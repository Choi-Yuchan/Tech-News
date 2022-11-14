<template>
  <div v-for="ask in askLists" :key="ask.id">
    <a :href="ask.url">
      {{ ask.title }}
    </a>
    <small>{{ ask.time_ago }} by {{ ask.user }}</small>
  </div>
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
