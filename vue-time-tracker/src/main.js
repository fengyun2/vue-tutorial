// https://github.com/MeCKodo/vue-tutorial
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// 注册两个插件

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// 路由map
router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries
  }
})
router.redirect({
  '*': '/home'
})

router.start(App, '#app')

/* eslint-disable no-new */
