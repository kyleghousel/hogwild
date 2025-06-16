import { useState } from "react"
import { v4 as uuid } from "uuid"

const AddHogForm = ( { hogs, onAddHog }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: 0.0,
    'highest medal achieved': '',
    image: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newHog = {
      id: uuid(),
      ...formData
    }

    const hogData = [...hogs, newHog]
    onAddHog(hogData)

    setFormData('')

  }

  return (
    <>
      <form onSubmit={handleSubmit} id='hog-form'>
        <h4 className='smallHeader'>Add New Hog</h4>
        <label>
          Name:
          <input type='text' onChange={handleChange} value={formData.name}/>
        </label>
        <label>
          Specialty:
          <input type='text' onChange={handleChange} value={formData.specialty} />
        </label>
        <label>
          Weight:
          <input type='number' onChange={handleChange} value={formData.weight} />
        </label>
        <label>
          Highest Medal Achieved:
          <input type='text' onChange={handleChange} value={formData['highest medal achieved']} />
        </label>
        <label>
          Image URL:
          <input type='text' onChange={handleChange} value={formData.image} />
        </label>
        <input type='submit' value='Submit' id='addSubmitBtn'/>
      </form>
    </>
  );
}

export default AddHogForm;
