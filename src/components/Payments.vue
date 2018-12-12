<template>
  <div id="payments">
    <p v-for="(payment, i) in payments" :key="i">
      {{ payment.Name }}
    </p>
  </div>
</template>

<script>
import data from '../data.js'
export default {
  name: 'HelloWorld',
  data() {
    return {
      payments: []
    }
  },
  methods: {

  },
  created() {
    this.payments = data;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
