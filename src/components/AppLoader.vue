<template>
  <div @click="closeModal" class="loader">
    <div class="loader__container">
      <div class="loader__body">
          IMG
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppLoader',

    created () {
      this.hideSideBar();
    },

    beforeDestroy () {
      this.restoreSideBar();
    },
  }
</script>

<style lang="scss" scoped>
  .loader {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: hsla(15,50%,15%,.5);
    display: flex;
    overflow-y: auto;
    z-index: 999;

    &__container {
      width: 288px;
      margin: auto;
      background-color: #fff;
    }

    &__body {
      position: relative;
      padding: 16px;
      z-index: 1000;
    }
  }
</style>
