<template>
    <div class="dashboard">
      <button class="app-button" @click="logOut">log out</button>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "DashBoard",
    methods: {
      logOut () {
        localStorage.removeItem('truckInToken');
        this.$router.replace('/login');
      }
    }
  }
</script>

<style scoped>

</style>
