/*
 * @Author: fengyun2
 * @Date:   2016-07-21 00:32:40
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-21 16:10:05
 */

'use strict';

/**
 * Mocking client-server processing
 */
const _products = [
  { "id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2 },
  { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
  { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]

export default {
  getProducts(cb) {
      setTimeout(() => cb(_products), 100)
    },

    buyProducts(products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ? cb(): errorCb()
      }, 100)
    }
}
