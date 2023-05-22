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
  <AppHeader class="w-100" />

  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>