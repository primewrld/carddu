import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Your Favorite Pet Store</h1>
    <p id='pq'>Are You a Pet Lover, Here Is A Perfect Find </p>
    <App />
  </React.StrictMode>,
)
