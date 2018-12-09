<template>
  <div class="main">
    <div class="container">
      <app-header></app-header>
      <app-modal v-if="showModal"
                 @closeModal="closeModal"
                 :itemName="itemName"
                 :editObj="editObj"></app-modal>
      <router-view @toggleLoader="toggleLoader"></router-view>
      <app-loader v-if="isLoading"></app-loader>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./AppHeader"
  import AppModal from  "./AppModal"
  import AppLoader from "./AppLoader"
  import { EventBus } from '../EventBus'

  export default {
    name: "HomePage",
    components: {
      AppHeader,
      AppModal,
      AppLoader
    },
    data () {
      return {
        showModal: false,
        itemName: null,
        editObj: {},
        isLoading: false
      }
    },
    created () {
      EventBus.$on('openNewModal', item => this.openModal({}, item));
      EventBus.$on('openDriverModal', driver => this.openModal(driver, 'driver'));
      EventBus.$on('openTruckModal', truck => this.openModal(truck, 'truck'));
    },
    beforeDestroy () {
      EventBus.$off('openNewModal');
      EventBus.$off('openDriverModal');
      EventBus.$off('openTruckModal');
    },
    methods: {
      openModal (editObj, itemName) {
        this.itemName = itemName;
        this.editObj = editObj;
        this.showModal = true;
      },
      closeModal () {
        this.showModal = false;
        this.itemName = null;
        this.editObj = {};
      },
      toggleLoader (isLoading) {
        this.isLoading = isLoading;
      }
    }
  }
</script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  background-color: #eee;
}
</style>
