<template>
  <div>
    <List :items="list"
      :item-click="item => (clicked = item)"
    />
    <p>Clicked hero:{{clicked}}</p>
  </div>
</template>

<script>
  import List from './list'
  export default {
    name: "functional",

      data(){
      return {
        list:['wonderWoman','IronMan'],
        clicked:''
      }
    },
    components:{
      List
    },
    methods: {
      handleClick() {
        console.log("nihao");
      }
    }
  }
</script>

<style scoped>

</style>
