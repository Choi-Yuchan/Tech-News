<template lang="">
  <div>
    <h1>News</h1>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>
<script>
import { getNewsList } from "@/api";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    const fetchNewsList = async () => {
      try {
        const { data } = await getNewsList();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewsList();
  },
};
</script>
<style lang=""></style>
