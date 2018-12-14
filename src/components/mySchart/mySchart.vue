<template>
  <div>
    <schart :canvasId="canvasId"
            :type="type"
            :width="width"
            :height="height"
            :data="data"
            :options="options"
    ></schart>
  </div>
</template>
<script>
  import schart from 'vue-schart';
  export default {
    data() {
      return {
        canvasId: 'myCanvas',
        type: 'pie',// bar line ring pie
        width: 500,
        height: 400,
        data: [
          {name: '2014', value: 1342},
          {name: '2015', value: 2123},
          {name: '2016', value: 1654},
          {name: '2017', value: 1795},
        ],
        options: {
          title: 'Total sales of stores in recent years'
        }
      }
    },
    components:{
      schart
    },
    mounted () {
        console.log($)
    }
  }
</script>
