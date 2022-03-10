import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import "@/mock/mockServe"

import TypeNav from '@/components/TypeNav'
import 'swiper/css/swiper.css'

import Carsouel from '@/components/Carsouel'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carsouel.name,Carsouel)

// import {reqGetSerachInfo} from '@/api'
// let rest = reqGetSerachInfo({});
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
