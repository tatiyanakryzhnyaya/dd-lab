import $ from "jquery";
import c from './users.js';
import  name from './name_user.js';
import {addCard} from './addCard.js'



export function addList(array = name ){
	let ul = document.createElement('ul');
	$($('.ul')).empty();
	let li = [];
	for( let i  in array){
		li.push('<li class="name_user">'+ array[i] +'</li>');
	}
	li = li.join('');
	$(li).appendTo($('.ul'));
	$('.ul').on('click', 'li', function(){
			$('ul > li').filter('.active').removeClass('active');
			$(this).addClass('active');
			console.log($(this).index());
			addCard($(this).index()) ;
	})
}
addList();


	