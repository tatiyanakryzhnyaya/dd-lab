import $ from "jquery";
import  name from './name_user.js';
import {addCard} from './addCard.js';
import {addList} from './addList.js';
import json from './users.js';
import use from  './usercard.js'

(function (){
	let result = []; let str_search; let id = [];let reg, regExp, index , field  , str, key ;
	
	$('.inp_search').keyup(function(event){
		search($(this));
	})
   
	function search(elem){
		str_search = $(elem).val(); // получаем из инпута
		reg = new RegExp( "(" + str_search + ")+","i"); // регулярное выражение с там что ввели
		if(str_search.match(/:/i)){ 
			id = [];// смотрим есть ли двоеточие в том что ввели
			regExp = /:/i ;
			index = regExp.exec(str_search).index; // запоминаем индекс вхождения знака, что бы разлить ключ и значение
			field = str_search.substring(0, index); //обрезается первыя часть поля
			str = str_search.substring( index+1, str_search.length); //обрезается вторая часть поля
			reg = new RegExp( "(" + str + ")+","ig"); // заменяется регулярное выражение
            for(let key in use){ //ищем по всем ключам массива пользователя
				if(field == key){ // если ключ массива совпал делаем еще один обхад по масииву
					$.each(use[key], function(key1, val1){ // но теперь изпользуя конкретный ключ, который нужен
						if( use[key][key1].match(reg)){ 
							result.push(name[key1]);
							id.push(+key1+1); // ну и если значение совпало, пушим в результат
						}
					})
				}
			};
		}else{ 
			id = [];// ну и иначе, если нету двоеточия, то просто ищем по имени
			$.each(name, function(key, val){
				var str = name[key]; 
				if(str.match(reg)){ 
					result.push(name[key].toString());
					id.push(1+key); //тут на 1 больше, потому что в джсон индексация на 1 выше
				}
			})
	}
		addList(result, id ); // одновляем список, удаляя те ли в которых не нашли совпадения
		// id нужны так как по ним находится карточка пользователя
	    result =[]; // обнуляем результат, чтобы при новом введении результат тоже обновлялся
	
}

})();