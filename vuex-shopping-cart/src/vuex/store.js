/*
 * @Author: fengyun2
 * @Date:   2016-07-12 00:58:53
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 00:41:22
 */

'use strict';
import Vue from 'vue'
import Vuex from 'vuex'

// import Cart from './modules/cart'
import products from './modules/products'
import { INCREMENT, DECREMENT } from './mutation-types'

// 告诉vue 使用 vuex
Vue.use(Vuex)
Vue.config.debug = true

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

export default new Vuex.Store({
    modules: {
        // cart,
        products
    },
    state,
    mutations
})
