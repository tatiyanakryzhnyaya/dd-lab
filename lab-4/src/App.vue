<template>
  <div id="app">
    <Event></Event>
    <router-view/>
  </div>
</template>

<script>
import Event from './components/Event'
import EventsType from './components/EventsType'
export default {
  name: 'App',
  data () {
    return {
      events: []
    }
  },
  components: {
    Event, EventsType
  }
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
