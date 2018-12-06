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
      this.$emit('toggleLoader', true);

      this.apiRequest({url: 'bwrwu'}).then(
        response => {
          this.trucks = response.data;
          this.$emit('toggleLoader', false);
        },
        () => {
          console.log('connection error');
          this.$emit('toggleLoader', false);
        })
    }
  }
</script>

<style scoped>

</style>
