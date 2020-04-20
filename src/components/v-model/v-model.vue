<template>
  <div>


    <div style="background: aqua">
      <div style="margin: 10px;height: 20px;background: red">a</div>
      <div style="margin: 10px;height: 20px;background: yellow;overflow: hidden">b</div>
    </div>




    <p>我是父级组件</p>
    <p>父级组件内容：{{ text }}</p>
    <p><button @click="onChange">改变内容</button></p>
    <hr>
    <child v-model="text"></child>
  </div>
</template>
<script>
  import Child from './child'
  export default {
    components: {
      Child
    },
    data() {
      return {
        text: '我是父级组件的内容'
      }
    },
    methods: {
      onChange() {
        this.text = '我是由父级组件触发改变了内容'
      }
    }
  }
</script>
<style scoped>
</style>
