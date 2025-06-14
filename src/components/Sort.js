import React from "react"

const Sort = ({ sortBy, onSortChange }) => {
  return (
    <div className="sort">
      <label>Sort By: </label>
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="none">None</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="weight-asc">Weight (Low to High)</option>
        <option value="weight-desc">Weight (High to Low)</option>
      </select>
    </div>
  )
}

export default Sort
