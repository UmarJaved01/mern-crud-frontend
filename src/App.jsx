import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import './App.css'

function App() {
  const [persons, setPersons] = useState([])

  const fetchPersons = async () => {
    try {
      const response = await axios.get('https://mern-crud-backend-cjbjgcbjbgd5czdu.southeastasia-01.azurewebsites.net/api/persons')
      setPersons(response.data)
    } catch (error) {
      console.error('Error fetching persons:', error)
    }
  }

  useEffect(() => {
    fetchPersons()
  }, [])

  return (
    <div className="app-container">
      <h1>Person CRUD App</h1>
      <PersonForm fetchPersons={fetchPersons} />
      <PersonList persons={persons} fetchPersons={fetchPersons} />
    </div>
  )
}

export default App