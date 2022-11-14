<template>
  <h1 class="text-h1">Jobs</h1>
  <p v-for="job in fetchedJobs" :key="job.id">
    <a :href="job.url">
      {{ job.title }}
    </a>
    <small>{{ job.time_ago }} by {{ job.user }}</small>
  </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style></style>
