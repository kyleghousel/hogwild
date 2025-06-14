import React, { useState } from "react"
import Nav from "./Nav"
import Filter from "./Filter"
import AddHogForm from "./AddHogForm"
import HogList from "./HogList"
import HogDetails from "./HogDetails"
import 'semantic-ui-css/semantic.min.css'

import hogs from "../porkers_data";

function App() {
	const [hogsList, setHogs] = useState(hogs);

	return (
		<div className="App">
			<Nav />
			<main>
				<HogList hogList={ hogsList }/>
				<HogDetails />
			</main>
		</div>
	);
}

export default App;
