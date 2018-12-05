<template>
  <div id="app">{{foo}}</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #232323;
}
</style>
