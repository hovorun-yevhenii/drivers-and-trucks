<template>
  <div class="main">
    <div class="container">
      <app-header @addItem="addItem"></app-header>
      <app-modal v-if="showModal" @closeModal="closeModal" :item="itemToAdd"></app-modal>
      <router-view @toggleLoader="toggleLoader"></router-view>
      <app-loader v-if="isLoading"></app-loader>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./AppHeader"
  import AppModal from  "./AppModal"
  import AppLoader from "./AppLoader"

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
        itemToAdd: null,
        isLoading: false
      }
    },
    methods: {
      addItem (item) {
        this.itemToAdd = item;
        this.showModal = true;
      },
      closeModal () {
        this.showModal = false;
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
