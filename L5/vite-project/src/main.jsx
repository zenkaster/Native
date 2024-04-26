import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  const [name, setName] = useState('')
  const nameRef = useRef(name)

  useEffect(() => {
    nameRef.current = name;
  }, [name])

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName !== null) {
      setName(userName);
      console.log(userName);
      console.log('Получено');
    }

    return () => {
      console.log(nameRef.current);
      localStorage.setItem('userName', nameRef.current)
      console.log('Сохранено');
    }

  }, [])

  const unmount = () => {
    root.unmount()
  }

  return (
    <div>
      <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
      <button onClick={unmount}>Unmount</button>
    </div>
  )
}


root.render(
  <App />
)
