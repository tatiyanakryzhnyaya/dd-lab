<template>
  <div class="event">
    <ul class="event__ul">
      <li class="event__ul__li" v-for="i in event" :key="i.id">
          <img class="event__ul__li__img" v-bind:src="i.person.image" />
          <div class="event__ul__li__person">
            <div class="event__ul__li__person__name">{{ i.person.name }}</div>
            <div class="event__ul__li__person__job">{{ i.person.job }}</div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Event',
  data () {
    return {
      event: []
    }
  },
  created () {
    this.api.getEvents()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        console.log(data)
        this.event = data
      })
  }
}
</script>
<style lang="scss">
  .event{
    display:flex;

    &__ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &__li{
      	list-style:none;
        flex-basis: 300px;
        background: red;
        display: flex;
        align-items: flex-end;
        height: 290px;
        margin:20px;
        padding:20px;       

          &__img{
            background: white;
            border: 1px solid white;
          }
          &__person{
          	font-size: 12px;
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            &__name{
              display: flex;
              font-weight: bold;
            }
          }
       }
    }
  }
</style>