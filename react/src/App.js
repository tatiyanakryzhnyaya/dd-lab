import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeroesList from './HeroesList';
import FormAddedHero from './FormAddedHero';
import './app/scss/styles.scss';




class App extends Component {
	constructor (props){
		super(props);
			this.state = {
				heroes : [
					{
						hero:'Lorem Ipsum',
						text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						photo: 'https://picsum.photos/200/300/?(random+5)'
					},
					{
						hero: 'Sed ut perspiciatis',
						text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						photo:'https://picsum.photos/200/300/?(random+1)'
					},

				 ],
				action : '',
				visible: false,
			};

	}
	
	updateHeroesList = (obj) => {
		let newArray = this.state.heroes;
		newArray.push(obj);
		this.setState({heroes : newArray});
		this.setState({action :''});
		this.setState({visible: false});
	}
	
	deleteHero = (obj, index) => {
		let newArray = this.state.heroes;
		newArray.splice(index, 1);
		this.setState({heroes : newArray});
		this.setState({action :'You deleted your favorite hero "' + obj.hero+'"'});
		this.setState({visible: true});
	}

	editHero = (obj, index) => {
		let newArray = this.state.heroes;
		newArray.splice(index, 1, obj);
		this.setState({heroes : newArray});
		this.setState({action :'You changed the hero nember ' + (index+1)});
		this.setState({visible: true});
	}

	render() {
		let hero;
		let data = this.state.heroes;
		let deleteHero = this.deleteHero;
		let action = this.state.action;
		let editHero = this.editHero;
		if (data.length > 0){
			hero = data.map(function(item, index){
				return (
					<HeroesList key={index}
						data={item} 
						deleteHero={deleteHero} 
						index={index}
						editHero={editHero}
					/>
				);
			})
		} else {
			hero = "You have not added any heroes yet";
		}
		
		return(
			<div className="App">
				<div className="content">
					<div  className={(this.state.visible) ? 'action-with-content': ''}>{action}</div>
					<ul className="heroes-list">
						{hero}
					</ul>
				</div>
				<div className="sidebar">
					<FormAddedHero updateHeroesList={this.updateHeroesList}/>
				</div>
				
			</div>
		)
	}
}
export default App;
