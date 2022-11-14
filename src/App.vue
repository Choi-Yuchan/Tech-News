<template>
  <v-app>
    <ToolBar />
    <router-view></router-view>
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
