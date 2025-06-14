import React, { useState } from "react"

const HogTile = ({ name, weight, specialty, greased, image }) => {
  return (
    <li className="ui eight wide column">
      <img src={image} alt={`Image of ${name}`} />
      <span>{name}</span>
    </li>
  )
}

export default HogTile
