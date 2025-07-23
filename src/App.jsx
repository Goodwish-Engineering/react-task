import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";
import PostDetail from "./pages/PostDetail";
const App=()=>{
const [searchTerm,setSearchTerm]=useState('');   return(
    <>
    <Header searchTerm={searchTerm} onSearch={setSearchTerm}/>
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm}/>}/>
      <Route path="post/:id" element={<PostDetail/>}/>
    </Routes>
    </>
  )

}
export default App;