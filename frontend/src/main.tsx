import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, Route } from 'wouter'
import { RegisterPage } from './pages/register'
import { HomePage } from 'pages/home'
import { LoginPage } from 'pages/login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  </React.StrictMode>
)
