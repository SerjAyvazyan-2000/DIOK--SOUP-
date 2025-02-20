import './App.scss'
import {Route, Routes, useLocation,Navigate } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import Services from "./pages/services/services.jsx";
import ServiceDetails from "./pages/serviceDetails/serviceDetails.jsx";
import Products from "./pages/products/products.jsx";


function App() {

    return <>
        <Header/>

        <main className='main'>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />

                <Route path="/home" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/servicesDetails" element={<ServiceDetails/>}/>
                <Route path="/products" element={<Products/>}/>

                <Route path="*" element={<Home/>}/>


            </Routes>
        </main>

        <Footer/>
    </>


}

export default App



