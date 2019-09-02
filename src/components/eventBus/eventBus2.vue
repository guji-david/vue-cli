<template>
  <div class="eventBus1">
    <h1>使用eventBus产生的效果2</h1>
    <div style="height: 30px">
    <input type="text" v-model="message">
      <h2>使用Bus走过的坑</h2>
      <button @click="editList">bus携带数据并跳转路由</button>
      <h2>判断一个对象是否为空</h2>
      <pre>
        const isEmptyObj = object => !Object.getOwnPropertySymbols(object).length && !Object.getOwnPropertyNames(object).length

      </pre>
    </div>
  </div>

</template>

<script>
export default {
  name: 'eventBus1',
  data () {
    return {
      message:''
    }
  },
  created(){
    this.$root.Bus.$on('on1', (msg) => {    this.message = msg   })
  },
  mounted(){

  },
  methods:{
    editList () {
//  点击进入编辑的页面，需要传递的参数比较多。

      this.$router.replace({name: 'Nuxt'})
    }
  },
  beforeDestroy (){
    this.$root.Bus.$emit('get', {
      item: "item",
      date: "date"
    });
  }
}
</script>


<style scoped>

</style>
