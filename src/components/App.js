import React, { useState } from "react"
import Nav from "./Nav"
import AddHogForm from "./AddHogForm"
import HogList from "./HogList"
import HogDetails from "./HogDetails"
import 'semantic-ui-css/semantic.min.css'
import { v4 as uuid } from "uuid"
import hogs from "../porkers_data";

function App() {
	const hogsWithIds = hogs.map(hog => ({ ...hog, id: uuid() }))
	const [hogsList, setHogs] = useState(hogsWithIds)
	const [selectedHog, setSelectedHog] = useState(null)

	const handleHogSelect = (hog) => {
    setSelectedHog(hog)
  }

	return (
		<div className="App">
			<Nav />
			<AddHogForm />
			<main>
				<HogList hogList={ hogsList } onHogSelect={handleHogSelect} />
				<HogDetails hog={selectedHog} />
			</main>
		</div>
	);
}

export default App;
