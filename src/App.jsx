import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import './App.css'

function App() {
  const [persons, setPersons] = useState([])

  const fetchPersons = async () => {
    const response = await axios.get('http://localhost:5000/api/persons')
    setPersons(response.data)
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