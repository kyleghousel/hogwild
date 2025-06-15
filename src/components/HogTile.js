import React, { useState } from "react"

const HogTile = ({ name, image, greased, weight, specialty, ["highest medal achieved"]: medal, onClick }) => {
  const [isShowing, setIsShowing] = useState(true)

  function handleHideClick(e) {
    e.stopPropagation()
    setIsShowing(prev => !prev)
  }

  if (!isShowing) return null

  return (
    <div className="ui card pigTile">
      <div className="ui move down reveal">
        <div className="visible content">
          <img src={image} alt={`A pig named ${name}`} className="ui image" />
        </div>
        <div className="hidden content">
          <div className="content">
            <h3 className="header">{name}</h3>
            <p>{`Specialty: ${specialty}`}</p>
            <p>{greased ? "Greased!" : "Not greased :("}</p>
            <p>{`Weight: ${weight}`}</p>
            <p>{`Medal: ${medal}`}</p>
          </div>
        </div>
      </div>
    </div>
    // <div className="ui eight wide column pigTile" id={id} onClick={onClick}>
    //   <h3 className="headerText">{name}</h3>
    //   <img src={image} alt={`A pig named ${name}.`} className="minPigTile" />
    //   <button onClick={handleHideClick}>Hide hog 🐖</button>
    // </div>
  )
}

export default HogTile
