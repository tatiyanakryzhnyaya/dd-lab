<template>
  <div class="Day">
    <div class="top">
      <div class="DaysType" v-if="types.length>0" >{{types[index].name}} </div>
       <div class="btn"><icon name="times" v-on:click="deleteEvent(i.id)"></icon></div>
    </div>
    <div class="dateTime">
      <div class="time"><p class="p">{{ time }}</p></div>
      <div class="date"><p class="p">{{ date | myFilter}}</p></div>
    </div>
    <div class="description"><p>{{ description }}</p></div>
    <div class="person">
      <img class="img" v-bind:src=" image" />
      <div>
        <div class="name">{{ name }}</div>
        <div class="job">{{ job }} {{country}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import moment from 'moment'
export default {
  name: 'Day',
  filters: {
    myFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
  },
  components: {
    Icon
  },
  props: {
    index: Number,
    time: String,
    date: String,
    name: String,
    job: String,
    image: String,
    description: String,
    country: String
  },
  data () {
    return {
      event: [],
      count: 0,
      types: []
    }
  },
  mounted () {
    this.$_Day_type()
    this.load()
  },
  methods: {
    deleteEvent: function (id) {
      this.api.eventDelete(id)
        .then(this.load())
    },
    load: function () {
      this.api.getEvents()
        .then(({ data }) => {
          this.event = data
        })
    },
    $_Day_type: function () {
      this.api.getEventType()
        .then(({ data }) => {
          this.types = data
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.Day{
  display:flex;
  flex-basis:100%;
  flex-direction:column;
}
.top{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50px;
  margin-bottom: 10px;
  justify-content: space-between;

}
.DaysType{
  font-weight:bold;
}

.Day{
      .description{
        display:none;
      }
      .person{
        flex-basis:100%;
        display:flex;
        align-items: flex-end;
        .img{
          border: 1px solid #cdcaca45;
          background:white;
          padding:1px;
          margin-right:10px;
        }
        .job{
          color:#7575758f;
          text-align: left;
        }
        .name{
          text-align: left;
        }
      }
      .dateTime{
        margin:10px;
        display:flex;
        justify-content:center;
        flex-direction: column;
        .time{
          .p{
            margin:5px;
            font-size:30px;
            font-weight: bold;
          }
        }
        .date{
          .p{
            margin:5px;
            font-size:18px;
            color: grey;
          }
        }
      }
}
</style>
