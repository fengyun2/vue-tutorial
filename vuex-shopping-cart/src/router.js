/*
 * @Author: fengyun2
 * @Date:   2016-06-07 15:09:16
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-07-12 14:13:25
 */

export function configRouter(router) {
    router.map({
        '/': { // 首页
            name: 'index',
            component: function(resolve) {
                require(['./views/Index'], resolve)
            }
        },
        '/index': { // 首页
            name: 'index',
            component: function(resolve) {
                require(['./views/Index'], resolve)
            }
        }
    })

    router.beforeEach(({ to, from, next }) => {

    })

    router.afterEach(function({ to }) {
        console.log(`成功浏览到: ${to.path}`)
    })
}
