import $ from "jquery";
import  name from './name_user.js';
import {addCard} from './addCard.js'
import {addList} from './addList.js'


(function (){

	let result = []; 
	let str_search;
	let time_res;
	let reg;
	$('.inp_search').keyup(function(event){
		search($(this));
	})

	function search(elem){
		str_search = $(elem).val();
		reg = new RegExp( "(" + str_search + ")+","i");
		$.each(name, function(key, val){
			var str = name[key]; 
			if(str.match(reg)){ 
				result.push(name[key].toString());
			}
		})
		addList(result);
	    result =[];
	}

})();