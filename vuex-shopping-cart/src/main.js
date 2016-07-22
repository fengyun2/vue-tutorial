/*
* @Author: fengyun2
* @Date:   2016-06-03 13:44:17
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-22 10:31:12
*/
'use strict';

import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import lazyload from 'vue-lazyload'
// import store from './vuex/store'
import { timeToNow, reverse , isEmpty, isImage, SpliceCDNUrl, currency } from './api/filters'
// import filters from './api/filters'
import LyApp from './api/lyapp'

import { configRouter } from './router'

import FastClick from 'fastclick'

Vue.filter('timeToNow', timeToNow)
Vue.filter('reverse', reverse)
Vue.filter('isEmpty', isEmpty)
Vue.filter('isImage', isImage)
Vue.filter('SpliceCDNUrl', SpliceCDNUrl)
Vue.filter('currency', currency)
//实例化Vue的filter
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// FastClick.attach(document.body);

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(LyApp, {
  win: window,
  doc: document
})
Vue.use(lazyload, {
  error: './static/img/error.png',
  loading: './static/img/loading.gif',
  try: 3 // default 1
})

// Vue.config.silent = true 取消 Vue.js 所有的日志与警告。
// Vue.config.async = false 关闭异步模式

let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true,
  suppressTransitionError: true,
  linkActiveClass: 'active'
})

configRouter(router)

const App = Vue.extend(require('./components/App'))


router.start(App, '#app')
