/**
 * Created by David on 2018/2/8.
 */
export default{
  state:{
    count:0
  },
  mutations:{
    increment(state){
      //这是的state对象是模块的局部状态
      state.count++
    }
  },
  actions:{
    incrementIfOddOnRootSum({state,commit,rootState}){
      if((state.count+rootState.count)%2===1){
        commit('increment')
      }
    }
  },
  getters:{
    doubleCount(state){
      return state.count*2
    },
    sumWithRootCount(state,getters,rootState){
      return state.count+rootState.count
    }
  }
}
