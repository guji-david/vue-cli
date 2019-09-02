let express = require('express');
let app = express();
let path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: true }));//解析post请求数据
var multipart = require('connect-multiparty');//专门处理此类post数据相关的依赖包

var multipartMiddleware = multipart();
app.use(express.static(path.join(__dirname, 'public')))
// app.all('*',function(req,res,next){
//     let origin=req.headers.origin;
//     res.setHeader('Access-Control-Allow-Origin',"*");
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     next();
// })
/**/


/*
 * 1.获取用户信息
 * @param params 请求参数
 * param successFun 成功回调
*/
app.get('/api/getAppUserInfo',function(req,res){
  let data={
    data:{
      balance: 100,//余额
      bonusMoney: 350,//中奖金额
      idCard: "140109199611083031",
      bind: true,
      image: "http://static.ggc.cn/img/header/20190415/32-1555324842.jpeg",
      mobile: "13141161273",
      realName: "乔逸凡",
      userMoney: 100,//可提现余额
      username: "david123"},
    success:true,
    errorMessage:null,
    errorCode:null,
    message:null};
  res.send(data)

})
/*
 * 2.获取中奖列表
 * @param data 请求参数
 * param successFun 成功回调
*/
app.post('/app/drawed-lottery-list',multipartMiddleware,function(req,res){
  let data={
    data:[
      {goodsId: "J0302171180346192115", lotteryTime: "2019-04-16 16:02:13", orderId: 207, pic: "http://static.ggc.cn/upload/tickets/6939201903071551942348.png", price: "5.00", winMoney: "0.00"},
      {goodsId: "J0302171180346192116", lotteryTime: "2019-04-16 16:02:14", orderId: 209, pic: "http://static.ggc.cn/upload/tickets/6939201903071551942348.png", price: "5.00", winMoney: "12.00"},
      {goodsId: "J0302171180346192119", lotteryTime: "2019-04-16 16:02:15", orderId: 205, pic: "http://static.ggc.cn/upload/tickets/6939201903071551942348.png", price: "5.00", winMoney: "13.44"},

    ],
    success:true,
    errorMessage:null,
    errorCode:null,
    message:null}
  res.send(data)
});
app.listen(2000);
console.log('监听2000端口。。');
