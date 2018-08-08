import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class EditBlock extends Component{
	render(){
		return(
			<div className={!(this.props.classEdit) ? 'none': 'edit-block'}>
				<label htmlFor="edit--name edit" className="label">Edit Name</label>
				<input className="edit-name edit" value={this.props.editNameValue} onChange={this.editName}/>
				<label htmlFor="edit-why edit" className="label"> and Why</label>
				<input className="edit-why edit " value={this.props.editWhyValue} onChange={this.editWhy}/>
				<label htmlFor="edit-photo edit" className="label"> and Photo</label>
				<input className="edit-photo edit" value={this.state.editPhoto} onChange={this.editPhoto}/>
				<i className="fa fa-check" onClick={this.editAll}></i>
			</div>
		)
	}
}

export default EditBlock