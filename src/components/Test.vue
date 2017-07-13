<template>
  <div class="test">
    <section class="pay-mask" @click="close_mask" v-show="payshow">
      <div class="container">
        <div class="pay_title">请输入支付密码</div>
        <div class="flex f-d-r pay_content">
          <div v-for="(item,index) in inputList"class="ipt_pay">
            <input type="password" maxlength="1"v-model="item.name" disabled>
          </div>
        </div>
      </div>
      <footer>
        <!--<ul class="pay_btn">
          <li v-for="i in 9"@click="btnpassword($event)">i</li>
          <li class="b9"></li>
          <li @click="btnpassword($event)">0</li>
          <li class="b9" @click="btndelete">删除</li>
        </ul>-->
      </footer>
    </section>

  </div>

</template>

<script>
export default {
  name: 'test',
 /* props:{
      payshow:{
          type:Boolean,
          default:false
      }
  },*/
  data () {
    return {
      msg: 'vue支付密码效果',
      inputList:[{name:""},{name:""},{name:""},{name:""},{name:""},{name:""}],
      index:-1,
      payshow:true
    }
  },
  created(){},
  mounted(){
      this.inputList[0].name.focus()
//      $(".ipt_pay input:first").focus();
  },
  methods:{
    btnpassword(e){
        var obj=e.currentTarget;
        var payinput=$(".ipt_pay input");
        if(this.index<5){
            this.index++;
            $(payinput[this.index]).valueOf($(obj).text());
        }
      if(this.index==5){
            var pay_pwd='';
            var  payinput=$(".ipt_pay input");
            for (var i=0;i<payinput.length;i++){
              pay_pwd+=$(payinput[i]).val();
            }
        console.log(pay_pwd)
      }
    },
    btndelete(){
      var payinput=$(".ipt_pay input");
      if(this.index>=0){
        $(payinput[this.index]).val('');
        this.index--;
      }
    },
    close_mask(){
//        this.payshow=false;
    }
  }
}
</script>


<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  section{
    position: fixed;
    top:0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background:rgba(0,0,0,.6);
  }
  .container{
    position: absolute;
    top:4rem;
    background:#fff;
    border-radius:5px;
    margin: 0.533333rem;
    padding-bottom: .266667rem;
  }
  .pay_title{
    position: relative;
    font-size: .48rem;
    text-align: center;
    color: #333;
    height: 1.333333rem;
    line-height: 1.333333rem;
    border-bottom: 1px solid #ddd;
  }
  .close{
    position: absolute;
    right: .2rem;
    top: .2rem;
    width: .72rem;
    height: .72rem;
  }
  .pay_conent{
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    margin: .533333rem;
  }
  .ipt_pay{
    float: left;
  }
  .ipt_pay input{
    border: 0;
    height: 100%;
    width: 100%;
    text-align:center;
    font-size: .73rem;
    background: #ff0;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-weight: 600;
  }
  .pay_btn{}
  .pay_btn li{
    width: 33.3333%;
    float: left;
    height: 1.333333rem;
    line-height: 1.333333rem;
    text-align: center;
    background: #fff;
    font-size: .88rem;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .pay_btn li:active{
    background: #C2C2C2;
  }
  .b9:active{
    background: #fff !important;
  }
  .b9{
    background: #C2C2C2 !important;
  }
</style>
