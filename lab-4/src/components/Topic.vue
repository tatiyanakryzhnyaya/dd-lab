<template>
  <div class="Topic">
  <Event></Event>
  </div>
</template>
<script>
import Event from './Event'
import moment from 'moment'
export default{
  name: 'Topic',
  components: {
    Event
  },
  data () {
    return {
      event: [],
      today: moment(new Date()),
      tomorrow: moment(new Date()).add(1, 'days'),
      countToday: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.Topic{
  display:flex;

  flex-basis:80%;
  .Event{
    justify-content: space-evenly;
    display:flex;
    &__ulToday{
      display:flex;
    }
    &__ulTomorrow{
      display:flex;
    }
  }
}
</style>