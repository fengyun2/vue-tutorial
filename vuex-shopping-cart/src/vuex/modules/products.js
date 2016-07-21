/*
 * @Author: baby
 * @Date:   2016-07-12 20:31:53
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 18:05:06
 */

'use strict';
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../mutation-types'

// 该模块的初始状态
const state = {
  all: []
}

// 相关的 mutations
const mutations = {
  [RECEIVE_PRODUCTS](state, products) {
    state.all = products
  },

  [ADD_TO_CART](state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

export default {
  state,
  mutations
}
