<template>
	<div class="AllActivity">
	  <input type="text" class="AllActivity__filter" placeholder="Поиск по имени"></input>
	  <div class ="AllActivity__fullDescription">
	    <Event></Event>
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
  	padding: 40px 0;
  	flex-basis: 80%;
  	height: 35px;
  	display:flex; 
  	flex-direction: column; 	
  	&__filter{
      flex-basis: 100%;
      font-size: 16px;
      margin: 0 20px;
      padding: 10px 20px;
      border: 0.5px solid #3a3a3a;
      font-family: sans-serif;
  	}
  	&__filter:hover{
  		border:1px solid #55b2fe;
  	}
  	.Event{
  		&__ul{
  			&__li{
  				height: auto;
  				flex-basis:100%;
  				&__person{
  					margin-left:0;
  				}
				&__description{
					display:flex;
					text-align:left;
					margin-top:20px;
				}
				&__dateTime{
					width: max-content;
				    background: white;
				    color: black;
				    padding: 5px;
				    flex-direction: row-reverse;
				    margin: 0;
					&__date{
					  margin: 0 10px;
					}
					&__time{
				      font-size: inherit;
				      margin: 0 10px;
					  flex-basis: 50%;
					  flex: 0;
					}
					
				}
				.EventsType{
					justify-content: left;
				    flex-basis: 50%;
				    flex: 0;
				    flex-flow: column;
				}
			}
  		}
  	}
  }
</style>