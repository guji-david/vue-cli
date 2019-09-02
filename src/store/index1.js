import Vue from "vue";
import Vuex from "./myVuex";
// import Vuex from 'vuex'

Vue.use(Vuex); //用插件 会默认调用合格库的install方法

export default new Vuex.Store({
  //希望把一个项目分成很多个模块
  modules:{
    a:{
      state:{
        x:1
      },
      // getters: {
      //   //data的computed
      //   getA(state) {
      //     console.log('a getA');
      //     return state.age + 999 + 'a';
      //   }
      // },
      // mutations:{
      //   changeX(state,payload){
      //     state.x = 'changeX100';
      //   }
      // },
      // modules:{
      //   c:{
      //     state:{
      //       z:2
      //     },
      //     modules:{
      //       d:{
      //         state:{
      //           t:3
      //         }
      //       }
      //     }
      //   },
      //
      // }
    },
    b:{
      state:{
        y:2
      }
    },
    d:{
      state:{
        z:3
      }
    }
  },
  state: {
    age: 10
  },
  getters: {
    myAge(state) {
      return state.age + 10;
    }
  },
  mutations: {
    syncAdd(state, payload) {
      console.log('syncAdd this',this);
      state.age += payload;
    },
    syncMinus(state, payload) {
      console.log('syncMinus this',this);
      state.age -= payload;
    }
  },
  actions: {
    //actions有两个功能 1/调用其他的actions 2/提交一个mutations
    // asyncMinus(store,payload){
    asyncMinus({ commit, dispatch }, payload) {
      console.log('asyncMinus--1 this',this);
      setTimeout(() => {
        console.log('asyncMinus--2 this',this);
        commit("syncMinus", payload);
      }, 1500);
    }
  }
});
