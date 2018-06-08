<template>
  <div class="AllActivity" >
    <h1 class="main">Сегодня {{getToday.length}} мероприятий</h1>
    <input type="text" class="filter" v-model="message" placeholder="Поиск по имени"/>
    <div class ="fullDescription" >
      <ul class="ul" v-if=" event.length > 0">
        <li class="li"   v-for="i in getName" :key="i.id" v-bind:class="{ important: i.important}">
          <div class="dateTime">
            <span class="time p">{{i.event.date | dataFilter}} &minus; </span>
            <span class="date p"> &nbsp;{{i.event.time}}</span>
          </div>
          <div class="EventsType" v-if="types.length>0">{{types[i.event.type-1].name}}</div>
          <div class="btn"><button class="delete" v-on:click="deleteEvent(i.id)">Удалить</button></div>
          <div class="description">
            <p class="p">{{i.event.description }}</p>
          </div>
          <div class="person">
            <img class="img" v-bind:src=" i.person.image" />
            <div>
              <div class="name">{{ i.person.name }}</div>
              <div class="job">{{  i.person.job }} {{ i.person.country}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'AllActivity',
  filters: {
    dataFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
  },
  data () {
    return {
      message: '',
      types: [],
      event: [],
      count: 0,
      today: moment(new Date()),
      tomorrow: moment(new Date()).add(1, 'days')
    }
  },
  computed: {
    getToday () {
      return this.event.filter(x => this.boolToday(x.event.date))
    },
    getName () {
      return this.event.filter(x => this.boolName(x.person.name, this.message))
    }
  },
  mounted () {
    this.load()
    this.type()
  },

  methods: {
    boolToday: function (val2) {
      if (this.today.format('DD.MM.YY') === moment(String(val2)).format('DD.MM.YY')) {
        return true
      } else {
        return false
      }
    },
    boolName: function (value, message) {
      let reg = new RegExp('(' + message + ')+', 'ig')
      if (value.match(reg)) {
        return true
      } else {
        return false
      }
    },
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
    type: function () {
      this.api.getEventType()
        .then(({ data }) => {
          this.types = data
        })
    }
  }
}
</script>
<style lang="scss" >
.AllActivity{
  .main{
    font-size: 15px;
    color: gray;
    margin-bottom: 20px;
  }
  .filter{
    padding: 10px;
    font-size: 16px;
  }
  display: flex;
  flex-basis:80%;
  flex-direction:column;
  padding:20px;
  padding-top: 0;
  margin: 40px 20px;
  margin-top: 10px;
  .fullDescription{
    display:flex;
    .ul{
      padding:0;
      .li{
        background:white;
        margin: 20px 0;
        padding: 20px;
        flex-wrap: wrap;
        flex-direction: row;
        display:flex;
        list-style:none;
        .person{
          display: flex;
          align-items: flex-end;
        }
        .dateTime{
          margin-right:20px;
          display:flex;
          flex-direction:row;
          .time{
            .p{
              margin:0;
            }
          }
          .date{
            .p{
              font-weight:bold;
            }
          }
        }
        .delete{
          background: white;
          border: none;
          color: black;
          font-weight: bold;
          cursor:pointer;
          &:hover{
            color:grey !important;
          }
        }
        .EventsType{
            height: max-content;
            font-weight:bold;
            margin-right:20px;
          }
        .description{
          text-align: left;
          margin-top::10px;
        }
        .person{
          margin-top:20px;
          flex-basis: 100%;
          .name{
            display: flex;
          }
          .job{
            color:#7575758f;
                font-size: 13px;
          }
          .img{
            border: 1px solid #cdcaca45;
            background:white;
            padding:1px;
            margin-right:10px;
          }
        }
      }
    .important{
    .delete{
      background:#f7a7a7;
      color:white;
      padding: 4px;
    }
    background:#f7a7a7;
    color:white;
    .dateTime{
      background:white;
      color:black;
      height: max-content;
      padding: 3px;
    }
    .EventsType{
      padding: 3px;
    }
  }
    }
  }

}
</style>
