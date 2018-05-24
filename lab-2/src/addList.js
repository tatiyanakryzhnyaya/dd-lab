import $ from "jquery";
import  name from './name_user.js';
import {addCard} from './addCard.js'
import use from  './usercard.js'


export function addList(array = use.name,  key = use.id  ){
	let ul = document.createElement('ul');
	let id, i;
	$($('.ul')).empty();
	let li = [];

	for( i  in array){
		id = + key[i] - 1; // Вот это потому что id пользовтаеля на 1 меньше, чем в json указано
		li.push('<li class="name_user" id="'+ id +'">'+ array[i] +'</li>');

	}
	li = li.join('');
	$(li).appendTo($('.ul'));
	$('.ul').on('click', 'li', function(event){
		$('ul > li').filter('.active').removeClass('active');
		$(this).addClass('active');
		addCard($(this).attr('id')) ;
	})
}

addList();


	