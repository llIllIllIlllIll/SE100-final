<template>
  <div id="app">
    <a id="logo">
        <img src="./assets/miao-logo.png">
        <span id="name">Rwrite</span>
        <span id="intro">&nbsp; Help Children's Writing</span>
    </a>
    <router-link v-bind:to="'/'">主页</router-link>
    <router-link v-bind:to="'/recognize'">识别</router-link>
    <router-link v-bind:to="'/history'">历史记录</router-link>
    <router-link v-bind:to="'/about'">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
