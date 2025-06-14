import React, { useState } from "react"
import AddHogForm from "./AddHogForm"
import Filter from "./Filter"
import HogTile from "./HogTile"

const HogList = () => {
  return (
    <>
      <Filter />
      <AddHogForm />

    </>
  )
}

export default HogList
