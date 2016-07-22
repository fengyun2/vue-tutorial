<template>
    <div class="page">
        <Display></Display>
        <hr>
        <Increment></Increment>
        <hr>
        <!-- product-list -->
        <product-list></product-list>
        <hr>
        <cart></cart>


    <a href="#" v-link="{path:'display'}">click me</a>
    </div>
    <!-- <router-view transition="fade" transition-mode="out-in"></router-view> -->
</template>
<script>
import Display from './Display'
import Increment from './Increment'
import ProductList from './ProductList'
import Cart from './Cart'
import store from '../vuex/store' //
export default {
    components: {
        Display,
        Increment,
        ProductList,
        Cart
    },
    store // 在根组件加入 store,让他的子组件和 store 连接
}
</script>
<style lang="sass" scoped>
[v-cloak] {
    display: none
}

.fade-transition {
    transition: opacity .3s ease
}

.fade-enter,
.fade-leave {
    opacity: 0
}
</style>
