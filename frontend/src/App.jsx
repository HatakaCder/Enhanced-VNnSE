import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Category from "./pages/Category"

function App() {

  return (
    <>
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/category" element={<Category/>}></Route>
            </Routes>
            
            <Footer></Footer>
        </Router>
        
    </>
  )
}

export default App
