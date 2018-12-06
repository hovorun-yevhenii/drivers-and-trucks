<template>
  <div class="trucks">
    <div class="trucks__sort">

    </div>
    <div class="trucks__table">
      <truck-row v-for="truck in trucks"
                  :key="truck.id"
                  :truck="truck"
                  @updateTruck="updateTruck"
                  @deleteTruck="deleteTruck">
      </truck-row>
    </div>
  </div>
</template>

<script>
  import TruckRow from "./TruckRow"

  export default {
    name: "TrucksPage",
    components: {
      TruckRow
    },
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
    },
    methods: {
      deleteTruck (id) {
        console.log('gonna del tr' + id)
      },
      updateTruck (id) {
        console.log('gonna upd tr' + id)
      }
    }
  }
</script>

<style scoped>

</style>
