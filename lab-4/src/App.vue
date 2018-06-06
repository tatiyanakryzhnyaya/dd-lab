<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>

<script>
import Event from './components/Event'
import EventsType from './components/EventsType'
import SideBar from './components/SideBar'
export default {
  name: 'App',
  data () {
    return {
      events: []
    }
  },
  components: {
    Event, EventsType, SideBar
  }
}
</script>

<style>
*{
  box-sizing:border0box;
  margin:0;
  padding:0;
}
#app {
  background: #f8fdff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  padding-top: 30px;
}
</style>
