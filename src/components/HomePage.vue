<template>
  <div class="main">
    <div class="container">
      <app-header></app-header>
      <transition name="fade">
        <app-modal v-if="showModal"
                   @closeModal="closeModal"
                   :itemName="itemName"
                   :editObj="editObj">
        </app-modal>
      </transition>
      <router-view @toggleLoader="toggleLoader"></router-view>
      <app-note></app-note>
      <app-confirm v-if="showConfirm" :itemToDel="itemToDel"></app-confirm>
      <app-loader v-if="isLoading"></app-loader>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./shared/AppHeader"
  import AppModal from "./shared/AppModal"
  import AppLoader from "./shared/AppLoader"
  import AppConfirm from "./shared/AppConfirm"
  import AppNote from "./shared/AppNote"
  import { EventBus } from "../utils/EventBus"

  export default {
    name: "HomePage",
    components: {
      AppHeader,
      AppModal,
      AppLoader,
      AppNote,
      AppConfirm
    },
    data () {
      return {
        showModal: false,
        itemName: null,
        editObj: {},
        isLoading: false,
        showConfirm: false,
        itemToDel: null
      }
    },
    created () {
      EventBus.$on('openConfirm', opts => this.openConfirm(opts));
      EventBus.$on('openNewModal', item => this.openModal({}, item));
      EventBus.$on('openDriverModal', driver => this.openModal(driver, 'driver'));
      EventBus.$on('openTruckModal', truck => this.openModal(truck, 'truck'));
    },
    beforeDestroy () {
      EventBus.$off('openConfirm');
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
      },
      openConfirm (opts) {
        if (!opts.open) {
          this.showConfirm = false;
          this.itemToDel = null;
        } else {
          this.itemToDel = opts;
          this.showConfirm = true;
        }
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
