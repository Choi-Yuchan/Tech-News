<template lang="">
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  padding: 0.5rem;
  background-color: #42b883;
  color: white;
  display: flex;
  align-items: center;
}

.router-link-exact-active {
  color: orange;
}
.header a {
  color: white;
  padding-inline: 0.5rem;
  font-size: 1.25rem;
}
</style>
