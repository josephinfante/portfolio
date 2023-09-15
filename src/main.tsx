import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigation } from './navigation/navigation.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)
