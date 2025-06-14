import React, { useState } from "react"

const HogTile = ({ name, weight, specialty, greased, image }) => {
  return (
    <div className="ui eight wide column pigTile">
      <h3 className="headerText">{name}</h3>
      <img src={image} alt={`A pig named ${name}.`} className="minPigTile"/>
    </div>
  )
}

export default HogTile
