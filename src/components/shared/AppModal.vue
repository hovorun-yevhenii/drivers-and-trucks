<template>
  <transition name="fade">
  <div class="modal">
    <div class="modal__container">
      <div v-if="itemName === 'driver'" class="modal__body">

        <div class="close-btn" @click="$emit('closeModal')"></div>
        <div class="modal__header">
          <p class="modal__title">{{ editMode ? "Edit driver" : "New driver" }}</p>
        </div>

        <div class="modal__info">
          <div class="form">
            <label class="app-label">Name
              <input ref="autoFocus"
                     class="app-input"
                     v-model="newItem.name"
                     v-validate="'required|alpha|min:2|max:15'"
                     data-vv-validate-on="submit|blur"
                     name="name"
                     placeholder="John">
              <span>{{ errors.first('name') }}</span>
            </label>

            <label class="app-label">Surname
              <input class="app-input"
                     v-model="newItem.surname"
                     v-validate="'required|alpha|min:2|max:15'"
                     data-vv-validate-on="submit|blur"
                     name="surname"
                     placeholder="Dow">
              <span>{{ errors.first('surname') }}</span>
            </label>

            <label class="app-label">Year
              <input class="app-input"
                     v-model="newItem.year"
                     v-validate="{ required: true, max_value: 2000, min_value: 1950 }"
                     data-vv-validate-on="submit|blur"
                     name="year"
                     placeholder="1991">
              <span>{{ errors.first('year') }}</span>
            </label>

            <label class="app-label">Phone
              <masked-input mask="\+\1 (111) 111-1111"
                            class="app-input"
                            v-model="newItem.phone"
                            v-validate="{ required: true, regex: /^[\s()+-]*([0-9][\s()+-]*){6,20}$/ }"
                            data-vv-validate-on="submit|blur"
                            name="phone"
                            placeholder="+1 (111) 111-1111">
              </masked-input>
              <span>{{ errors.first('phone') }}</span>
            </label>

            <button class="app-button app-button--prime" @click="validate">submit</button>
          </div>
        </div>

      </div>

      <div v-if="itemName === 'truck'" class="modal__body">

        <div class="modal__header">
          <p class="modal__title">{{ editMode ? "Edit truck" : "New truck" }}</p>
          <div class="close-btn" @click="$emit('closeModal')"></div>
        </div>

        <div class="modal__info">
          <div class="form">
            <label class="app-label">Makes
              <input ref="autoFocus"
                     class="app-input"
                     v-model="newItem.makes"
                     v-validate="'required|min:2|max:15'"
                     data-vv-validate-on="submit|blur"
                     name="makes"
                     placeholder="Freightliner">
              <span>{{ errors.first('makes') }}</span>
            </label>

            <label class="app-label">Model
              <input class="app-input"
                     v-model="newItem.model"
                     v-validate="'required|min:2|max:15'"
                     data-vv-validate-on="submit|blur"
                     name="model"
                     placeholder="Cascadia">
              <span>{{ errors.first('model') }}</span>
            </label>

            <label class="app-label">Number
              <input class="app-input"
                     v-model="newItem.number"
                     v-validate="'required|min:2|max:10'"
                     data-vv-validate-on="submit|blur"
                     name="number"
                     placeholder="AAA-111">
              <span>{{ errors.first('number') }}</span>
            </label>

            <label class="app-label">Year
              <input class="app-input"
                     v-model="newItem.year"
                     v-validate="{ required: true, max_value: 2018, min_value: 1970 }"
                     data-vv-validate-on="submit|blur"
                     name="year"
                     placeholder="2018">
              <span>{{ errors.first('year') }}</span>
            </label>

            <button class="app-button app-button--prime" @click="validate">submit</button>
          </div>
        </div>

      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import {EventBus} from '../../utils/EventBus'
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'AppModal',
    props: ['itemName', 'editObj'],
    components: {
      MaskedInput
    },

    created() {
      this.hideSideBar();
      Object.assign(this.newItem, this.editObj)
    },

    mounted() {
      if (!this.editMode) this.$refs.autoFocus.focus();
    },

    beforeDestroy() {
      this.restoreSideBar();
    },

    data() {
      return {
        initialPadding: 0,
        newItem: {},
        editMode: Object.keys(this.editObj).length
      }
    },

    methods: {
      validate() {
        this.$validator.validateAll().then((result) => {
          if (!result) return;

          if (!this.editMode) {
            this.itemName === 'driver'
              ? EventBus.$emit('createDriver', this.newItem)
              : EventBus.$emit('createTruck', this.newItem);

            return;
          }

          if (JSON.stringify(this.newItem) !== JSON.stringify(this.editObj)) {
            this.itemName === 'driver'
              ? EventBus.$emit('updateDriver', this.newItem)
              : EventBus.$emit('updateTruck', this.newItem);
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
    background-color: hsla(6, 50%, 5%, .7);
    display: flex;
    overflow-y: auto;
    z-index: 999;
    padding: 16px 8px;

    &__container {
      width: 360px;
      margin: auto;
      border-radius: 4px;
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

    .add {
      margin: 0 auto;
    }

    &__title {
      font-size: 24px;
    }
  }
</style>
