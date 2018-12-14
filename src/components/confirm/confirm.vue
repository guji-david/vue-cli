<template>
  <transition name="mask-bg-fade">
    <div class="mask" v-show="show">
      <div class="mask_bg"></div>
      <transition name="slide-fade">
        <div class="modelBox" v-show="show">
          <div class="tipIcon" v-bind:class="confirmModalOptions.type||'warning'"></div>
          <div class="closeModel" v-on:click="closeModel()"></div>
          <div class="title">{{confirmModalOptions.title || "提示"}}</div>
          <div class="message textCenter">{{confirmModalOptions.message || " "}}</div>
          <div class="model_btnBox">
            <button class="dh_button_default2" v-on:click="confirmCancel()">
              {{confirmModalOptions.btnCancelText || "取消"}}
            </button>
            <button class="dh_button_blue" v-on:click="confirmSubmit()">
              {{confirmModalOptions.btnSubmitText || "确定"}}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
  export default {
    props: ["confirmModalOptions"],
    data() {
      return {
        show: false,   // 是否显示模态框
      }
    },
    methods: {
      closeModel: function () {
        this.show = false;
      },
      showModel: function () {
        this.show = true;
      },
      confirmCancel: function () {
        this.show = false;
        if(typeof (this.confirmModalOptions.btnCancelFunction)==='function'){
          this.confirmModalOptions.btnCancelFunction()
        }
      },
      confirmSubmit: function () {
        this.show = false;
        if(typeof (this.confirmModalOptions.btnSubmitFunction)==='function'){
          this.confirmModalOptions.btnSubmitFunction()
        }
      }
    }
  }
</script>
<style scoped>

</style>
