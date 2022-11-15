<template>
  <ListItem />
  <!-- <div v-for="ask in askLists" :key="ask.id">
    <router-link :to="ask.url">
      {{ ask.title }}
    </router-link>
    <small>{{ ask.time_ago }} by {{ ask.user }}</small>
  </div> -->
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
};
</script>

<style></style>
