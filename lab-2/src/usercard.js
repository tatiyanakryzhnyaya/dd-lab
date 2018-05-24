import $ from "jquery";
import json from './users.js';


let idGet = [];
let avatarGet = [];
let emailGet = [];
let phoneGet = [];
for(let x in json){
	 idGet [x] = Object.assign( json[x].id);
	 avatarGet [x] = Object.assign( json[x].avatar);
	 emailGet [x] = Object.assign( json[x].email);
	 phoneGet [x] = Object.assign( json[x].phone);
}

const id = Object.assign({}, idGet);
const avatar = Object.assign({}, avatarGet );
const email = Object.assign({}, emailGet );
const phone = Object.assign({}, phoneGet );
const use = {id, avatar, email, phone};

export default use