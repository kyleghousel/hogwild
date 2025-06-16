import { useState } from "react"

const HogTile = ({ name, image, greased, weight, specialty, ["highest medal achieved"]: medal, onClick }) => {
  const [isShowing, setIsShowing] = useState(true)

  const toggleDisplayHog = () => {
    setIsShowing(!isShowing)
  }

  return ( isShowing &&
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
      <button onClick={toggleDisplayHog} style={{
          background: 'none',
          border: 'none',
          padding: '1em',
          fontSize: '2em',
          cursor: 'pointer',
          width: '40%',
          margin: '0 auto'
        }}>Hide🐽Hog</button>
    </div>
  )
}

export default HogTile
