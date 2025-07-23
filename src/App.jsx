import { Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
const App=()=>{
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="post/:id" element={<PostDetail/>}/>
    </Routes>
    </>
  )

}
export default App;