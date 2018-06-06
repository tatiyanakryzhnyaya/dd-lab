<template>
  <div class="SideBar">
	<ul class=SideBar__ul>
      <li class="topic"><router-link to="/" exact>Актуальное</router-link></li>
      <li class="all"><router-link to="/all" exact>Все мероприятия</router-link></li>
	</ul>
  </div>
</template>

<script>
import EventsType from './EventsType'
export default {
	name: 'SideBar'
}
</script>
<style lang="scss">
  .SideBar{
  	flex-basis:20%;
  	&__ul{
  		display:flex;
  		flex-direction: column;
  	}
  	.topic{
  		flex-basis:100%;
  		display:flex;
  		justify-content:center;
  	}
  	.all{
  		flex-basis:100%;
  		display:flex;
  		justify-content:center;
  	}
  }
</style>