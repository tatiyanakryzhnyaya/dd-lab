<template>
  <div class="Filter">
    <input type="text" class="AllActivity__filter" placeholder="Поиск по имени" v-model="message">{{message}}</input>
  </div>
</template>
<script>
export default {
	name: 'Filter'
}
</script>