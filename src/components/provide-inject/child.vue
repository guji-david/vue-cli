<template>
  <div>
    组件BC
  </div>
</template>

<script>
  import { findComponentUpward } from '../../assets/js/assist.js';
  export default {
    name: "child",
    inject:['name'],
    mounted(){
      const comA = findComponentUpward(this, 'provide-inject');
      // console.log(this.name);
      if (comA) {
        console.log(comA.name);  // Aresn
        comA.sayHello();  // Hello, Vue.js
      }
    },

  }
</script>

<style scoped>

</style>
