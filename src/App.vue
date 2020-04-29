<template>
  <div id="app">
    <app-result></app-result>
    <app-another-result></app-another-result>
    <app-counter></app-counter>
    <app-another-counter></app-another-counter>
    <hr>
    <input type="text" v-model="value">
    <p>{{ value }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
        this.$store.dispatch('updateValue', value)
      }
    }
  },
  name: 'app',
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value)
    }
  }
}
</script>

<style>
</style>
