<template>
  <div class="truck">
      <p class="truck__makes">{{ truck.makes }}</p>
      <p class="truck__model">{{ truck.model }}</p>
      <p class="truck__number">{{ truck.number }}</p>
      <p class="truck__year">{{ truck.year }}</p>
      <button class="app-button action update" @click="openTruckModal" title="update truck"></button>
      <button class="app-button action delete" @click="deleteTruck" title="delete truck"></button>
  </div>
</template>

<script>
  import { EventBus} from "../../utils/EventBus"

  export default {
    name: "TruckRow",
    props: ["truck"],
    methods: {
      deleteTruck () {
        EventBus.$emit('deleteTruck', this.truck.id)
      },
      openTruckModal () {
        EventBus.$emit('openTruckModal', this.truck)
      }
    }
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

  &__makes {
    flex-basis: 200px;
  }
  &__model {
    flex-basis: 200px;
  }
  &__number {
    flex-basis: 150px;
  }
  &__year {
    flex-basis: 150px;
  }
  .action {
    flex-basis: 48px;
  }
}
</style>
