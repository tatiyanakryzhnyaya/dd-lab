import React, { Component } from 'react';
import ButtonDefault from './ButtonDefault';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Heroes extends Component{
	constructor (props){
		super(props);
			this.state = {
				hidden: false,
				editNameValue : this.props.data.hero,
				editWhyValue :this.props.data.text,
				editPhoto: this.props.data.photo,
			};

	}

	toggleEdit = () =>{
		this.setState({hidden: !this.state.hidden});
	}

	editName = (event) =>{
		event.preventDefault();
		this.setState({editNameValue: event.target.value});
	}
	editWhy = (event) =>{
		event.preventDefault();
		this.setState({editWhyValue: event.target.value});
	}
	editPhoto = (event) =>{
		event.preventDefault();
		this.setState({editPhoto: event.target.value});
	}

	editAll = () => {
		let obj ={
			hero : this.state.editNameValue, 
			text : this.state.editWhyValue,
			photo : this.state.editPhoto
		};
		this.props.editHero(obj, this.props.index);
		this.setState({hidden: false });
	}

	render() {
		return (
			<li className="heroes-list__card">
				<img src={this.props.data.photo} className="heroes-list__photo"/>
				<span className="heroes-list__ditails">
					<p className="p">{this.props.index+1}. {this.props.data.hero}</p>
					<p className="p">{this.props.data.text}</p>
					<span className="heroes-list-button-group">
						<button className={!(this.state.hidden) ? "heroes-list__edit-hero" : "heroes-list__edit-hero -active"} onClick={this.toggleEdit}>Edit</button>
						<ButtonDefault class='fa fa-times' 
							addvalue="this.state.valueWhy" 
							clickHandler={this.props.deleteHero} 
							name={this.props.data.hero} 
							why={this.props.data.text}
							index={this.props.index}
						/>
					</span>
				</span>
				<div className={!(this.state.hidden) ? 'none': 'edit-block'}>
					<label htmlFor="edit-block__edit-name" className="label">Edit Name</label>
					<input className="edit-block__edit-name" value={this.state.editNameValue} onChange={this.editName}/>
					<label htmlFor="edit-block__edit-why" className="label"> and Why</label>
					<input className="edit-block__edit-why" value={this.state.editWhyValue} onChange={this.editWhy}/>
					<label htmlFor="edit-block__edit-photo" className="label"> and Photo</label>
					<input className="edit-block__edit-photo" value={this.state.editPhoto} onChange={this.editPhoto}/>
					<i className="fa fa-check" onClick={this.editAll}></i>
				</div>
				
			</li>
		);
	}
}


export default Heroes;