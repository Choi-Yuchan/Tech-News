<template>
  <v-app>
    <ToolBar />
    <router-view v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
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
.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
