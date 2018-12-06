<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drivers: {},
      trucks: {}
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
@import "./css/main";
</style>
