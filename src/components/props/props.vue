<template>
    <div>
      <baseInput
        :value="value"
        label="密码"
        placeholder="请填写密码"
        @input="handleInput"
       ></baseInput>
      <div @click="link()">链接</div>
      <child>
        <!--slot=one这个div会替换掉子组件里name="one"的slot标签-->
        <div slot="one">
          <span>one</span>
          <span>第一个</span>
        </div>
        <!--这个div没有用slot指定名字所以会替换掉子组件里没有name属性的slot标签-->
        <div>
          <span>此div没有slot</span>
        </div>
        <!--slot=two这个div会替换掉子组件里name="two"的slot标签-->
        <div slot="two">
          <span>two</span>
          <span>第二个</span>
        </div>
      </child>
    </div>
</template>

<script>
  import  baseInput from './baseInput.vue'
  import  child from './child.vue'
    export default {
      data() {
        return {
          value:'',//组件的value
        }
      },
      components:{
        baseInput,
        child
      },
      created(){
//        this.fetchPostList()
        this.getPost(this.$route.params.id)
      },
      watch: {
        searchInputValue:{
          handler: 'fetchPostList',
          immediate: true
        },
       /* '$route': {
          handler: 'resetData',
          immediate: true
        }*/
      },
      methods: {
        link(){
          this.$router.push( { name: 'Props', params: { id: 333 }} )
        },
        fetchPostList(){
            let num=1;
          num++;
          this.searchInput=num;
//          console.log('this.num------------'+num)
          return;
        },
        resetData() {
          this.getPost(this.$route.params.id)
        },
        getPost(id){
          console.log('this.id------------'+id)
        },
//        关于组件的方法
        handleInput(value){
            console.log('this.value outer'+value)
        }
      }
    }
</script>

<style>

</style>
