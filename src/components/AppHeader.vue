<template>
    <div class="header">
      <div class="header__links">
        <router-link to="/drivers">drivers</router-link>
        <router-link to="/trucks">trucks</router-link>
      </div>
      <button class="app-button" @click="addItem">add new {{ itemToAdd }}</button>
      <button class="app-button" @click="logOut">log out</button>
    </div>
</template>

<script>
  export default {
    name: "AppHeader",
    computed: {
      itemToAdd () {
        return this.$route.name === 'DriversPage' ? 'driver' : 'truck'
      }
    },
    methods: {
      logOut () {
        localStorage.removeItem('truckInToken');
        this.$router.replace('/login');
      },
      addItem () {
        this.$emit('addItem', this.itemToAdd)
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  padding: 48px 0;
}
</style>
