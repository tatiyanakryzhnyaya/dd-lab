<template>
	<div class="AllActivity">
	  <input type="text" class="AllActivity__filter" placeholder="Поиск по имени"></input>
	  <div class ="AllActivity__fullDescription">
	    <Event ></Event>
	  </div>
	</div>
</template>
<script>
import Event from './Event'
 export default {
   name: 'AllActivity',
   components: {
   	Event
   }
 }
</script>
<style lang="scss">
  .AllActivity{
  	flex-basis: 80%;
  	display:flex; 
  	flex-direction: column; 	
  	&__filter{
      flex-basis: 100%;
      height: 30px;
      margin: 20px;
      padding: 0 20px 0 20px;
  	}
  }
</style>