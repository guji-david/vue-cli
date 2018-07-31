<template>
    <div class="">

    </div>
</template>

<script>
    export default {
      data(){
            return {
              screenWidth: document.body.clientWidth   // 这里是给到了一个默认值 （这个很重要）
            }
        },
      watch: {
        screenWidth (val) {
          if (!this.timer) {
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function () {
              // that.screenWidth = that.$store.state.canvasWidth
              console.log('that.screenWidth-----------------')
              console.log(that.screenWidth)
              that.init()
              that.timer = false
            }, 400)
          }
        }
      },
      mounted () {
        const that = this;
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth;
            that.screenWidth = window.screenWidth
          })()
        }
        },
      methods:{
        init(){

        }
    }
    }
</script>

<style>

</style>
