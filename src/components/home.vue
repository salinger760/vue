<template>
  <div>
    <svg class="hamburger" viewBox="0 0 22 15" role="img" v-on:click="openMenu()">
      <path d="M0 0h22v3H0zM0 6h22v3H0zM0 12h22v3H0z"></path>
    </svg>
    <div class="nav" v-bind:class='{expanded: hasExpanded}' >
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'hoge',
      hasExpanded: false
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

.hamburger 
  width: 1.375rem;
  height: .9375rem;

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
