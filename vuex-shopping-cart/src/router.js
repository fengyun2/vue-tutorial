/*
 * @Author: fengyun2
 * @Date:   2016-06-07 15:09:16
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-18 03:39:21
 */

export function configRouter(router) {
    router.map({
        '/': { // 首页
            name: 'index',
            component: function(resolve) {
                require(['./components/Display'], resolve)
            }
        },
        '/index': { // 首页
            name: 'index',
            component: function(resolve) {
                require(['./components/Display'], resolve)
            }
        },
        'cart': {
            name: 'cart',
            component: function(resolve) {
                require(['./components/Display'], resolve)
            }
        },

    })

    router.beforeEach(({ to, from, next }) => {
        FastClick.attach(document.body);
    })

    router.afterEach(function({ to }) {
        console.log(`成功浏览到: ${to.path}`)
    })
}
