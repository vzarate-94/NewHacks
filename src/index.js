import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App/App'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route>
        <App />
      </Route>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
)
