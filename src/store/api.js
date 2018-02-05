/**
 * Created by David on 2018/1/26.
 */
import axios from 'axios'
let getTimestamp=new Date().getTime();//当前时间
const API_HOST =process.env.API_ROOT;//  "/api/console"process.env.API_ROOT
/**
 * 发送网络请求 host为API_HOST
 */
export function getRequest(action, successFun,errorFun) {
  console.log("API_HOST--------->"+API_HOST);
  axios.get(API_HOST + action).then(function (response) {
    successFun(response.data)
      /*if (typeof (response.data.data)==="string" && (/^[\[\],:{}\s]*$/).test(response.data.data) ){
        successFun(JSON.parse(response.data.data));
      }else{
        successFun(response.data);
      }*/
    })
    .catch(function (error) {
      console.error('console-error.config', error ,error.config);

    });
}
