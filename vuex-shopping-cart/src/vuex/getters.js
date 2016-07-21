/*
 * @Author: fengyun2
 * @Date:   2016-07-12 14:05:25
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 00:50:21
 */

'use strict';

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
