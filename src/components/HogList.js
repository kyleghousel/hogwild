import React, { useState } from "react"
import AddHogForm from "./AddHogForm"
import Filter from "./Filter"
import HogTile from "./HogTile"

const HogList = ({ hogList, onHogSelect }) => {
  const [greasedFilter, setGreasedFilter] = useState(false)

  const filteredHogs = greasedFilter ? hogList.filter((hog) => hog.greased === true) : hogList

  return (
    <>
      <Filter hogList={hogList} greasedFilter={greasedFilter} onGreasedFilter={setGreasedFilter}/>
      <AddHogForm />
      <div className="ui grid container">
        {filteredHogs.map((hog) => (
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
