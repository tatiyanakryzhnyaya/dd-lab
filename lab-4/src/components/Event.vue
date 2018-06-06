<template>
  <div class="Event">
    <ul class="Event__ul">
      <li class="Event__ul__li" v-for="i in event" :key="i.id" v-bind:class="{important: i.important}">
      <EventsType :index="i.event.type-1"></EventsType>
          <div class="Event__ul__li__dateTime">
            <div class="Event__ul__li__dateTime__time"><p class="event__ul__li__dateTime__time__p">{{i.event.time}}</p></div>
            <div class="Eevent__ul__li__dateTime__date"><p class="event__ul__li__dateTime__time__p">{{i.event.date | myFilter}}</p></div>
          </div>
          <div class="Event__ul__li__person">
            <img class="Event__ul__li__person__img" v-bind:src="i.person.image" />
            <div>
            <div class="Event__ul__li__person__name">{{ i.person.name }}</div>
            <div class="Event__ul__li__person__job">{{ i.person.job }}</div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import EventsType from './EventsType'
export default {
  name: 'Event',
  data () {
    return {
      event: []
    }
  },
  components: {
    EventsType
  },
  created () {
    this.api.getEvents()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        console.log(data)
        this.event = data
      })
  },
  filters: {
    myFilter: function (value) {
      return moment(String(value)).format('MM.DD.YY')
    }
  }
}
</script>
<style  lang="scss" >
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box
  }
  .Event{
    display:flex;
    justify-content: flex-end;
    background:#ecf0fc;
    flex-basis: 80%;
    &__ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      
      &__li{
        background:white;
        list-style:none;
        flex-basis: 300px;
        border:1px solid black;
        display: flex;
        flex-direction:column;
        height: 290px;
        margin:20px;
        padding:20px; 
          &__dateTime{
            display:flex;
            flex-direction:column;
            &__time{
              font-size: 33px;
              font-weight: bold;
              margin: 10px;
              &__p{
                margin:0;
              }
            }
            &__date{
              font-weight: bold;
              color: grey;
            }
          }
          &__person{
            margin: auto 0 0 0;
            align-items: center;
            font-size: 12px;
            display: flex;
            flex-direction: row;
            margin-left: 10px;
            &__img{
              background: white;
              border: 1px solid white;
              margin-right:20px;
            }
            &__name{
              display: flex;
              font-weight: bold;
            }
            &__job{
              text-align: left;
            }
          }
      }
        .important{
          background:#e38b8b;
          color:white;
        }
    }
  }
</style>