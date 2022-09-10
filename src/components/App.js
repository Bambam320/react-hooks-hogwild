import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import hogs from "../porkers_data";

function App() {
	const [listOfHogs, setListOfHogs] = useState(hogs)
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState('')
	const [hogFormData, setHogFormData] = useState({
		name: '',
		specialty: '',
		greased: false,
		weight: 0.0,
		"highest medal achieved": "",
		image: '',
	})
	
	function onAddHog() {
		setListOfHogs([...listOfHogs, hogFormData])
	}

	function handleGreasedFilter(){
		setShowGreased(!showGreased)
	}

	const sortedHogs = listOfHogs.sort((a,b) => {
		switch (sortBy) {
			case 'Name A-Z' : return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
			case 'Weight Hi-Lo' : return b.weight - a.weight 
			case 'Weight Lo-Hi' : return a.weight - b.weight
			default: return true
		}
	})

	return (
		<div >
			<Nav 
				handleGreasedFilter={handleGreasedFilter}
				showGreased={showGreased}
				setSortBy={setSortBy}
				sortBy={sortBy}
				setHogFormData={setHogFormData}
				hogFormData={hogFormData}
				onAddHog={onAddHog}
			/>
			<div className="ui link cards">
				<HogTiles hogs={showGreased ? sortedHogs.filter((hog) => hog.greased === true) : sortedHogs}/>
			</div>
		</div>
	);
}

export default App;
