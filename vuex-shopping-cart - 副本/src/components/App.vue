<template>
    <div class="app">
        <h1>vuex-shopping-cart</h1>
        <hr>
        <h2>Products</h2>
        <product-list></product-list>
        <hr>
        <cart></cart>
    </div>
</template>
<script>
import ProductList from './ProductList'
import Cart from './Cart'
export default {
    components: {
        ProductList,
        Cart
    }
}
</script>
<style lang="sass" scoped>
</style>
