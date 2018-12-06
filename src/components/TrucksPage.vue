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
      this.apiRequest({url: 'bwrwu'}).then(
        response => {
          this.trucks = response.data
        },
        () => {
          console.log('connection error')
        })
    }
  }
</script>

<style scoped>

</style>
