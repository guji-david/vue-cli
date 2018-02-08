<template>
    <div class="">
      <div>
        <h1>{{useName}}</h1>
        <div  @click="changeName"> change to json</div>
        <h1>增加h2 展示 localJobTitle</h1>
        <h2>{{localJobTitle}}</h2>
      </div>
      <div>
        <span v-text="num"></span> <span @click="add()">add</span><span @click="desc()">desc</span>
        <span v-text="navs"></span>
      </div>

    </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations}from'vuex'
    export default {
      data(){
            return {}
        },
      computed: {
        ...mapState({
          num: state => state.moduleB.num,
          navs: state => state.moduleB.navs
        }),
        // computed属性，从store 中获取状态state，不要忘记login命名空间。
        useName: function() {
            return this.$store.state.login.useName
        },
        // mapGeter 直接获得全局注册的getters
         ...mapGetters(["localJobTitle"])
      },
      components: {},
        mounted () {
          //触发一下函数使加载页面时载入
          this.getData()
        },
        methods: {

          //只用mapState  通过$store.commit触发mutation
          add(){this.$store.commit('add',{n:10})},
          desc(){this.$store.commit('desc',{n:10})},
          //使用mapAction mapMutation
          ...mapMutations({
//            add:'add()',
          }),
          //getData:function () {this.$store.dispatch('getNavs')}
          ...mapActions({//触发异步操作
            getData:'getNavs'
          }),
          // 和没有modules的时候一样，同样的方式dispatch action
          changeName() {
              this.$store.dispatch("changeName", "Jason111")   }
        }
    }
</script>

<style>

</style>
