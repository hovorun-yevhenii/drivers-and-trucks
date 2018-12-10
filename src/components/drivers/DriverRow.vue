<template>
  <div class="driver">
    <img :src="'https://randomuser.me/api/portraits/men/' + driver.id + '.jpg'" alt="" class="driver__avatar">
    <p class="driver__name">{{ driver.name }}</p>
    <p class="driver__surname">{{ driver.surname }}</p>
    <p class="driver__year">{{ driver.year }}</p>
    <p class="driver__phone">{{ driver.phone }}</p>
    <button class="app-button action update" @click="openDriverModal"></button>
    <button class="app-button action delete" @click="deleteDriver"></button>
  </div>
</template>

<script>
  import { EventBus } from '../../utils/EventBus'

  export default {
    name: "DriverRow",
    props: ['driver'],
    methods: {
      deleteDriver () {
        EventBus.$emit('openConfirm', { open: true, name: 'driver', id: this.driver.id })
      },
      openDriverModal () {
        EventBus.$emit('openDriverModal', this.driver)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .driver {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    & + & {
      border-top: 1px solid #ddd;
    }

    &__avatar {
      width: 64px;
      border: 1px solid #eee;
      border-radius: 50%;
    }
    &__name {
      width: 160px;
    }
    &__surname {
      width: 160px;
    }
    &__year {
      width: 70px;
    }
    &__phone {
      width: 170px;
    }
  }
</style>
