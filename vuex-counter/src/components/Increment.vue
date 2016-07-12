<template>
    <div class="content">
        <p>
            <button @click="increment">Increment +1</button>
        </p>
    </div>
</template>
<script>
import {
    incrementCounter
} from '../vuex/actions'
export default {
    vuex: {
        actions: {
            increment: incrementCounter
        }
    }
}
</script>
<style></style>
