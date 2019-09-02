/**
 * Created by David on 2018/2/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const files=require.context('./modules',false,/\.js$/);
//接受是三个参数 directory {String} -读取文件的路径useSubdirectories {Boolean} -是否遍历文件的子目录regExp {RegExp} -匹配文件的正则
// console.log(files.keys());
const modules={};
files.keys().forEach(key=>{
  modules[key.replace(/(\.\/|\.js)/g,'')] = files(key).default
});

import ModuleA from "./modules/moduleA";
import ModuleB from "./modules/moduleB";
import login from "./modules/login";
let store=new Vuex.Store({
  modules,
  // modules:{
  //   moduleA:ModuleA,
  //   moduleB:ModuleB,
  //   login:login
  // },
  // 新增state, getters
  state: {     job: "web"  },
  getters: {
    jobTitle (state){
      return state.job + "developer"    }
  }
});
export  default store
