import Vue from 'vue'
import VueX from 'vuex'

import home from './home'
import search from './search'

Vue.use(VueX);

export default new VueX.Store({
    modules:{
        home,
        search
    }
})

//state 仓库存储数据的地方
// const state ={
//     count:1
// };
// //mutations 修改数据的唯一方式
// const mutations={
//     ADD(state,count){
//         state.count = count
//     }
// };
// //actiong 处理action 可以书写自己的业务逻辑 异步处理等
// const actions = {
//     add({commit}){
//         commit("ADD",10);
//     }
// };
// //理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters ={}
// export default new VueX.Store({
//     state,
//     mutations,
//     actions,
//     getters
// })