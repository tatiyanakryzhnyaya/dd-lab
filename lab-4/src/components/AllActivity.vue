<template>
  <div class="AllActivity" >
    <h1 class="AllActivity__main">Сегодня {{getToday.length}} мероприятий</h1>
    <input type="text" class="AllActivity__filter" v-model="message" placeholder="Поиск по имени"></input>
    <div class ="AllActivity__fullDescription" v-if="!message">
      <ul class="AllActivity__fullDescription__ul">
        <li class="AllActivity__fullDescription__ul__li" v-if=" event.length > 0"  v-for="i in event" :key="i.id" v-bind:class="{ important: i.important}">
          <div class="AllActivity__fullDescription__ul__li__dateTime">
            <span class="AllActivity__fullDescription__ul__li__dateTime__time__p">{{i.event.date | dataFilter}} &minus; </span>
            <span class="AllActivity__fullDescription__ul__li__dateTime__date__p"> &nbsp;{{i.event.time}}</span>
          </div>
          <div class="EventsType" v-if="types.length>0">{{types[i.event.type-1].name}}</div>
          <div class="btn"><button class="delete" v-on:click="del(i.id)" >Удалить</button></div>
          <div class="AllActivity__fullDescription__ul__li__description">
            <p class="AllActivity__fullDescription__ul__li__description__p">{{i.event.description }}</p>
          </div>
          <div class="AllActivity__fullDescription__ul__li__person">
            <img class="AllActivity__fullDescription__ul__li__person__img" v-bind:src=" i.person.image" />
            <div>
              <div class="AllActivity__fullDescription__ul__li__person__name">{{ i.person.name }}</div>
              <div class="AllActivity__fullDescription__ul__li__person__job">{{  i.person.job }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class ="AllActivity__fullDescription" v-else>
      <ul class="AllActivity__fullDescription__ul">
        <li class="AllActivity__fullDescription__ul__li" v-if=" event.length > 0"  v-for="i in getName" :key="i.id" v-bind:class="{ important: i.important}">
          <div class="AllActivity__fullDescription__ul__li__dateTime">
            <span class="AllActivity__fullDescription__ul__li__dateTime__time__p">{{i.event.date | dataFilter}} &minus; </span>
            <span class="AllActivity__fullDescription__ul__li__dateTime__date__p"> &nbsp;{{i.event.time}}</span>
          </div>
          <div class="EventsType" v-if="types.length>0">{{types[i.event.type-1].name}}</div>
          <div class="btn"><button class="delete" v-on:click="del(i.id)" >Удалить</button></div>
          <div class="AllActivity__fullDescription__ul__li__description">
            <p class="AllActivity__fullDescription__ul__li__description__p">{{i.event.description }}</p>
          </div>
          <div class="AllActivity__fullDescription__ul__li__person">
            <img class="AllActivity__fullDescription__ul__li__person__img" v-bind:src=" i.person.image" />
            <div>
              <div class="AllActivity__fullDescription__ul__li__person__name">{{ i.person.name }}</div>
              <div class="AllActivity__fullDescription__ul__li__person__job">{{  i.person.job }}</div>
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
  components: {
    Event
  },
  mounted () {
    this.load()
    this.type()
  },
  filters: {
    dataFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
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
      console.log(message)
      let reg = new RegExp('(' + message + ')+', 'ig')
      if (value.match(reg)) {
        return true
      } else {
        return false
      }
    },
    del: function (id) {
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
  },
  computed: {
    getToday () {
      return this.event.filter(x => this.boolToday(x.event.date))
    },
    getName () {
      return this.event.filter(x => this.boolName(x.person.name,this.message))
    }
  }
}
</script>
<style lang="scss" >
.AllActivity{
  &__main{
    font-size: 15px;
    color: gray;
    margin-bottom: 20px;
  }
  &__filter{
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
  &__fullDescription{
    display:flex;
    &__ul{
      padding:0;
      &__li{
        background:white;
        margin: 20px 0;
        padding: 20px;
        flex-wrap: wrap;
        flex-direction: row;
        display:flex;
        list-style:none;
        &__person{
          display: flex;
          align-items: flex-end;
        }
        &__dateTime{
          margin-right:20px;
          display:flex;
          flex-direction:row;
          &__time{
            &__p{
              margin:0;
            }
          }
          &__date{
            &__p{
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
        &__description{
          text-align: left;
          margin-top::10px;
        }
        &__person{
          margin-top:20px;
          flex-basis: 100%;
          &__name{
            display: flex;
          }
          &__job{
            color:#7575758f;
                font-size: 13px;
          }
          &__img{
            border: 1px solid #cdcaca45;
            background:white;
            padding:1px;
            margin-right:10px;
          }
        }
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
    .AllActivity__fullDescription__ul__li__dateTime{
      background:white;
      color:black;
      height: max-content;
      padding: 3px;
    }
    .EventsType{
      padding: 3px;
    }
  }
.none{
  display:none;
}
}
</style>
