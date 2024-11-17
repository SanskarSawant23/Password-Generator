import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Passwordcomponent } from './Components/Passwordcomponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <div>
      <div className='text-4xl text-white flex justify-center mt-5'>
        PASSWORD GENERATOR
      </div>
      <Passwordcomponent/>
    </div>
  )
}






export default App
