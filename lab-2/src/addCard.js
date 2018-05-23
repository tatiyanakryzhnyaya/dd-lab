import $ from "jquery";
import c from './users.js';
import use from  './usercard.js'
import  name from './name_user.js';


	let content;
	
	if($('li').hasClass('.active')){
		 console.log("yes");
	}else{
		 content = '<div class=" card_user"><p>Пользователь не выбран</p></div>'
	}
	$(content).appendTo($('.second'));


export function addCard(index){
	$('.second').empty();
	content  = '<div class="card_user">\
					<div class="photo"><img src="'+use.avatar[index]+'"></div>\
					<div class ="active_name">'+name[index]+'</div>\
					<div class ="email">'+use.email[index]+'</div>\
					<div class ="phone">'+use.phone[index]+'</div>\
				</div>'
	console.log("yes");
	$(content).appendTo($('.second')).animate();
}