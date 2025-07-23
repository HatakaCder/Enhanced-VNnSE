import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Category from "./pages/Category"
import Search from "./pages/Search"
import Source from "./pages/Source"

function App() {
    const API_LINK = "http://127.0.0.1:8000/"

    const [categories, setCategories] = useState([])
    const [sources, setSources] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            const [categoriesResp, sourcesResp] = await Promise.all([
                fetch(API_LINK + "category"),
                fetch(API_LINK + "source")
            ])

            const [categoriesData, sourcesData] = await Promise.all([
                categoriesResp.json(),
                sourcesResp.json()
            ])

            setCategories(categoriesData)
            setSources(sourcesData)

            setIsLoading(false)
        }
        fetchData()
    }, [])
    
    if (isLoading === true){
        return <div>Loading data...</div>;
    }

    return (
    <>
        <Router>
            <NavBar categories={categories} setCategories={setCategories}
                    sources={sources} setSources={setSources}
            ></NavBar>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home categories={categories} setCategories={setCategories}/>}></Route>
                <Route path="/category/:slug" element={<Category/>}></Route>
                <Route path="/source/:slug" element={<Source/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
            </Routes>
            
            <Footer></Footer>
        </Router>
        
    </>
    )
}

export default App
