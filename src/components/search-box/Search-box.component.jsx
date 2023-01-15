import React from "react";
import "./search-box.styles.css";

function SearchBox({ onChange }) {
	return (
		<input
			className="search-box"
			type="search"
			placeholder="search monsters"
			onChange={onChange}
		/>
	);
}

export default SearchBox;
