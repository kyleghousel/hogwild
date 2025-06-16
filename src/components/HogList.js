import { useState } from "react"
import Sort from "./Sort"
import Filter from "./Filter"
import HogTile from "./HogTile"

const HogList = ({ hogList, onHogSelect }) => {
  const [greasedFilter, setGreasedFilter] = useState(false)
  const [sortBy, setSortBy] = useState("none")

  const filteredHogs = greasedFilter ? hogList.filter((hog) => hog.greased === true) : hogList

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name)
      case "name-desc":
        return b.name.localeCompare(a.name)
      case "weight-asc":
        return a.weight - b.weight
      case "weight-desc":
        return b.weight - a.weight
      default:
        return 0
    }
  })

  return (
    <>
      <div className="filterWrapper">
        <Filter hogList={hogList} greasedFilter={greasedFilter} onGreasedFilter={setGreasedFilter}/>
        <Sort sortBy={sortBy} onSortChange={setSortBy} />
      </div>
      <div className="ui four stackable cards">
        {sortedHogs.map((hog) => (
          <HogTile
            key={hog.id}
            {...hog}
            onClick={() => onHogSelect(hog)}
          />
        ))}
      </div>

    </>
  )
}

export default HogList
