<template>
    <div>
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])
        // increment() {
        //     this.$store.commit('increment');
        // },
        // decrement() {
        //     this.$store.commit('decrement');
        // }
    }
}
</script>

<style scoped>

</style>