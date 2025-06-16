import { useState } from "react"
import { v4 as uuid } from "uuid"

const AddHogForm = ( { hogs, onAddHog }) => {
  const [newName, setNameChange] = useState('')
  const [newSpecialty, setSpecialtyChange] = useState('')
  const [newWeight, setWeightChange] = useState(0.0)
  const [newMedal, setMedalChange] = useState('')
  const [newImage, setImageChange] = useState('')

  const handleNameChange = (event) => {
    setNameChange(event.target.value)
  }

  const handleSpecialtyChange = (event) => {
    setSpecialtyChange(event.target.value)
  }

  const handleWeightChange = (event) => {
    setWeightChange(event.target.value)
  }

  const handleMedalChange = (event) => {
    setMedalChange(event.target.value)
  }

  const handleImageChange = (event) => {
    setImageChange(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newHog = {
      id: uuid(),
      name: newName,
      specialty: newSpecialty,
      weight: newWeight,
      'highest medal achieved': newMedal,
      image: newImage
    }

    const hogData = [...hogs, newHog]
    onAddHog(hogData)

    setNameChange('')
    setSpecialtyChange('')
    setWeightChange(0)
    setMedalChange('')
    setImageChange('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Add New Hog</h4>
        <label>
          Name:
          <input type='text' onChange={handleNameChange} value={newName}/>
        </label>
        <label>
          Specialty:
          <input type='text' onChange={handleSpecialtyChange} value={newSpecialty} />
        </label>
        <label>
          Weight:
          <input type='number' onChange={handleWeightChange} value={newWeight} />
        </label>
        <label>
          Highest Medal Achieved:
          <input type='text' onChange={handleMedalChange} value={newMedal} />
        </label>
        <label>
          Image URL:
          <input type='text' onChange={handleImageChange} value={newImage} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default AddHogForm;
