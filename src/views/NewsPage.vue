<template lang="">
  <div>
    <p v-for="news in fetchedNews" :key="news.id">
      <a :href="news.url">
        {{ news.title }}
      </a>
      <small>{{ news.time_ago }} by {{ news.user }}</small>
    </p>
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
