<template>
  <div @click="closeModal" class="modal">
    <div class="modal__container">
      <div class="modal__body">

        <div class="modal__header">
          <div class="form__icon">ICON</div>
          <p class="form__title">{{ item === "truck" ? "Edit truck" : "Add driver" }}</p>
          <div class="modal__close" @click="closeModal">
            <p>X</p>
          </div>
        </div>

        <div class="modal__info">
          <div class="form">
            <input type="text"><input type="text"><input type="text"><input type="text">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewModal',
    props: ['item'],

    created () {
      this.hideSideBar();
    },

    beforeDestroy () {
      this.restoreSideBar();
    },

    data () {
      return {
        initialPadding: 0
      }
    },

    methods: {
      closeModal ({target, currentTarget}) {
        if (
          target.classList.contains('modal') ||
          currentTarget.classList.contains('modal__close')
        ) this.$emit('closeModal');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: hsla(6,50%,5%,.7);
    display: flex;
    overflow-y: auto;
    z-index: 999;
    padding: 16px 8px;

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

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
    }

    &__close {
      cursor: pointer;
      margin-left: auto;
      margin-bottom: auto;
    }
  }
</style>
