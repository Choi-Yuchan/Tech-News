<template lang="">
  <p>Name: {{ userInfo.id }}</p>
  <p>Karma: {{ userInfo.karma }}</p>
  <p>Created: {{ userInfo.created }}</p>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
<style lang=""></style>
