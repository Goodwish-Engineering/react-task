import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlogApp from './components/BlogApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>,
)
