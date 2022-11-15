<template>
  <!-- store에 값이 할당 되었으나 getters로 바로 불러오지 못하여 바로 화면에 못 띄우는 현상 있음. 데이터 캐싱 필요함 -->
  <ListItem />
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
