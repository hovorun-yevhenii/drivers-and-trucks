<template>
  <div class="main">
    <div class="container">
      <app-header @addItem="addItem"></app-header>
      <app-modal v-if="showModal" @closeModal="closeModal" :item="itemToAdd"></app-modal>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./AppHeader"
  import AppModal from  "./AppModal"

  export default {
    name: "HomePage",
    components: {
      AppHeader,
      AppModal
    },
    data () {
      return {
        showModal: false,
        itemToAdd: null
      }
    },
    methods: {
      addItem (item) {
        this.itemToAdd = item;
        this.showModal = true;
      },
      closeModal () {
        this.showModal = false;
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
