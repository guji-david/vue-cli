<template>
  <label>
    <slot text="hello from child"></slot>
    {{ label }}
    <input
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
    <!--@focus=$emit('focus',$event)"-->
  </label>
</template>

<script>

    export default {
      props:['value'],
        data(){
            return {
              label:'label1111:',
            }
        },
        components: {},
        computed: {
          listeners() {
            return {
              ...this.$listeners,
              input: event =>
                this.$emit('input', event.target.value)
            }
          }
        },
        mounted () {

        },
        methods: {

        }
    }
</script>

<style>

</style>
