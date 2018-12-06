<template>
  <div class="truck">
      <p class="truck__makes">{{ truck.makes }}</p>
      <p class="truck__model">{{ truck.model }}</p>
      <p class="truck__id">{{ truck.id }}</p>
      <p class="truck__year">{{ truck.year }}</p>
    <button class="app-button" @click="$emit('updateTruck', truck.id)">update</button>
    <button class="app-button" @click="$emit('deleteTruck', truck.id)">delete</button>
  </div>
</template>

<script>
  export default {
    name: "TruckRow",
    props: ["truck"]
  }
</script>

<style scoped>

</style>
