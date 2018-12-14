<template>

    <div class="">
      <DConfirm :confirmModalOptions="confirmOptions" ref="myConfirm"></DConfirm>
      <span>{{msg}}</span>
    </div>
</template>

<script>
  import  DConfirm from '../confirm/confirm'
    export default {
        data(){
            return {
              msg:'请看控制台'
            }
        },
        components: {
          DConfirm
        },
        computed: {},
        mounted () {
//           let go=function *(x) {
//             console.log('x',x);
//             let a=yield x;
//             console.log('第二次x',x);
//             console.log('a',a);
//             let b=yield x+1;
//             console.log('b',b);
//             let sum=a+b;
//             yield sum;
//             return sum
//           }
//          go(10);
//           let g=go(10);
//           console.log(g.next().value);
//           console.log(g.next(100).value);
//           console.log(g.next(1000));
//           console.log(g.next(8));
          let g=go(10);
//          console.log(g.next().value);
        },
        methods: {
          del: function () {
            this.$refs.myConfirm.showModel();
            this.confirmOptions= {
              type: "warning",//warning
              title: "提示",//提示
              message: "文字内容",//""
              btnCancelText: "取消",//取消
              btnSubmitText: "确定",//确定
              btnSubmitFunction: function () {
                alert("确定")
              },
              btnCancelFunction: function () {
                alert("取消")
              }
            }
          },
        }
    }
</script>

<style>

</style>
