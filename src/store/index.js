/**
 * Created by David on 2018/2/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import ModuleA from "./modules/moduleA";
import ModuleB from "./modules/moduleB";
import login from "./modules/login";
let store=new Vuex.Store({
  modules:{
    moduleA:ModuleA,
    moduleB:ModuleB,
    login:login
  },
  // 新增state, getters
  state: {     job: "web"  },
  getters: {
    jobTitle (state){
      return state.job + "developer"    }
  }
})
export  default store
