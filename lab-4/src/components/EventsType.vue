<template>
  <div class="EventsType" v-if="type.length !== 0 ">
    {{ type[index].name }}
  </div>
</template>

<script>
export default {

  name: 'EventsType',
  props: {
    index: Number,
    message: String
  },
  data () {
    return {
      type: []
    }
  },
  components: {
    Event
  },

  created () {
  // Пример вызова api метода из компонента
    this.api.getEventType()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        this.type = data
      })
  }
}
</script>

<style lang="scss">
  .EventsType{
    display: flex;
    justify-content: left;
    height: 30px;
  }
</style>
