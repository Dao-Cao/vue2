import {reqCategoryList} from '@/api'
//state 仓库存储数据的地方
const state ={
    count:1,
    categoryList:[]
};
//mutations 修改数据的唯一方式
const mutations={
    ADD(state,count){
        state.count = count
    },
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
//actiong 处理action 可以书写自己的业务逻辑 异步处理等
const actions = {
    add({commit}){
        commit("ADD",10);
    },
    async categoryList({commit}){
       let result = await reqCategoryList();
       if(result.code == 200){
           commit('CATEGORYLIST',result.data)
       }
       //alert(123)
       //   console.log(rst)
    }
};
//理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters ={}
export default {
    state,
    mutations,
    actions,
    getters
}