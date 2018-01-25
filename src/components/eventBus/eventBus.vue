<template>
  <div class="eventBus">
    <div style="height: 30px">
      <input type="text" id="message" v-model="message" @input="toBus">
      <div id="jsSort">
        <button @click="jsSort()">js sort方法根据数组中对象的某一个属性值进行排序</button>
      </div>
    </div>

    <eventBus1></eventBus1>
    <eventBus2></eventBus2>
  </div>

</template>

<script>
  import eventBus1 from "./eventBus1"
  import eventBus2 from "./eventBus2"

  function compare(property){
    return function(value1,value2){
      var value1 = value1[property];
      var value2 = value2[property];
      return value1>value2;
    }
  };

export default {
  name: 'eventBus',
  data () {
    return {
      message:'',
       arr: [
        {name:'zopp',age:0},
        {name:'gpp',age:18},
        {name:'aaa',age:1},
        {name:'aab',age:2},
        {name:'aba',age:3},
        {name:'bba',age:4},
        {name:'111',age:5},
      ]
    }
  },
  components: {
    eventBus1,
    eventBus2
  },
  created(){},
  mounted(){
  },
  methods:{
    toBus () {
      // 事件名字自定义，用不同的名字区别事件
        this.$root.Bus.$emit('on1', this.message)  },

    jsSort(){
        let message=$("#message");
      message.val("test")
      console.log(message);
      console.log(JSON.stringify(this.arr.sort(compare('name'))))
    }
  }
}
</script>


<style scoped>

</style>
