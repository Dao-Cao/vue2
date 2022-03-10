import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import "@/mock/mockServe"

import TypeNav from '@/components/TypeNav'

import 'swiper/css/swiper.css'

Vue.component(TypeNav.name,TypeNav)

// import {reqCategoryList} from '@/api'
// let rest = reqCategoryList();
// console.log(rest)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  mounted(){
    //this.$store.dispatch("categoryList");
  }
}).$mount('#app')
