/*
* @Author: fengyun2
* @Date:   2016-07-12 00:58:53
* @Last Modified by:   fengyun2
* @Last Modified time: 2016-07-12 14:02:31
*/

'use strict';
// action 会接收 store 作为他的第一个参数
// 既然我们只对事件的分发 (dispatch对象) 感兴趣.
// 我们可以利用es6的解构功能简化参数的导入
export const incrementCounter = function({dispatch, state}) {
  dispatch('INCREMENT', 1) // dispatch 一个 叫 INCREMENT 的 mutation
}
