import React, {useState} from "react"
import HogTile from "./HogTile.js"

function HogTiles ({hogs}) {
  
  return (
    <div className="positionContainer">
      <HogTile hogs={hogs}/>
    </div>
  )
}

export default HogTiles;