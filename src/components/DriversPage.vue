<template>
  <div>
    <div v-for="driver in drivers" :key="driver.id">
      <img :src="'https://randomuser.me/api/portraits/men/' + driver.id + '.jpg'" alt="" width="100px">
      <p>{{ driver.name }} {{ driver.surname }}</p>
      <p>{{ driver.year }}</p>
      <p>{{ driver.phone }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
  export default {
    name: "DriversPage",
    data () {
      return {
        drivers: {}
      }
    },
    created() {
      fetch('db.json')
        .then(resp => resp.json())
        .then(resp => {
          this.drivers = resp.drivers
        })
    }
  }
</script>

<style scoped>

</style>
