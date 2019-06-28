<template>
  <div>
    <h1>About</h1>
    <router-view/>
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
      this.text += 'hoge'
    }
  }
}
</script>

<style lang="stylus" scoped>

.home-button
  background-color blue
  border-radius 3px
  color: white
  padding 3px

.nav 
  background-color: rgba(0,0,0,.7)
  bottom: 0
  left: 0
  height: 100%
  padding: 30px
  position: fixed
  top: 0
  right: 0
  z-index: 1
  
  &.expanded 
    overflow: auto
    transition: opacity .25s 0s cubic-bezier(0,0,.2,1)
  
  
  &:not(.expanded) 
    opacity: 0
    transition: visibility 0s .2s,opacity .2s 0s cubic-bezier(.4,0,.6,1)
    visibility: hidden
  
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active 
      color: #42b983

</style>
