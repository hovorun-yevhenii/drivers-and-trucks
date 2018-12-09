<template>
  <div @click="closeModal" class="modal">
    <div class="modal__container">
      <div v-if="itemName === 'driver'" class="modal__body">

        <div class="modal__header">
          <p class="form__title">{{ editMode ? "Edit driver" : "New driver" }}</p>
          <div class="modal__close" @click="closeModal">
            <p>X</p>
          </div>
        </div>

        <div class="modal__info">
          <div class="form">
            <label>Name
              <input v-model="newItem.name" type="text" v-validate="'required'" name="name" autofocus>
              <span>{{ errors.first('name') }}</span>
            </label>

            <label>Surname
              <input v-model="newItem.surname" type="text" v-validate="'required'" name="surname">
              <span>{{ errors.first('surname') }}</span>
            </label>

            <label>Year
              <input v-model="newItem.year" type="text" v-validate="'required'" name="year">
              <span>{{ errors.first('year') }}</span>
            </label>

            <label>Phone
              <input v-model="newItem.phone" type="text" v-validate="'required'" name="phone">
              <span>{{ errors.first('phone') }}</span>
            </label>

            <button @click="validate">submit</button>
          </div>
        </div>

      </div>

      <div v-if="itemName === 'truck'" class="modal__body">

        <div class="modal__header">
          <p class="form__title">{{ editMode ? "Edit truck" : "New truck" }}</p>
          <div class="modal__close" @click="closeModal">
            <p>X</p>
          </div>
        </div>

        <div class="modal__info">
          <div class="form">
            <label>Makes
              <input v-model="newItem.makes" type="text" v-validate="'required'" name="makes" autofocus>
              <span>{{ errors.first('makes') }}</span>
            </label>

            <label>Model
              <input v-model="newItem.model" type="text" v-validate="'required'" name="model">
              <span>{{ errors.first('model') }}</span>
            </label>

            <label>Number
              <input v-model="newItem.number" type="text" v-validate="'required'" name="number">
              <span>{{ errors.first('number') }}</span>
            </label>

            <label>Year
              <input v-model="newItem.year" type="text" v-validate="'required'" name="year">
              <span>{{ errors.first('year') }}</span>
            </label>

            <button @click="validate">submit</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from '../EventBus'

  export default {
    name: 'AppModal',
    props: ['itemName', 'editObj'],

    created () {
      this.hideSideBar();
      Object.assign(this.newItem, this.editObj)
    },

    beforeDestroy () {
      this.restoreSideBar();
    },

    data () {
      return {
        initialPadding: 0,
        newItem: {},
        editMode: Object.keys(this.editObj).length
      }
    },

    methods: {
      closeModal ({target, currentTarget}) {
        if (
          target.classList.contains('modal') ||
          currentTarget.classList.contains('modal__close')
        ) this.$emit('closeModal');
      },
      validate () {
        this.$validator.validateAll().then((result) => {
          if(!result) return;

          if (this.itemName === 'driver') {
            this.editMode ? EventBus.$emit('updateDriver', this.newItem) : EventBus.$emit('createDriver', this.newItem);
          } else {
            this.editMode ? EventBus.$emit('updateTruck', this.newItem) : EventBus.$emit('createTruck', this.newItem);
          }

          this.$emit('closeModal');
        })
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

    label {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 16px;
      padding-bottom: 16px;

      input {
        margin-top: 8px;
      }

      span {
        position: absolute;
        bottom: 0;
        font-size: 12px;
      }
    }

    button {
      display: block;
      margin: 24px auto 8px auto;
    }
  }
</style>
