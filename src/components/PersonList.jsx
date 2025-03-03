import axios from 'axios'
import { useState } from 'react'

function PersonList({ persons, fetchPersons }) {
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')
  const [editAge, setEditAge] = useState('')

  const deletePerson = async (id) => {
    try {
      await axios.delete(`https://mern-crud-backend-cjbjgcbjbgd5czdu.southeastasia-01.azurewebsites.net/api/persons/${id}`)
      fetchPersons()
    } catch (error) {
      console.error('Error deleting person:', error)
    }
  }

  const startEditing = (person) => {
    setEditingId(person._id)
    setEditName(person.name)
    setEditAge(person.age.toString()) // Convert to string for input
  }

  const updatePerson = async (id) => {
    try {
      const response = await axios.put(`https://mern-crud-backend-cjbjgcbjbgd5czdu.southeastasia-01.azurewebsites.net/api/persons/${id}`, {
        name: editName,
        age: parseInt(editAge)
      })
      console.log('Update response:', response.data)
      setEditingId(null)
      setEditName('')
      setEditAge('')
      fetchPersons()
    } catch (error) {
      console.error('Error updating person:', error.response?.data || error.message)
      if (error.response?.status === 404) {
        alert('Person not found. It may have been deleted.')
      } else {
        alert('Failed to update person: ' + (error.response?.data.message || error.message))
      }
    }
  }

  return (
    <div className="list-container">
      {persons.map(person => (
        <div key={person._id} className="person-card">
          {editingId === person._id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                required
              />
              <input
                type="number"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
                required
              />
              <button onClick={() => updatePerson(person._id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{person.name} - {person.age} years</span>
              <div>
                <button onClick={() => startEditing(person)}>Edit</button>
                <button onClick={() => deletePerson(person._id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default PersonList