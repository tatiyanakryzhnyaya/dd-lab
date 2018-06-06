<template>
  <div class="AllActivity">
    <input type="text" class="AllActivity__filter" placeholder="Поиск по имени"/>
    <div class ="AllActivity__fullDescription">
     <ul class="AllActivity__fullDescription__ul">
      <li class="AllActivity__fullDescription__ul__li" v-for="i in event" :key="i.id" v-bind:class="{ important: i.important}">
       
          <div class="AllActivity__fullDescription__ul__li__dateTime">
            <span class="AllActivity__fullDescription__ul__li__dateTime__time__p" >{{ i.event.date | myFilter }} &minus; </span> 
            <span class="AllActivity__fullDescription__ul__li__dateTime__date__p"> &nbsp;{{ i.event.time }}</span>
          </div>
          <EventsType :index="i.event.type-1" ></EventsType>
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
import EventsType from './EventsType'
import moment from 'moment'
export default {
  name: 'AllActivity',
  data () {
    return {
      event: [],
      count: 0,
      today: moment(new Date()),
      tomorrow: moment(new Date()).add(1, 'days')
    }
  },
  components: {
    EventsType
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
  }
}
</script>
<style lang="scss" >
.AllActivity{
  &__filter{
    padding: 10px;
    font-size: 16px;
  }
  display: flex;
  flex-basis:80%;
  flex-direction:column;
  padding: 20px;
  margin: 40px;
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
        .EventsType{
            height: max-content;
            padding: 3px;
            font-weight:bold;
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
    background:#f7a7a7;
    color:white;
    .AllActivity__fullDescription__ul__li__dateTime{
      background:white;
      color:black;
      height: max-content;
    padding: 3px;
    }
  }

}
</style>