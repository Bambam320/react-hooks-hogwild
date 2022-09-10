import React, {useEffect, useState} from "react";


function HogTile({hogs}) {
  const [hogClick, setHogClick] = useState({})
  const [hogHidden, setHogHidden] = useState({})

  useEffect(() => {
    let trueHogObj = {}
    let falseHogObj = {}
    hogs.forEach((hog) => {
      trueHogObj = {...trueHogObj, [`${hog.name}`]: true}
    })
    hogs.forEach((hog) => {
      falseHogObj = {...falseHogObj, [`${hog.name}`]: false}
    })
    setHogHidden(trueHogObj)
    setHogClick(falseHogObj)
  }, [])

  function hogMain (hog) {
    return (
      <div className="ui image">
        <img 
          src={hog.image} 
          alt={hog.name}
          style={{border: '3px solid cyan', borderRadius: '15px'}}
          onClick={(e) => handleHogClick(e)} 
        ></img>
          <strong>{hog.name}</strong>
      </div>
    )
  }

  function hogExpandedInfo (hog) {
    return (
      <div className="content">
        <hr></hr>
        <span>{`My specialty is ${hog.specialty}`}</span>
        <p>{`and I weigh ${hog.weight} lbs.`}</p>
        <p>{hog.greased ? `I'm a greasy hog` : `I remain ungreased`}</p>
        <p>{`Highest medal achieved : ${hog['highest medal achieved']}`}</p>
      </div>
    )
  }

  function handleHogClick(e) {
    const hogName = e.target.alt
    const changedHog = !hogClick[`${hogName}`]
    setHogClick({...hogClick, [`${hogName}`]: changedHog})
  }

  function handleHide(e) {
    const hogName = e.target.value
    const changedHog = !hogHidden[`${hogName}`]
    setHogHidden({...hogHidden, [`${hogName}`]: changedHog})
    setHogClick({...hogClick, [`${hogName}`]: changedHog})
  }

  const listHogs = hogs.map((hog) => {
    return (
      <div
        className="ui four wide column"
        style={{border: '4px solid pink', borderRadius: '15px', margin: '5px'}} 
        key={hog.name}
      >
        {hogHidden[`${hog.name}`] ? hogMain(hog) : <p></p>}
        {hogClick[`${hog.name}`] ? hogExpandedInfo(hog) : <><hr></hr></>}
        <button value = {hog.name} onClick={(e) => handleHide(e)}>{hogHidden[`${hog.name}`] ? 'Hide Me!' : 'Reveal Me!'}</button>
      </div>
    )
  })

  return (
    <div className="ui grid container">
      {listHogs}
    </div>
  )
}

export default HogTile