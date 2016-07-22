/*
 * @Author: fengyun2
 * @Date:   2016-07-12 00:58:53
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-22 10:57:31
 */

'use strict';
import Vue from 'vue'
import Vuex from 'vuex'

// 导入各个模块的初始状态和 mutations
import cart from './modules/cart'
import products from './modules/products'
import { INCREMENT, DECREMENT } from './mutation-types'

// 告诉vue 使用 vuex
Vue.use(Vuex)
// Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

// 创建一个对象来保存应用启动时的初始状态
const state = {
  //  TODO: 放置初始状态
  count: 0 // 应用启动时, count置为0
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数

  // mutation 的第一个参数是当前的 state
    // 可以在函数里修改state
    // 不能直接调用mutation handler。触发 mutation handler 的方法是 dispatch 一个 mutation 的事件名
    // 如: store.dispatch('INCREMENT')

  /*    INCREMENT(state, amount) {
          state.count = state.count + amount
      }*/
  [INCREMENT](state, amount = 1) {
    state.count += amount
  },
  [DECREMENT](state, amount = 1) {
    state.count -= amount
  }
}

// 整合初始状态和变更函数, 我们就得到了我们所需的 store
// 至此,这个 store 就可以连接到我们的应用中


// 在这里, cart模块的初始状态会作为 store.state.cart 被设置到底层的 state 树上，
// 另外,所有在子模块上定义的 mutations 都只能改变当前相关联子模块上的 state 子树，
// 所以 cart 模块上定义的 mutations 接收的第一个参数将会是 store.state.cart。
export default new Vuex.Store({
  // 组合各个模块  
  modules: {
    cart,
    products
  },
  state,
  mutations,
  strict: debug
})
