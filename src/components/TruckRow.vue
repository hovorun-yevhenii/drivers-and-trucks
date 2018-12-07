<template>
  <div class="truck">
      <p class="truck__makes">{{ truck.makes }}</p>
      <p class="truck__model">{{ truck.model }}</p>
      <p class="truck__id">{{ truck.id }}</p>
      <p class="truck__year">{{ truck.year }}</p>
      <button class="app-button action update" @click="$emit('updateTruck', truck.id)" title="update truck"></button>
      <button class="app-button action delete" @click="$emit('deleteTruck', truck.id)" title="delete truck"></button>
  </div>
</template>

<script>
  export default {
    name: "TruckRow",
    props: ["truck"]
  }
</script>

<style lang="scss" scoped>
.truck {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  & + & {
      border-top: 1px solid #777;
  }
}
</style>
