import React, { useState } from "react"

const HogTile = ({ id, name, weight, specialty, greased, image, onClick }) => {
  const [isShowing, setIsShowing] = useState(true)

  function handleHideClick(e) {
    e.stopPropagation()
    setIsShowing(prev => !prev)
  }

  if (!isShowing) return null

  return (
    <div className="ui eight wide column pigTile" id={id} onClick={onClick}>
      <h3 className="headerText">{name}</h3>
      <img src={image} alt={`A pig named ${name}.`} className="minPigTile" />
      <button onClick={handleHideClick}>Hide hog 🐖</button>
    </div>
  )
}

export default HogTile
