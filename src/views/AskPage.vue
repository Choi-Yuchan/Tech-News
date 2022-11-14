<template>
  <h1 class="text-h1">Ask</h1>
  <div v-for="list in askLists">{{ list.title }}</div>
</template>

<script>
import { getAskList } from "@/api";
export default {
  data() {
    return {
      askLists: [],
    };
  },
  created() {
    const fetchAskList = async () => {
      try {
        const { data } = await getAskList();
        this.askLists = data;
      } catch (error) {
        console.error;
      }
    };
    fetchAskList();
  },
};
</script>

<style></style>
