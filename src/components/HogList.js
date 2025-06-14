import React, { useState } from "react"
import AddHogForm from "./AddHogForm"
import Filter from "./Filter"
import HogTile from "./HogTile"

const HogList = ({ hogList, onHogSelect }) => {
  return (
    <>
      <Filter />
      <AddHogForm />
      <div className="ui grid container">
        {hogList.map((hog) => (
          <HogTile
            key={hog.id}
            id={hog.id}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            image={hog.image}
            onClick={() => onHogSelect(hog)}
          />
        ))}
      </div>

    </>
  )
}

export default HogList
