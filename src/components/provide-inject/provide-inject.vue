<template>
  <div class="provide-inject">

    <div class="test" v-show="true">
      provide-inject组件
    </div>
    <Child></Child>
  </div>
</template>
<script>
  import Child from './child.vue'
  export default {
    name: 'provide-inject',
    data(){
      return {
        name:'父组件'
      }
    },

    provide: {
      name: 'Aresn'
    },

    components:{
      Child
    },
    mounted(){

    },
    methods: {
      sayHello () {
        console.log('Hello, Vue.js');
      }
    }
  }
</script>
<style>
  .test{
    visibility: hidden;
  }
</style>
