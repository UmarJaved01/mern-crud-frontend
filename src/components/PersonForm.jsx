import { useState } from 'react'
import axios from 'axios'

function PersonForm({ fetchPersons }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('mern-crud-backend-cjbjgcbjbgd5czdu.southeastasia-01.azurewebsites.net/api/persons', { name, age })
    setName('')
    setAge('')
    fetchPersons()
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add Person</button>
      </form>
    </div>
  )
}

export default PersonForm