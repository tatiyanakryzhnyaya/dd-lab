import $ from "jquery";
import  name from './name_user.js';
import {addCard} from './addCard.js'
let ul = document.createElement('ul');
let li = [];
for( let i  in name){
	li.push('<li class="name_user">'+ name[i] +'</li>');
}
li = li.join('');
$(li).appendTo($('.ul'));
$('.ul').on('click', 'li', function(){
		$('ul > li').filter('.active').removeClass('active');
		$(this).addClass('active');
		console.log($(this).index());
		addCard($(this).index()) ;
})

