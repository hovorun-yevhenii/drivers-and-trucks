<template>
  <div>
    <div v-for="truck in trucks" :key="truck.id">
      <p>{{ truck.makes }} {{ truck.model }}</p>
      <p>{{ truck.id }}</p>
      <p>{{ truck.year }}</p>
      <hr/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrucksPage",
    data() {
      return {
        trucks: {}
      }
    },
    created() {
      fetch('db.json')
        .then(resp => resp.json())
        .then(resp => {
          this.trucks = resp.trucks
        })
    }
  }
</script>

<style scoped>

</style>
