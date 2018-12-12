<template>
  <div id="app">
    <h1>BriteCore</h1>
    <Payments/>
  </div>
</template>

<script>
import Payments from './components/Payments.vue'

export default {
  name: 'app',
  components: {
    Payments
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-weight: 200;
}
</style>
