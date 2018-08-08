import React, { Component } from 'react';

class ButtonDefault extends Component {
	renderClick = () => {
		let object ={
			hero : this.props.name,
			text :this.props.why,
			photo :this.props.photo,
		};
		let index = this.props.index;
		this.props.clickHandler(object, index);
		if(typeof this.props.clear !== 'undefined'){
			this.props.clear();
		}
	}

	render(){
		return (
			<div className="button-default">
				<button className="btn" onClick={this.renderClick}>
					<i className={this.props.class}></i>
					{this.props.value}
				</button>
			</div>
		);
	}
}

export default ButtonDefault;