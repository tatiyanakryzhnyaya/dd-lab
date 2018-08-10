import React, { Component } from 'react';

class ButtonDefault extends Component {
	renderClick = () => {
		let src;
		
		if(document.getElementsByClassName("form-added__img").length == 0){
			src ="";
		}else {
			src = document.getElementsByClassName("form-added__img")[0].getAttribute('src');
		}
		let object ={
			hero : this.props.name,
			text :this.props.why,
			photo :src,
		};
		let index = this.props.index;
		this.props.clickHandler(object, index);
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