import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Project from "./pages/project";
import Info from "./pages/info";


const App = () => {
    const {loading, setloading} = useState(true);
    const loadingLogo = document.getElementById("loadingLogoId");
    
    if (loadingLogo) {
        setTimeout(() => {
            loadingLogo.style.display = "none";
            setloading(false);
        }, 2000);
    }

    return(
        !loading &&
        (<div id="body">
            <Layout />
            <div id="mainWraperId">
                <Routes>
                    <Route path="/" index element={<Home />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/info" element={<Info />}></Route>
                </Routes>
            </div>
        </div>)
    )
}

export default App;