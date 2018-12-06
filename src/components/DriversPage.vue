<template>
  <div class="drivers">
    <div class="drivers__sort">

    </div>
    <div class="drivers__table">
      <driver-row v-for="driver in drivers"
                  :key="driver.id"
                  :driver="driver"
                  @updateDriver="updateDriver"
                  @deleteDriver="deleteDriver">
      </driver-row>
    </div>
  </div>
</template>

<script>
  import DriverRow from "./DriverRow"
  export default {
    name: "DriversPage",
    components: {
      DriverRow
    },
    data () {
      return {
        drivers: {}
      }
    },
    created() {
      this.$emit('toggleLoader', true);

      this.apiRequest({url: "mmcba"}).then(
        response => {
          this.drivers = response.data;
          this.$emit('toggleLoader', false)
        },
        () => {
          console.log('connection error');
          this.$emit('toggleLoader', false)
        })
    },
    methods: {
      deleteDriver (id) {
        console.log('gonna del dr' + id)
      },
      updateDriver (id) {
        console.log('gonna upd dr' + id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.drivers {
  &__sort {
    padding: 16px;
    background-color: #888;
  }
}
</style>
