import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import { cars } from './Components/data'




function App() {
  const [count, setCount] = useState(0)
  count
  setCount

  return (
    <div>
      <Navbar />
      <br />

      <div>
        {
          cars?.map((car) => (
            <Card key={car.id} car={car} />
          ))
        }
      </div>

    </div>
  )
}

export default App
