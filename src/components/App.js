import React from "react"
import Nav from "./Nav"
import Filter from "./Filter"
import AddHogForm from "./AddHogForm"
import HogList from "./HogList"
import HogDetails from "./HogDetails"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<main>
				<HogList hogs={ hogs }/>
				<HogDetails />
			</main>
		</div>
	);
}

export default App;
