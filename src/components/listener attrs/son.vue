<template>
  <div id="son">{{ $attrs.tempdata }}
    {{ $attrs.tempdata2 }}
  </div>
</template>
<script>
  export default {
    name:'son',
    prop: {},
    data() {

      return {}
    },
    mounted() {
      this.$emit('fatherFn','最深层组件的信息提交')
    }
    ,
    methods: {
    }
  }
  </script>
