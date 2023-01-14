// import { useState } from 'react';
import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/Search-box.component";

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
	onSearchChange = (e) =>
		this.setState({
			input: e.target.value,
		});

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
				<SearchBox onChange={this.onSearchChange}/>
				<CardList monsters= {myData}/>
			</div>
		);
	}
}

export default App;
