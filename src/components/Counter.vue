<template>
    <div>
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
    methods: {
        increment() {
            this.$store.state.counter++;
        },
        decrement() {
            this.$store.state.counter--;
        }
    }
}
</script>

<style scoped>

</style>