<template>
  <div class="Topic">
    <h1 class="Topic__main" >Сегодня  {{getToday.length}} мероприятий </h1>
    <ul class="Topic__ulToday Topic__ul">
      <h1 class="Topic__title title__today">Сегодня <span class="count"> - {{getToday.length}}</span></h1>
      <li class="Topic__ulToday__li Topic__ul__li" v-for="i in getToday" :key="i.id" v-bind:class="[{ important: i.important}, { today: boolToday(i.event.date)}]">
      <Day :index="i.event.type-1" :date="i.event.date" :time="i.event.time" :name="i.person.name" :description="i.event.description" :job="i.person.job" :image="i.person.image" :country="i.person.country "></Day>
      </li>
    </ul>
    <ul class="Topic__ulTomorrow Topic__ul">
      <h1 class="Topic__title title__tomorrow">Завтра <span class="count"> - {{getTomorrow.length}}</span></h1>
      <li class="Topic__ulTomorrow__li Topic__ul__li" v-for="i in getTomorrow" :key="i.id" v-bind:class="[{ important: i.important},{ tomorrow: boolTomorrow(i.event.date)}]">
       <Day :index="i.event.type-1" :date="i.event.date" :time="i.event.time" :name="i.person.name" :description="i.event.description" :job="i.person.job" :image="i.person.image" ></Day>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import Day from './Day'
export default {
  name: 'Topic',
  components: {
    Day
  },
  filters: {
    myFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
  },
  data () {
    return {
      event: [],
      count: 0,
      today: moment(new Date()),
      tomorrow: moment(new Date()).add(1, 'days')
    }
  },
  computed: {
    getTomorrow () {
      return this.event.filter(x => this.boolTomorrow(x.event.date))
    },
    getToday () {
      return this.event.filter(x => this.boolToday(x.event.date))
    }
  },
  created () {
    this.api.getEvents()
      .then(({data}) => {
        this.event = data
      })
  },
  methods: {
    boolToday: function (val2) {
      if (this.today.format('DD.MM.YY') === moment(String(val2)).format('DD.MM.YY')) {
        return true
      } else {
        return false
      }
    },
    boolTomorrow: function (val2) {
      if (this.tomorrow.format('DD.MM.YY') === moment(String(val2)).format('DD.MM.YY')) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style  lang="scss" scoped>
.Topic{
  &__title{
    font-size: 22px;
    display: flex;
    border-bottom:1px solid;
    margin: 0 10px;
    .count{
      font-weight: normal;
      color: #80808094;
      margin-left: 10px;
    }
  }
  &__main{
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 30px;
    color: #80808094;
  }
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    &__ul{
      flex-basis:50%;
      &__li{
        display: flex;
        flex-direction: row-reverse;
        list-style:none;
        margin:40px;
        padding:20px;
      }
    }
}
.important{
  background:#f7a7a7;
  color:white;
}
@media(max-width:900px){
    .Topic{
      flex-basis: 100%;
      display: flex;
      flex-wrap: wrap;
      &__main{
       display: flex;
       flex-basis: 100%;
       flex-wrap: wrap;
       justify-content: center;
       font-size: 14px;
       margin-bottom: 40px;
       color: #80808094;
      }
      &__title{
       border-bottom: 1px solid;
       margin: 0 10px;
       display: flex;
       position: absolute;
       height: max-content;
       width: -webkit-fill-available;
    }
      &__ul{
        justify-content: start;
        flex-basis: 100%;
        display: flex;
        &__li{
          margin:10px;
          margin-top: 90px;
          margin-bottom: 70px;
          flex-basis: 40%;
        }
      }
    }
}

</style>
