<template>
    <div>
      我是自组件的原生内容
      <br>
      <div class="noneSlot">
        <slot></slot>
      </div>
      <div class="test-two">
        <slot name="two"></slot>
      </div>
      <div class="test-one">
        <slot name="one"></slot>
      </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {}
        },
        components: {},
        computed: {},
        mounted () {

        },
        methods: {}
    }
</script>

<style>
  .noneSlot{
    background: red;
  }
  .test-one{
    background: bisque;
  }
  .test-two{
    background: yellow;
  }
</style>
