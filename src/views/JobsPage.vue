<template>
  <h1 class="text-h1">Jobs</h1>
  <!-- store에 값이 할당 되었으나 getters로 바로 불러오지 못하여 바로 화면에 못 띄우는 현상 있음. 데이터 캐싱 필요함 -->
  <p v-for="job in this.$store.state.jobs" :key="job.id">
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
