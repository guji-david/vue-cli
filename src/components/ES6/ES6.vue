<template>
    <div class="">
      {{msg}}
    </div>
</template>

<script>
//  import iconv from 'iconv-lite'
//  import https from 'https'
  import TOOLS from '../../assets/js/tool.js'
    export default {
        data(){
            return {
              msg:'请看控制台'
            }
        },
        components: {},
        computed: {},
        mounted () {
          let go=function *(x) {
            console.log('x',x);
            let a=yield x;
            console.log('第二次x',x);
            console.log('a',a);
            let b=yield x+1;
            console.log('b',b);
            let sum=a+b;
            yield sum;
            return sum
          }
//          go(10);
          let g=go(10);
//          console.log(g.next().value);
          console.log(g.next(100).value);
          console.log(g.next(1000));
          console.log(g.next(8));
        },
        methods: {
        }
    }
</script>

<style>

</style>
