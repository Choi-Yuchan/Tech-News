<template lang="">
  <div>
    <section>
      <div class="description">
        <h3>{{ itemInfo.title }}</h3>
        <div>
          {{ "Posted " + itemInfo.time_ago }} by
          <router-link :to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
        </div>
      </div>
    </section>
    <section>
      <div v-html="itemInfo.content" />
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["itemInfo"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
    console.log(this.$store.state.item);
  },
};
</script>
<style scoped>
section {
  padding: 0.5rem;
}
.description {
  display: flex;
  flex-direction: column;
}
</style>
