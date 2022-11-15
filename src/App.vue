<template>
  <v-app>
    <ToolBar />
    <router-view />
    <Spinner :loading="false" />
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
// import bus from "./utils/bus";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
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
