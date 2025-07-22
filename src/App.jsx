
import './App.css'
import { Blog } from './components/Blog'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
      <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Blog />} />
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
