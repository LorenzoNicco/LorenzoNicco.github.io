<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
button {
  font-weight: bold;
}
</style>