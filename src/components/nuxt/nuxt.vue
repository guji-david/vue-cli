<template>
  <div class="">
      {{nuxt}}
  </div>

</template>

<script>
export default {
  name: 'nuxt',

  data () {
    return {
      nuxt:"this is a nuxt"
    }
  },
  created(){},
  mounted(){
  },
  methods:{

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
