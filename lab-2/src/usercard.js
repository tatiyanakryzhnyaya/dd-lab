import $ from "jquery";
import json from './users.js';

//Такая штука была сделано потому так проще обращаться к элементам объекта
const id  = [], name  = [], avatar  = [], email  = [], phone  = [];
for(let x in json){
	 name  [x] =  json[x].name;
	 id  [x] =  json[x].id;
	 avatar  [x] =  json[x].avatar;
	 email  [x] =  json[x].email;
	 phone  [x] = json[x].phone;
}

const use = {name, id, avatar, email, phone};

export default use