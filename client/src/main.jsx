import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
// import Input from './Input.jsx'
// import Button from './Button.jsx'
import Display from './Display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title />
    {/* <Input /> */}
    <Display />
    {/* <Button /> */}
  </StrictMode>,
)