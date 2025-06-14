import React, { useState } from "react"
import AddHogForm from "./AddHogForm"
import Filter from "./Filter"
import HogTile from "./HogTile"

const HogList = ({ hogList }) => {

  return (
    <>
      <Filter />
      <AddHogForm />
      <ul className="ui grid container">
        {hogList.map(({name, specialty, greased, weight, image}) => (
          <HogTile
            key={name}
            name={name}
            specialty={specialty}
            greased={greased}
            weight={weight}
            image={image}
          />
        ))}
      </ul>

    </>
  )
}

export default HogList
