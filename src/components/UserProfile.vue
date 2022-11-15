<template lang="">
  <div>
    <section>
      <div class="user-container">
        <div class="profile-image"></div>
        <div class="user-description">
          <div>{{ userInfo.id }}</div>
          <div class="time">
            {{ userInfo.created }}
          </div>
        </div>
        <div>
          {{ userInfo.karma }}
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>
<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.profile-image {
  border-radius: 8px;
  background-color: #7f7f7f;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}
.user-description {
  padding-inline: 0.5rem;
}
.time {
  font-size: 0.7rem;
}
</style>
