// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}">
    ${compoenntName}组件
  </div>
</template>
<script>
export default {
  name: '${compoenntName}',
  data(){
      return {
        }
      },
   components:{
    
   },
   mounted(){
    
   }, 
   methods: {
    
   }
}
</script>
<style lang="less" scoped>
@import "./${compoenntName}.less";

</style>
`
  },
  entryTemplate: `import Main from './main.vue'
export default Main`,
  lessTemplate: compoenntName => {
    return `.${compoenntName}{
    }`

  }
}

