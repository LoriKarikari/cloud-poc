import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomePage } from 'pages/home'
import { LoginPage } from 'pages/login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router } from 'wouter'
import './index.css'
import { RegisterPage } from './pages/register'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
)
