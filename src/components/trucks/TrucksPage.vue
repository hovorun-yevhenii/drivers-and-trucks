<template>
  <div class="trucks">
    <div class="trucks__sort">
      <div class="makes">
        <span>makes</span>
        <div class="triangles">
          <div class="triangle up"
               :class="{'active' : sortName === 'makes' && sortType === 'asc'}"
               @click="sort('makes', 'asc')">
          </div>
          <div class="triangle"
               :class="{'active' : sortName === 'makes' && sortType === 'desc'}"
               @click="sort('makes', 'desc')">
          </div>
        </div>
      </div>
      <div class="model">
        <span>model</span>
        <div class="triangles">
          <div class="triangle up"
               :class="{'active' : sortName === 'model' && sortType === 'asc'}"
               @click="sort('model', 'asc')">
          </div>
          <div class="triangle"
               :class="{'active' : sortName === 'model' && sortType === 'desc'}"
               @click="sort('model', 'desc')">
          </div>
        </div>
      </div>
      <div class="year">
        <span>year</span>
        <div class="triangles">
          <div class="triangle up"
               :class="{'active' : sortName === 'year' && sortType === 'asc'}"
               @click="sort('year', 'asc')">
          </div>
          <div class="triangle"
               :class="{'active' : sortName === 'year' && sortType === 'desc'}"
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
      EventBus.$on('deleteTruck', truck => this.deleteTruck(truck));
    },
    beforeDestroy () {
      EventBus.$off('createTruck');
      EventBus.$off('updateTruck');
      EventBus.$off('deleteTruck');
    },
    methods: {
      createTruck (truck) {
        let index = 0;

        while (this.trucks[index]) ++index;

        truck.id = index + 1;

        // function makeNumber() {
        //
        //   return 3
        // }

        // this.trucks.forEach((tr, i )=> {
        //   makeNumber()
        // })

        this.trucks.unshift(truck);
        this.sort(this.sortName, this.sortType);
        this.postTrucks();
      },
      updateTruck (truck) {
        const index = this.trucks.findIndex(item => item.id === truck.id);

        this.trucks[index] = truck;
        this.sort(this.sortName, this.sortType);
        this.postTrucks();
      },
      deleteTruck(id) {
        const index = this.trucks.findIndex(item => item.id === id);

        this.trucks.splice(index, 1);
        this.sort(this.sortName, this.sortType);
        this.postTrucks();
      },
      postTrucks () {
        this.apiRequest({
          url: "bwrwu",
          method: "put",
          payload: JSON.stringify(this.trucks)
        }).then(
          () => {
            console.log('good')
          },
          () => {
            console.log('error');
          });
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
    padding: 16px 0 16px 8px;
    background-color: #eee;

    & > * {
      display: flex;
      align-items: center;
    }

    .makes {
      margin-right: 132px;
    }

    .model {
      margin-right: 315px;
    }
   }
}
</style>