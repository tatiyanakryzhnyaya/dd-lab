import $ from "jquery";
import  name from './name_user.js';
import {addCard} from './addCard.js';
import {addList} from './addList.js';
import json from './users.js';
import use from  './usercard.js'

(function (){
	let result = [], str_search, id = [], regExp, index , field  ;
	
	$('.inp_search').keyup(function(event){
		str_search = $(this).val(); // получаем из инпута
		if(str_search.match(/:/i)){ // смотрим есть ли двоеточие в том что ввели
			regExp = /:/i ;
			index = regExp.exec(str_search).index; // запоминаем индекс вхождения знака, что бы разлить ключ и значение
			field = str_search.substring(0, index); //обрезается первыя часть поля
			str_search = str_search.substring( index+1, str_search.length);
		}
		search(str_search, field);
	})
   
	function search(str_search, field = 'name'){
		$.each(use[field], function(key, val){ 
			if( use[field][key].match(new RegExp( "(" + str_search + ")+","ig"))){ 
					result.push(name[key]);
				id.push(+key+1 ); 
			}
		})
		addList(result, id ); 
	    result =[], id = [] ; // обнуляем результат, чтобы при новом введении результат тоже обновлялся	
	}
})();