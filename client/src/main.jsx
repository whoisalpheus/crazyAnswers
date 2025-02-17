import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
import Display from './Display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    <Display />
  </StrictMode>,
)