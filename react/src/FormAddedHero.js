import React, { Component } from 'react';
import ButtonDefault from './ButtonDefault';
class FormHero extends Component {

	constructor (props){
		super(props);
		 this.state = {
			 valueName : '',
			 valueWhy: '',
			 urlPhoto:'',
			 hidden: false
		 };
	}
	changeNewName = (event) =>{
		this.setState({valueName: event.target.value});
	}
	changeNewWhy = (event) =>{
		this.setState({valueWhy: event.target.value})
	}
	changeNewPhoto = (event) =>{
		let file =event.target.files;
		let reader = new FileReader();
		reader.onload = (function() {
			return function() {
				let img = document.createElement('img');
				img.className = "form-added__img";
				img.setAttribute("src", reader.result);
				if( document.getElementsByClassName("form-added__img")[0] !== undefined){
					document.getElementsByClassName("form-added__photo")[0].replaceChild(img, document.getElementsByClassName("form-added__img")[0]);
				}
				else{document.getElementsByClassName("form-added__photo")[0].appendChild(img);}
			};
		})();
		reader.readAsDataURL(file[0]);
		this.setState({urlPhoto: event.target.value, hidden: true});
	}
	clear = () => {
		this.setState({valueName: "", valueWhy: "", urlPhoto: "", hidden:false});
	}

	validate = (obj, index) => {
		let count = 0;
		console.log(obj.photo);
		for(let key in obj){
			if(obj[key] == ""){
				count++;
				this.error(key);
			}else {
				this.setState({last: key});
				document.getElementsByClassName(key)[0].className = "form-added__new-hero " + key;
			}
		};
		if(count == 0){
			this.props.updateHeroesList(obj, index);
			this.clear();
			
		};
	}
	error = (empty) => {
		document.getElementsByClassName(empty)[0].className = "form-added__new-hero error " + empty;
		document.getElementsByClassName(empty)[0].placeholder = 'You did not fill out a required field';
		document.getElementsByClassName(empty)[0].focus();
	}
	
	render(){
		return (
			<div className="form-added">
				<label htmlFor="form-added__new-hero" className="label">The name of the hero you want to add</label>
				<input type="text" id="form-added__new-hero" className="form-added__new-hero hero" placeholder="Huge Jackman" onChange={this.changeNewName} value={this.state.valueName}/>
				<label htmlFor="form-added__why-he"  className="label">Why is it terrific?</label>
				<input type="text" id="form-added__why-he" className="form-added__new-hero text"  placeholder="He sings delightfully" onChange={this.changeNewWhy} value={this.state.valueWhy}/>
				<label htmlFor="form-added__photo-hero"  className="label">Url photo:</label>
				<input type="file" 
					id="form-added__photo-hero" 
					className="form-added__new-hero photo" 
					onChange={this.changeNewPhoto} 
					value={this.state.urlPhoto}
					accept="image/*,image/jpeg"
				/>
				<div className={!(this.state.hidden) ? 'none' : 'form-added__photo'}> 
					<p>Photo of your movie hero</p>
				</div>
				<ButtonDefault 
					value="Add Hero" 
					name={this.state.valueName} 
					why={this.state.valueWhy}
					clickHandler={this.validate}
					clear={this.clear}
				/>
			</div>
		);
	}
}

export default FormHero;