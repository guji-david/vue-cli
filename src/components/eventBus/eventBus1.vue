<template>
  <div class="eventBus1">
    <h1>使用eventBus产生的效果1</h1>
    <div style="height: 30px">
      <input type="text" v-model="message">
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
  }
}
</script>


<style scoped>

</style>
