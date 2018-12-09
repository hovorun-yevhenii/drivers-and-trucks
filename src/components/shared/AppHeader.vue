<template>
    <div class="header">
      <div class="header__links">
        <router-link class="header__link" to="/drivers">drivers</router-link>
        <router-link class="header__link" to="/trucks">trucks</router-link>
      </div>
      <button class="app-button add" @click="addItem">new {{ itemToAdd }}</button>
      <button class="app-button action logout" @click="logOut" title="log out"></button>
    </div>
</template>

<script>
  import { EventBus } from '../../utils/EventBus'

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
        EventBus.$emit('openNewModal', this.itemToAdd);
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 8px 0 24px;
  &__links {
    display: flex;
    align-items: center;
    height: 50px;
  }
  &__link {
    text-transform: uppercase;
    color: #232323;
    & + & {
      margin-left: 16px;
    }
    &.router-link-active {
      color: #fa7266;
    }
  }
}
</style>
