import {reqCategoryList,reqGetBanner,reqGetFloor} from '@/api'
//state 仓库存储数据的地方
const state ={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
//mutations 修改数据的唯一方式
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
//actiong 处理action 可以书写自己的业务逻辑 异步处理等
const actions = {

    async categoryList({commit}){
       let result = await reqCategoryList();
       if(result.code == 200){
           commit('CATEGORYLIST',result.data)
       }
    },
    async getListBanner({commit}){
        let result = await reqGetBanner();
        if(result.code == 200){
            commit('BANNERLIST',result.data)
        }
    },
    async getFloor({commit}){
        let result = await reqGetFloor();
        if(result.code == 200){
            commit('FLOORLIST',result.data)
        }
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