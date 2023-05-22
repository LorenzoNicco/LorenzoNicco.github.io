<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss" scoped>
button {
  font-weight: bold;
}
</style>