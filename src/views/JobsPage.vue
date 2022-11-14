<template>
  <h1 class="text-h1">Jobs</h1>
  <div v-for="list in jobLists">{{ list.title }}</div>
</template>

<script>
import { getJobsList } from "@/api";
export default {
  data() {
    return {
      jobLists: [],
    };
  },
  created() {
    const fetchJobsList = async () => {
      try {
        const { data } = await getJobsList();
        this.jobLists = data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobsList();
  },
};
</script>

<style></style>
