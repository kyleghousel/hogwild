import React, { useState } from "react"

const HogTile = ({ id, name, weight, specialty, greased, image, onClick }) => {
  return (
    <div className="ui eight wide column pigTile" id={id} onClick={onClick}>
      <h3 className="headerText">{name}</h3>
      <img src={image} alt={`A pig named ${name}.`} className="minPigTile"/>
    </div>
  )
}

export default HogTile
