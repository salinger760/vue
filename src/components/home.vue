<template>
  <div>
    <img src="/images/color_analyzer.svg" alt="">
    <button class="home-button" @click="onClick()">{{text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'hoge'
    }
  },
  
  methods: {
    onClick() {
      this.text += 'hoge';
    }
  }
}
</script>

<style lang="stylus" scoped>

.home-button
  background-color blue
  border-radius 3px
  color: white;
  padding 3px

</style>
