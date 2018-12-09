<template>
  <div class="driver">
    <img :src="'https://randomuser.me/api/portraits/men/' + driver.id + '.jpg'" alt="" class="driver__avatar">
    <p class="driver__name">{{ driver.name }}</p>
    <p class="driver__surname">{{ driver.surname }}</p>
    <p class="driver__year">{{ driver.year }}</p>
    <p class="driver__phone">{{ driver.phone }}</p>
    <button class="app-button action update" @click="openDriverModal" title="update driver"></button>
    <button class="app-button action delete" @click="deleteDriver" title="delete driver"></button>
  </div>
</template>

<script>
  import { EventBus } from '../../utils/EventBus'

  export default {
    name: "DriverRow",
    props: ['driver'],
    methods: {
      deleteDriver () {
        EventBus.$emit('deleteDriver', this.driver.id)
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
      border-top: 1px solid #777;
    }

    &__avatar {
      width: 64px;
      border-radius: 50%;
    }
    &__name {
      flex-basis: 170px;
    }
    &__surname {
      flex-basis: 170px;
    }
    &__year {
      flex-basis: 50px;
    }
    &__phone {
      width: 170px;
    }
    .action {
      flex-basis: 48px;
    }
  }
</style>
