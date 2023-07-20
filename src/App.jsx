import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//import './App.css'

function App() {
      const [count, setCount] = useState(0)

      return (

            <div className='text-red-500'>
                  hola
                  <FontAwesomeIcon icon={faCoffee} />
            </div>
    
      )
}

export default App
