import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Category from "./pages/Category"

function App() {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("http://127.0.0.1:8000/category")
        .then((resp) => resp.json())
        .then(data => setCategories(data))
        .then(setIsLoading(false))
    }, [])

    if (isLoading === true){
        return <div>Loading data...</div>;
    }

    return (
    <>
        <Router>
            <NavBar categories={categories} setCategories={setCategories}></NavBar>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home categories={categories} setCategories={setCategories}/>}></Route>
                <Route path="/category/:slug" element={<Category/>}></Route>
            </Routes>
            
            <Footer></Footer>
        </Router>
        
    </>
    )
}

export default App
