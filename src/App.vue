<template>
  <div id="app">
    <app-result></app-result>
    <app-another-result></app-another-result>
    <app-counter></app-counter>
  </div>
</template>

<script>
import Counter from './components/Counter';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';

export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
}
</script>

<style>
</style>
