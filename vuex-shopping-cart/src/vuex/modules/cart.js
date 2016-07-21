/*
 * @Author: fengyun2
 * @Date:   2016-07-21 16:13:14
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 16:22:36
 */

'use strict';

import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../mutation-types'

// init state
// shape: [{id: quantity}]

const state = {
  added: [],
  lastCheckout: null
}

// mutations
const mutations = {
  [ADD_TO_CART](state, productId) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === productId)
    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  [CHECKOUT_REQUEST](state) {
    // clear cart
    state.added = []
    state.lastCheckout = null
  },

  [CHECKOUT_SUCCESS](state) {
    state.lastCheckout = 'successfull'
  },

  [CHECKOUT_FAILURE](state, savedCartItems) {
    // rollback to the cart saved before sending the request
    state.added = savedCartItems
    state.lastCheckout = 'failed'
  }
}

export default {
  state,
  mutations
}
