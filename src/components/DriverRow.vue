<template>
  <div class="driver">
    <img :src="'https://randomuser.me/api/portraits/men/' + driver.id + '.jpg'" alt="" class="driver__avatar">
    <p class="driver__name">{{ driver.name }}</p>
    <p class="driver__surname">{{ driver.surname }}</p>
    <p class="driver__year">{{ driver.year }}</p>
    <p class="driver__phone">{{ driver.phone }}</p>
    <button class="app-button" @click="$emit('updateDriver', driver.id)">update</button>
    <button class="app-button" @click="$emit('deleteDriver', driver.id)">delete</button>
  </div>
</template>

<script>
  export default {
    name: "DriverRow",
    props: ['driver']
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
      height: 64px;
      border-radius: 50%;
    }
  }
</style>
