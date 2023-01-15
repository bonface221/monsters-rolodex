import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/Search-box.component";

function App() {
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	const [input, setInput] = useState("");
	const url = "https://jsonplaceholder.typicode.com/users";

	const onSearchChange = (e) => setInput(e.target.value);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		let myData = monsters.filter(({ name }) => name.includes(input));
		setFilteredMonsters(myData);
	}, [monsters, input]);

	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
			<SearchBox onChange={onSearchChange} />
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

export default App;
