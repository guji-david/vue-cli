<template>
  <div id="child">
    <son v-bind="$attrs" v-on="$listeners"></son>
  </div>
</template>
<script>
  import Son from './son'
  export default {
    name:'child',
    components: {Son},
    // props: { 'prop' },
    data() {
      return {}
    },
    mounted() {
      // 结果显示为$attrs.temp，不包含prop
      console.log(this.$listeners)
    },
    methods: {}
  }
</script>
