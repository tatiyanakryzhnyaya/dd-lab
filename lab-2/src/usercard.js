import $ from "jquery";
import c from './users.js';


let idGet = [];
let avatarGet = [];
let emailGet = [];
let phoneGet = [];
for(let x in c){
	 idGet [x] = Object.assign( c[x].id);
	 avatarGet [x] = Object.assign( c[x].avatar);
	 emailGet [x] = Object.assign( c[x].email);
	 phoneGet [x] = Object.assign( c[x].phone);
}

const id = Object.assign({}, idGet);
const avatar = Object.assign({}, avatarGet );
const email = Object.assign({}, emailGet );
const phone = Object.assign({}, phoneGet );
const use = {id, avatar, email, phone};

export default use