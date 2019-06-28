<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    
    <h1>TEST</h1>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="stylus" scoped>
@import './stylus/site'

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>