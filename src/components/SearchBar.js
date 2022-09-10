import React, {useState} from "react"

function SearchBar ({handleGreasedFilter, showGreased, setSortBy, sortBy}) {

  const options = [
    {value: 'Name A-Z', text: 'Name A-Z'},
    {value: 'Weight Hi-Lo', text: 'Weight Hi-Lo'},
    {value: 'Weight Lo-Hi', text: 'Weight Lo-Hi'}
  ]

  function handleSortChange(e) {
    setSortBy(e.target.value)
  }

  return (
    <div className= "formInput">
      <button 
        className="buttonMargin"
        onClick={() => handleGreasedFilter()}
      >{showGreased ? 'Show All Hogs' : 'Show Greased Hogs Only' }</button>
      <label for="sort">Sort By </label>
      <select name='sort' value={sortBy} onChange={(e) => handleSortChange(e)}>
        {options.map((option) => {
          return (
            <option 
              key={option.value}
              value={option.value}
            >{option.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SearchBar