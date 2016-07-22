<template>
  <ul>
    <li v-for="p in products">
      {{p.title}} - {{p.price | currency}}
      <br>
      <button :disabled="!p.inventory" @click="addToCart(p)">Add to cart</button>
    </li>
  </ul>
</template>
<script>
import {
  getAllProducts,
  addToCart
} from '../vuex/actions'
export default {
  vuex: {
    getters: {
      // 该 getters 函数会把仓库的 `store.state.products.all`绑定为 `this.products`
      products: ({
          products
        }) => products.all
        //等同于
      // products: function(state) { // return state.products.all // }
    },
    actions: {
      getAllProducts,
      addToCart
    }
  },
  created() {
    this.getAllProducts()
  }
}
</script>
<style media="screen">
</style>
