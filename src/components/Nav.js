import React from "react";
import piggy from "../assets/porco.png";
import SearchBar from "./SearchBar";
import NewHogForm from "./NewHogForm";

const Nav = ({
	handleGreasedFilter, 
	showGreased, 
	setSortBy, 
	sortBy,
	hogFormData,
	setHogFormData,
	onAddHog
	}) => {
		return (
			<>
				<div className="navWrapper">
					<span className="headerText">HogWild</span>
					<div className="TwirlyPig">
						<img src={piggy} className="App-logo" alt="piggy" />
					</div>
					<span className="normalText">
						A React App for County Fair Hog Fans
					</span>
				</div>
				<NewHogForm 
					setHogFormData={setHogFormData}
					hogFormData={hogFormData}
					onAddHog={onAddHog}
				/>
				<SearchBar 
					handleGreasedFilter={handleGreasedFilter}
					showGreased={showGreased}
					setSortBy={setSortBy}
					sortBy={sortBy}
				/>
			</>
		);
};

export default Nav;
