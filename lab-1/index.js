"use strict";
$(document).ready(function(){

var token = '1730902956.08920f4.6c18cfddb89f420bb93a9d0d33858ad7', 
    userid =  1730902956, 
    num_photos = 30;
var  count, x, i;

var load_photo, load_text, tag, load_tags, comments, load_likeCount, date, year, month, time;

//Загружаем в info фото профиля, количество публикаций, имя пользователя
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token},
    success: function(response){
        	$('.info').append('<div class="photo_user"><img class="img"  src="'+ response.data.profile_picture +'"></div>\
        		<div class="name" >'+response.data.username+'</div>\
        		<div class="count"><small>Kоличество публикаций</small>' + response.data.counts.media + '</div>');
    },
    error: function(response){
      
    }
});



//Загружаются фотографии с описанием, количесвтом лайков, с тегами
function load_inst_photo(){
	var img = document.getElementsByTagName('img');  // Беру массив элементов из фотографий которые уже есть в документе
	count = 0;     			                     // счетчик, что бы подружать 5 фотографий
	$.ajax({
	    url: 'https://api.instagram.com/v1/users/self/media/recent',
	    dataType: 'jsonp',
	    type: 'GET',
	    data: {access_token: token, count: num_photos}, // в качестве параметра count передаю общее количество фотографий
	    success: function(data){
	        for( x in data.data ){
	        	if( x > img.length-2 && count!=5  ){ // Проверяю через count сколько подгрузилось фотографий, img.length в условии для того,
	        	// чтобы знать сколько фотографий уже подгружена и от этого индекса x начинать вставлять фотографии в документ 
					count++;
		        	 load_photo = '<div class="photo_inst">\
		        						<img class="img_inst" id="'+ x +' "src="'+data.data[x].images.standard_resolution.url+'">\
		        					 </div>';
		        	//загружаются описания под фото
		        	if(data.data[x].caption){
		        		 load_text = '<div class="photo_desc">\
		        							<p>' + data.data[x].caption.text + '</p>\
		        						</div>';
		        	} else{
		        		 load_text = '<div class="photo_desc" style="height:15px"></div>';  //если описания фото нет, то остается пустая строка
		        	}

		        	//Загружаются теги фотографии 
		        	 tag = data.data[x].tags;
		        	for( i in tag){ // перебираю массив, чтобы перед каждым хештэгом была #, потом применятется метод join, чтобы при 
		        		//добавлении массива tag в html не было запятых
		        		var tmp = tag[i];
		        		tag[i] = '#' + tmp;
		        	}
		        	 load_tags = '<div class="tag"><p>' + tag.join(" ") + '</p></div>';
		            //Количество комментариев 
		             comments = '<i class="fa fa-comment"></i>\
		            				<div class="count_comment">'+ data.data[x].comments.count+'</div>';
		        	//Загружаются лайки фото 
		        	if(data.data[x].likes.count){
		        		 load_likeCount = '<div class="like">\
		        								<i class="fa fa-heart"></i>\
		        								<div class="count_like">' + data.data[x].likes.count + '</div>'+comments+'</div>';
		        	}else{ 
		        		 load_likeCount = '<div class="like">\
		        								<i class="fa fa-heart"></i>\
		        								<div class="count_like">' +  "0" + '</div>\
		        							 </div>';  
		        	}
		        	//Загружаю дату и преобразую в нужый формат
		        	 date = new Date(data.data[x].created_time * 1000);
		             year = date.getFullYear();
		             month = date.getMonth()+1;
		            if (month < 10) {
		            	month = '0' + month
		            };
		             date = date.getDay() + 1;
		            if (date < 10) {
		            	date = '0' + date
		            };
		             time = '<div class="date">' + date +'.'+ month +'.'+year + '</div>';


                    // Вывод всего html и подруженным данных 
		            $('.posts').append('<div class="photo">' + load_photo +'\
		            						<div class="description">'+ load_likeCount  + load_text + load_tags + time +'</div>\
		            	               </div>');
		        }
		    }
	    },
	    error: function(data){
	       
	    }
	});
}

//Вызывается  функция выше при загрузки страницы
    load_inst_photo();

//Вызов функции подгружающей посты при нажатие на стрелку загрузки 
	$('.fa-angle-down').click(function(){
		load_inst_photo();
	});

//Событие, меняет прозрачность блока top. Не относится к ТЗ. На личное усмотрение.
$(window).on("scroll", function() {
	var scroll = window.pageYOffset;
     if(scroll >122){
     	$('.top').css('background','#2f4f4fc9');
     }
     if(scroll <122){
     	$('.top').css('background','darkslategrey');
     }
    });
	
	
	




});