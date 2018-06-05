<template>
  <div class="EventsType">
    <ul>
      <li v-for="item in type" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EventsType',
  data () {
    return {
      type: []
    }
  },
  created () {
  // Пример вызова api метода из компонента
    this.api.getEventType()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        console.log(data)
        this.type = data
      })
  }
}
</script>