<template>
    <div class="header">
      <div class="header__links">
        <router-link class="header__link" to="/drivers">Drivers</router-link>
        <router-link class="header__link" to="/trucks">Trucks</router-link>
      </div>
      <button class="app-button add" @click="addItem"> + new {{ itemToAdd }}</button>
      <div class="logout-wrap" @click="logOut">
        <span>Log Out</span>
        <button class="app-button logout"></button>
      </div>
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
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 24px;

  .app-button.add {
    margin-top: 7px;
  }

  .logout-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 124px;
    cursor: pointer;
    span {
      margin-right: 16px;
      font-size: 14px;
      color: #999;
      transition: .2s;
    }

    &:hover {
      .logout {
        background-color: #fa7266;
      }
      span {
        color: #555;
      }
    }
  }

  &__links {
    display: flex;
    align-items: center;
    height: 50px;
  }
  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 2px solid;
    text-decoration: none;
    color: #aaa;
    &:hover {
      color: #555;
    }
    & + & {
      margin-left: 16px;
    }
    &.router-link-active {
      color: #fa7266;
    }
  }
}
</style>
