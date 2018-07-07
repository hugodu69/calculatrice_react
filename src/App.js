import React, { Component } from 'react';
import './App.css';
import Bouton from './components/bouton';

class App extends Component {
	
	state = {
		input: "",
		total: "",
		wait: "",
		sign: ""
	}

	reset = () => {this.setState({input:""})}

	clickButton = (e) => {
		console.log(e.target.value)
		const tatar = e.target.value;
		const inpuput = parseInt(this.state.input);
		const affich = parseInt(this.state.input + tatar);
		let store = this.state.total;
		const sign = this.state.sign;
		const wait = parseInt(this.state.wait);

		if(!isNaN(tatar) || tatar===","){
			wait===inpuput ?
			this.setState({input: tatar}) :
			this.setState({input: affich});
		}
		else{
			if(sign==="+") store = wait + affich;
			if(sign==="-") store = wait - affich;
			if(sign==="*") store = wait * affich;
			if(sign==="/") store = wait / affich;
			this.setState({total:store, sign:tatar, wait:inpuput});
			if(tatar==="="){
				this.setState({input:store, wait:""})}
		}
	}

  render() {
    return (
			<div>
				<Bouton btn={this.clickButton}/>
				<input type="text" placeholder="total" value={this.state.input}/>
				<input type="button" value="reset" onClick={this.reset}/>
      </div>
    );
  }
}

export default App;
