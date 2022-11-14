<template lang="">
  <div>
    <h1>News</h1>
    <div v-for="news in fetchedNews">{{ news.title }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>
<style lang=""></style>
