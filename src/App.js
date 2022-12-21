// import { useState } from 'react';
import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			input: "",
		};
	}
	url = "https://jsonplaceholder.typicode.com/users";

	componentDidMount() {
		fetch(this.url)
			.then((res) => res.json())
			.then((users) =>
				this.setState(
					() => ({ monsters: users }),
					() => console.log(this.state)
				)
			);
	}

	render() {
		let myData;
		if (!this.state.input) {
			myData = this.state.monsters;
		} else {
			myData = this.state.monsters.filter(({ name }) =>
				name.includes(this.state.input)
			);
		}
		return (
			<div className="App">
				<p>search for a monster</p>
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(e) =>
						this.setState({
							input: e.target.value,
						})
					}
				/>
				<ul>
					{myData.map((monster, index) => (
						<li className="myLi" key={index}>
							{monster.name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
