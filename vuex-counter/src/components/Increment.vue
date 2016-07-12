<template>
    <div class="content">
        <p>
            <button @click="increment">Increment +1</button>
            <br>
            <button @click="incrementBy(10)">Increment by ten</button>
            <br>
            <button @click="incrementAsync">Increment async</button>
            <br>
            <button @click="decrement(1)">DECREMENT</button>
            <br>
        </p>
    </div>
</template>
<script>
import {
    incrementCounter,
    incrementBy,
    incrementAsync,
    decrement
} from '../vuex/actions'
export default {
    vuex: {
        actions: {
            increment: incrementCounter,
            incrementBy,
            incrementAsync,
            decrement
        }
    }
}
</script>
<style></style>
