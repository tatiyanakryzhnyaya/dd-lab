import c from './users.js';

let name_string = [];
for(let x in c){
	 name_string [x] = Object.assign( c[x].name);
}
const name = Object.assign({}, name_string );

export default  name ;