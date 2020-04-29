<template>
    <div>
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ])
    }
}
</script>

<style scoped>

</style>