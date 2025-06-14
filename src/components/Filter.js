import React, { useState } from "react"

const Filter = ({ greasedFilter, onGreasedFilter }) => {

  const handleClick = () => {
    onGreasedFilter(!greasedFilter)
  }

  return (
    <div className="filterWrapper">
      <button id="filterBtn" onClick={handleClick}>{!greasedFilter ? "Show me them greasey hogs! 🐽" : "TOO GREASEY"}</button>
    </div>
  )
}

export default Filter
