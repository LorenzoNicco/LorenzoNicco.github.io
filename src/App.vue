<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />

  <router-view></router-view>

  <AppFooter />
</template>

<style lang="scss" scoped>

</style>