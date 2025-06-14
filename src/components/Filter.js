import React, { useState } from "react"

const Filter = ({ greasedFilter, onGreasedFilter }) => {

  const handleClick = () => {
    onGreasedFilter(!greasedFilter)
  }

  return (
    <>
      <button id="filterBtn" onClick={handleClick}>{!greasedFilter ? "Show me them greasey hogs! 🐽" : "TOO GREASEY"}</button>
    </>
  )
}

export default Filter
