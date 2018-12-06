<template>
  <div class="driver">
    <div class="drivers__sort">

    </div>
    <div v-for="driver in drivers" :key="driver.id" class="drivers__row">
      <img :src="'https://randomuser.me/api/portraits/men/' + driver.id + '.jpg'" alt="" class="drivers__avatar">
      <p class="drivers__name">{{ driver.name }}</p>
      <p class="drivers__surname">{{ driver.surname }}</p>
      <p class="drivers__year">{{ driver.year }}</p>
      <p class="drivers__phone">{{ driver.phone }}</p>
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
    }
  }
</script>

<style lang="scss" scoped>
.drivers {
  &__sort {
    padding: 16px;
    background-color: #888;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    & + & {
      border-top: 1px solid #777;
    }
  }
  &__avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
}
</style>
