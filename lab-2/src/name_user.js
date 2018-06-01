import json from './users.js';

let name  = [];
for(let x in json){
	 name[x] = Object.assign( json[x].name);
}

export default  name;