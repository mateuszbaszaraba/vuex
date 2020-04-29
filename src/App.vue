<template>
  <div id="app">
    <app-result></app-result>
    <app-another-result></app-another-result>
    <app-counter></app-counter>
    <app-another-counter></app-another-counter>
  </div>
</template>

<script>
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';

export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appAnotherCounter: AnotherCounter
  }
}
</script>

<style>
</style>
