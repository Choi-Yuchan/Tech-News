<template lang="">
  <div>
    <ul class="m-0 p-0">
      <li
        v-for="item in listItems"
        :key="item.id"
        class="d-flex align-center justify-start list-style-none py-1 border-b"
      >
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <div>
          <template v-if="item.domain">
            <a class="title" :href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
          <small class="author">
            {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["fetchedNews"]),
    listItems() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
    },
  },
  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
};
</script>
<style scoped>
.points {
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.title {
  font-weight: 500;
}
.author {
  padding-left: 0.5rem;
}
</style>
