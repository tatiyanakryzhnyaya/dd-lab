<template>
  <div class="Event">
    <ul class="Event__ulToday Event__ul ">
    <h1 class="Event__title">Сегодня</h1>
      <li class="Event__ulToday__li Event__ul__li" v-for="i in event" :key="i.id" v-bind:class="[{ important: i.important}, { today: boolToday(i.event.date)}, { tomorrow: boolTomorrow(i.event.date)}]" 
      v-if="boolToday(i.event.date) && !boolTomorrow(i.event.date)">
      <Day :index="i.event.type-1" :date="i.event.date" :time="i.event.time" :name="i.person.name" :description="i.event.description" :job="i.person.job" :image="i.person.image" ></Day>
      </li>
    </ul>
    <ul class="Event__ulTomorrow Event__ul">
      <h1 class="Event__title">Завтра</h1>
      <li class="Event__ulTomorrow__li Event__ul__li" v-for="i in event" :key="i.id" v-bind:class="[{ important: i.important}, { today: boolToday(i.event.date)},{ tomorrow: boolTomorrow(i.event.date)}]" 
      v-if="!boolToday(i.event.date) && boolTomorrow(i.event.date)">
       <Day :index="i.event.type-1" :date="i.event.date" :time="i.event.time" :name="i.person.name" :description="i.event.description" :job="i.person.job" :image="i.person.image" ></Day>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import EventsType from './EventsType'
import Day from './Day'
export default {
  name: 'Event',
  data () {
    return {
      event: [],
      count: 0,
      today: moment(new Date()),
      tomorrow: moment(new Date()).add(1, 'days')
    }
  },
  components: {
    EventsType, Day
  },
  created () {
    this.api.getEvents()
      .then(({ data }) => {
        this.event = data
      })
  },
  filters: {
    myFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
  },
  methods: {
    str: function (value) {
      return '"' + value + '"'
    },
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
.Event{
	flex-basis:100%;
	&__ul{
		flex-basis:47%;
		&__li{
			background:white;
			list-style: none;
			display:flex;
			flex-basis:100%;
			padding:40px;
			margin:20px;

		}
	}
	&__title{
		border-bottom:1px solid;
		padding:15px 0;
		display: flex;
	}

}
.important{
	background:#f7a7a7;
	color:white;
}
</style>