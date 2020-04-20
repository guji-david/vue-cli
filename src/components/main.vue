<template>
  <div class="hello">
    <!-- 使用自定义组件 -->

    <h2>我自己的测试范围----------------------begin</h2>
    <ul>
      <transition name="bounce">
        <router-view></router-view>
      </transition>
      <li><router-link to="eventBus">eventBus</router-link></li>
      <li><router-link to="nuxt">vue的SEO优化(Nuxt.js)</router-link></li>
      <li><router-link to="promises">接口调试</router-link></li>
      <li><router-link to="ES6">ES6</router-link></li>
      <li><router-link to="vuex">Vuex</router-link></li>
      <li><router-link to="reisze">window.onresize的问题</router-link></li>
      <li><router-link to="mySchart">vue.js 的图表组件</router-link></li>
      <li><router-link to="props">父子组件及slot演示</router-link></li>
      <br>
      <li><router-link to="virtualList">virtualList虚拟列表</router-link></li>
      <li><router-link to="myModule">我的模块调试哦</router-link></li>
      <li><router-link to="functional">函数式组件</router-link></li>
      <li><router-link to="provideInject">provide/inject 组件的测试</router-link></li>
      <li><router-link to="form">自己的form表单</router-link></li>
      <li><router-link to="carousel">carousel</router-link></li>
      <li><router-link to="vmodel">组件的v-model</router-link></li>
    </ul>
    <h2>我自己的测试范围-----------------------end</h2>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>


    <!--<div>
      <img src="../assets/logo.png">
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
