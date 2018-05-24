import $ from "jquery";
import use from  './usercard.js'
import  name from './name_user.js';
import  './loader.js';


(function (){
	let content;
	if(!(Boolean ($('li').hasClass('.active')))){
		 content = '<div class=" card_user"><p>Пользователь не выбран</p></div>'
	}
	$(content).appendTo($('.second'));
})();

export function addCard(index){
	let content;
	$('.second').empty();
	content  = '<div class="card_user">\
					<div class="photo"><img src="'+use.avatar[index]+'"></div>\
					<div class ="active_name">'+use.name[index]+'</div>\
					<div class ="email">'+use.email[index]+'</div>\
					<div class ="phone">'+use.phone[index]+'</div>\
				</div>'
	
	$(content).appendTo($('.second'));
}