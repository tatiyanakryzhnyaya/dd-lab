import './main.css' // Любые ассеты испортируем прямо из JS. Главное чтобы был лоадер для этого типа файлов
import c from './users.js';
import  name from './name_user.js';
import { logger } from './logger' // ES6 Импорт из другого модуля приложения
import $ from "jquery";

let ul = document.createElement('ul');
let li = [];
for( let i  in name){
 li.push('<li class="name_user">'+ name[i] +'</li>');
}
li = li.join('');
$(li).appendTo($('.ul'));