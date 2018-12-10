<template>
    <transition name="list">
      <div class="note" v-show="noteIsVisible">
        <div class="note__close" @click="hideNote">X</div>
        <div class="note__message">{{ message }}</div>
      </div>
    </transition>
</template>

<script>
  import { EventBus} from "../../utils/EventBus";

  export default {
    name: "AppNote",
    data () {
      return {
        message: '',
        noteIsVisible: false,
        timer: null
      }
    },
    created () {
      EventBus.$on('showNote', opts => this.showNote(opts));
    },
    beforeDestroy () {
      EventBus.$off('showNote');
    },
    methods: {
      hideNote () {
        this.noteIsVisible = false;
      },
      showNote (opts) {
        this.noteIsVisible = false;
        this.timer = null;

        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.noteIsVisible = false
          }, 3000);
          this.message = opts.message;
          this.noteIsVisible = true;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.note {
  position: fixed;
  top: 16px;
  right: -8px;
  display: flex;
  width: 220px;
  padding: 16px;
  border-radius: 4px;
  background-color: #eee;
  box-shadow: 0 2px 5px rgba(20,20,20,.5);

  &__close {
    margin-right: 16px;
    font-family: sans-serif;
    cursor: pointer;
  }
}
</style>
