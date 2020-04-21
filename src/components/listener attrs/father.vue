<template>
  <div id="father">
    <child :tempdata="temp"
           :tempdata2="temp2"
           @fatherFn="tempFn"
           @fatherFn2="tempFn2"
           prop='$attrs不会传递child组件中定义的props值'></child>
  </div>
</template>
<script>
  import Child from './child'
  export default {
    name:'father',
    data() {
      return {
        temp: 'temp!',
        temp2: 'temp2!',
      }

    },
    components:{
      Child
    },
    methods: {
      tempFn: function(message) {
      },
      tempFn2: function(message) {
      }
    }
  }
</script>
