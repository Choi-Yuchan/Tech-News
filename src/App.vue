<template>
  <v-app>
    <ToolBar />
    <router-view />
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
export default {
  methods: {
    fetchData() {
      console.log("hello");
    },
  },
  components: {
    ToolBar,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
a:hover {
  color: #318a62;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
