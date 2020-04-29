<template>
    <div>
        <p>Counter is: {{ wowCounter }}</p>
        <p>Number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: { 
        ...mapGetters({
            wowCounter: 'doubleCounter',
            stringCounter: 'clickCounter'
        })
    }
}
</script>

<style scoped>

</style>