/*
 * @Author: fengyun2
 * @Date:   2016-07-12 14:05:25
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-22 11:21:26
 */

'use strict';

// getters.js
// 把计算属性的 getters 提取出来，以实现在多个组建之间的共享。
//
import store from './store'

// 这个 getter 函数会返回 count 的值
export const getCount = state => state.count

export const cartProducts = state => {
  return state.cart.added.map(({ id, quantity }) => {
    const product = state.products.all.find(p => p.id === id)
    return {
      title: product.title,
      price: product.price,
      quantity
    }
  })
}
