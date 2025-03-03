import { useState } from 'react'
import axios from 'axios'
import config from '../config' 

function PersonForm({ fetchPersons }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(config.apiBaseUrl, { name, age })
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