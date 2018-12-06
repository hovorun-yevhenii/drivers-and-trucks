<template>
  <div class="main">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./AppHeader"

  export default {
    name: "HomePage",
    components: {
      AppHeader
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #eee;
}
</style>
