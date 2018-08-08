import React, { Component } from 'react';
import ButtonDefault from './ButtonDefault';
import axios from 'axios'
class FormHero extends Component {

	constructor (props){
		super(props);
		 this.state = {
			 valueName : '',
			 valueWhy: '',
			 clear: false,
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
		this.setState({urlPhoto: event.target.value});
		this.setState({hidden: true});
	}
	clear = () => {
		this.setState({valueName: ""});
		this.setState({valueWhy: ""});
		this.setState({urlPhoto: ""});
		this.setState({hidden:false});
	}
	render(){
		return (
			<div className="form-added">
				<label htmlFor="form-added__new-hero" className="label">The name of the hero you want to add</label>
				<input type="text" id="form-added__new-hero" className="form-added__new-hero" placeholder="Huge Jackman" onChange={this.changeNewName} value={this.state.valueName}/>
				<label htmlFor="form-added__why-he"  className="label">Why is it terrific?</label>
				<input type="text" id="form-added__why-he" className="form-added__new-hero"  placeholder="He sings delightfully" onChange={this.changeNewWhy} value={this.state.valueWhy}/>
				<label htmlFor="form-added__photo-hero"  className="label">Url photo:</label>
				<input type="text" id="form-added__photo-hero" className="form-added__new-hero" onChange={this.changeNewPhoto} value={this.state.urlPhoto}/>
				<div className={!(this.state.hidden) ? 'none' : 'form-added__photo'}> 
					<p>Photo of your movie hero</p>
					<img src={this.state.urlPhoto} className="form-added__img"/>
				</div>
				<ButtonDefault 
					value="Add Hero" 
					name={this.state.valueName} 
					why={this.state.valueWhy}
					photo={this.state.urlPhoto}
					clickHandler={this.props.updateHeroesList}
					clear={this.clear}
				/>
			</div>
		);
	}
}

export default FormHero;