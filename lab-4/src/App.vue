<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
export default {
  name: 'App',
  components: {
    SideBar
  },
  data () {
    return {
      events: []
    }
  }
}
</script>

<style>
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
#app {
  background: #f8fdff;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  padding-top: 30px;
}
@media(max-width: 900px){
  #app{
    flex-direction: column;
  }
}
</style>
