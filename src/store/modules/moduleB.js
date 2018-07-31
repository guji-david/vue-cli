/**
 * Created by David on 2018/2/8.
 */
import axios from 'axios'
export default{
  //参数与方法写在这里
//定义状态
  state:{//定义在这里的数据是公用的
    num:10,
    navs:[]
  },
  getters:{

  },
  mutations:{
    add(state,playload){
      console.log('playload')
      console.log(playload)
      state.num+=playload.n;
    },
    desc(state,playload){
      state.num-=playload.n
    },
    getNavs(state,playload){//改变state
      state.navs=playload.res
    }
  },
  actions:{
    getNavs({commit}){//异步请求  通过mock模拟数据进行后台请求
      // console.log('store this')
      // console.log(this)
      // console.log(axios)
      let HOST=process.env.API_ROOT;
      let createFileName='7d5a98d215c2126d7ebc92d69510f755';
      let url = HOST +'/'+ createFileName + '.json';
      axios.get(url)
        .then((response)=>{
          commit('getNavs',{//触发mutation
            res:response.data.data
          })
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
}
