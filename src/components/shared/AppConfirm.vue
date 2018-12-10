<template>
  <transition name="fade">
    <div class="confirm">
      <div class="confirm__container">
        <div class="close-btn" @click="cancel"></div>
        <div class="confirm__message">Delete this {{itemToDel.name}}?</div>
        <div class="confirm__buttons">
          <button class="app-button add cancel" @click="cancel">cancel</button>
          <button class="app-button add" @click="confirm">delete</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { EventBus} from "../../utils/EventBus";

  export default {
    name: "AppConfirm",
    props: ['itemToDel'],
    created () {
      this.hideSideBar();
    },
    beforeDestroy () {
      this.restoreSideBar();
    },
    methods: {
      confirm () {
        const action = this.itemToDel.name === 'driver' ? 'deleteDriver' : 'deleteTruck';

        EventBus.$emit(action, this.itemToDel.id);

        this.cancel();
      },
      cancel () {
        EventBus.$emit('openConfirm', { open: false })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .confirm {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: hsla(6,50%,5%,.7);
    display: flex;
    z-index: 999;
    &__container {
      position: relative;
      width: 288px;
      margin: auto;
      padding: 24px;
      border-radius: 4px;
      background-color: #fff;
    }
    &__message {
      font-size: 24px;
    }
    &__buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 24px;
      .app-button.cancel {
        background-color: #66abfa;
      }
    }
  }
</style>
