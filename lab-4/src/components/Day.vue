<template>
  <div class="Day">
        <div class="Day__DaysType" v-if="types.length>0" >{{types[index].name}}</div>
          <div class="Day__ul__li__dateTime">
            <div class="Day__ul__li__dateTime__time"><p class="Day__ul__li__dateTime__time__p">{{ time }}</p></div>
            <div class="Day__ul__li__dateTime__date"><p class="Day__ul__li__dateTime__date__p">{{ date | myFilter}}</p></div>
          </div>
          <div class="Day__ul__li__description"><p>{{ description }}</p></div>
          <div class="Day__ul__li__person">
            <img class="Day__ul__li__person__img" v-bind:src=" image" />
            <div>
              <div class="Day__ul__li__person__name">{{ name }}</div>
              <div class="Day__ul__li__person__job">{{ job }}</div>
            </div>
       </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Day',
  props: ['index', 'time', 'date', 'name', 'job', 'image', 'description'],
  data () {
    return {
      event: [],
      count: 0,
      types: []
    }
  },
  mounted () {
    this.type()
  },
  filters: {
    myFilter: function (value) {
      return moment(String(value)).format('DD.MM.YY')
    }
  },
  methods: {
    type: function () {
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
.DaysType{
  font-weight:bold;
}
.important{
  .Day__ul__li__dateTime__time__p{
    color:white;
  }
  .Day__ul__li__dateTime__date__p{
    color:grey;
  }
  .Day__ul__li__person__job{
    color:#ffffff6b;
  }
  .DaysType{
    color:white;
  }
}
.Day{
  &__ul{
    &__li{
      &__description{
        display:none;
      }
      &__person{
        flex-basis:100%;
        display:flex;
        align-items: flex-end;
        flex:1;
        &__img{
          border: 1px solid #cdcaca45;
          background:white;
          padding:1px;
          margin-right:10px;
        }
        &__job{
          color:#7575758f;
          text-align: left;
        }
        &__name{
          text-align: left;
        }
      }
      &__dateTime{
        margin:10px;
        display:flex;
        justify-content:center;
        flex-direction: column;
        &__time{
          &__p{
            margin:5px;
            font-size:30px;
            font-weight: bold;
          }
        }
        &__date{
          &__p{
            margin:5px;
            font-size:18px;
            color: grey;
          }
        }
      }
    }
  }
}
</style>
