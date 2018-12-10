<template>
  <div class="trucks">
    <div class="trucks__sort sort-row">
      <div class="makes">
        <span>makes</span>
        <div class="triangles">
          <div class="triangle triangle--up"
               :class="{'triangle--active' : sortName === 'makes' && sortType === 'asc'}"
               @click="sort('makes', 'asc')">
          </div>
          <div class="triangle"
               :class="{'triangle--active' : sortName === 'makes' && sortType === 'desc'}"
               @click="sort('makes', 'desc')">
          </div>
        </div>
      </div>
      <div class="model">
        <span>model</span>
        <div class="triangles">
          <div class="triangle triangle--up"
               :class="{'triangle--active' : sortName === 'model' && sortType === 'asc'}"
               @click="sort('model', 'asc')">
          </div>
          <div class="triangle"
               :class="{'triangle--active' : sortName === 'model' && sortType === 'desc'}"
               @click="sort('model', 'desc')">
          </div>
        </div>
      </div>
      <div class="number">
        <span>number</span>
      </div>
      <div class="year">
        <span>year</span>
        <div class="triangles">
          <div class="triangle triangle--up"
               :class="{'triangle--active' : sortName === 'year' && sortType === 'asc'}"
               @click="sort('year', 'asc')">
          </div>
          <div class="triangle"
               :class="{'triangle--active' : sortName === 'year' && sortType === 'desc'}"
               @click="sort('year', 'desc')">
          </div>
        </div>
      </div>
    </div>
    <div class="trucks__table">
      <transition-group name="list">
        <truck-row v-for="truck in sortedTrucks"
                   :key="truck.id"
                   :truck="truck">
        </truck-row>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import TruckRow from "./TruckRow"
  import { EventBus } from '../../utils/EventBus'

  export default {
    name: "TrucksPage",
    components: {
      TruckRow
    },
    data() {
      return {
        trucks: {},
        sortedTrucks: [],
        sortName: '',
        sortType: ''
      }
    },
    created() {
      this.$emit('toggleLoader', true);

      this.apiRequest({url: 'bwrwu'}).then(
        response => {
          this.trucks = JSON.parse(response.data.body);
          this.sortedTrucks = this.trucks.slice();
          this.$emit('toggleLoader', false);
        },
        () => {
          console.log('connection error');
          this.$emit('toggleLoader', false);
        });

      EventBus.$on('createTruck', truck => this.createTruck(truck));
      EventBus.$on('updateTruck', truck => this.updateTruck(truck));
      EventBus.$on('deleteTruck', id => this.deleteTruck(id));
    },
    beforeDestroy () {
      EventBus.$off('createTruck');
      EventBus.$off('updateTruck');
      EventBus.$off('deleteTruck');
    },
    methods: {
      createTruck (truck) {
        truck.id = this.findMinUniqueId(this.trucks);
        this.trucks.unshift(truck);
        this.sort(this.sortName, this.sortType);
        this.putToServer("Truck has been created");
      },
      updateTruck (truck) {
        const index = this.trucks.findIndex(item => item.id === truck.id);

        this.trucks[index] = truck;
        this.sort(this.sortName, this.sortType);
        this.putToServer("Truck has been updated");
      },
      deleteTruck(id) {
        const index = this.trucks.findIndex(item => item.id === id);

        this.trucks.splice(index, 1);
        this.sort(this.sortName, this.sortType);
        this.putToServer("Truck has been deleted");
      },
      putToServer (message) {
        this.apiRequest({
          url: "bwrwu",
          payload: JSON.stringify(this.trucks)
        }).then(
          () => EventBus.$emit('showNote', { message }),
          () => EventBus.$emit('showNote', { message: 'Network error' })
        );
      },
      sort(name, type) {
        if (this.sortName === name && this.sortType === type) {
          this.sortedTrucks = this.trucks.slice();
          this.sortName = '';
          this.sortType = '';
          return;
        }

        this.sortName = name;
        this.sortType = type;
        const rate = type === 'asc' ? 1 : -1;

        this.sortedTrucks = this.trucks.slice().sort((a, b) => a[name] > b[name] ? rate : rate * -1);
      }
    }
  }
</script>

<style lang="scss" scoped>
.trucks {
  &__sort {
    display: flex;
    align-items: center;
    margin: 0 -16px;
    padding: 16px 0 16px 16px;
    background-color: #eee;

    .makes {
      margin-right: 147px;
    }

    .model {
      margin-right: 150px;
    }
    .number {
      margin-right: 120px;
    }
  }
}
</style>
