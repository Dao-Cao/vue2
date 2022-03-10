import { reqGetSerachInfo } from "@/api"
const state ={
    searchInfoList:{}
}
const mutations ={
    GETSEARCHLIST(state,list){
        state.searchInfoList = list;
    }
}
const actions ={
    async getSearchList({commit},params={}){
      let result  =  await reqGetSerachInfo(params);
      if (result.code == 200) {
        commit("GETSEARCHLIST",result.data)
      }
    }
}
const getters ={
    getGoodsList(state){
        return state.searchInfoList.goodsList||[]
    },
    getAttrsList(state){
        return state.searchInfoList.attrsList||[];
    },
    getTrademarkList(state){
        return state.searchInfoList.trademarkList||[];
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}