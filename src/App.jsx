import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import './App.css'
import config from './config'

function App() {
  const [persons, setPersons] = useState([])

  const fetchPersons = async () => {
    try {
      const response = await axios.get(config.apiBaseUrl)
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