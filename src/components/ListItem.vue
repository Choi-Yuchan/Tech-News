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
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    },
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
