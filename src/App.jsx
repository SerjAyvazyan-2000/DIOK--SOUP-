import './App.scss'
import {Route, Routes, useLocation, Navigate, Router} from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import Services from "./pages/services/services.jsx";
import ServiceDetails from "./pages/serviceDetails/serviceDetails.jsx";
import Products from "./pages/products/products.jsx";
import Company from "./pages/company/company.jsx";
import Vacancies from "./pages/vacancies/vacancies.jsx";
import VacanciesDetails from "./pages/vacanciesDetails/vacanciesDetails.jsx";
import {useEffect} from "react";


function App() {
    const location = useLocation();


    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'auto';
    }, []);

    useEffect(() => {

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [location]);

    const isHomePage = location.pathname === "/home" || location.pathname === "/company" || location.pathname === "/vacancies";
    return <>
        <Header isHomePage={isHomePage}/>

        <main className='main'>


                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />

                    <Route path="/home" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/servicesDetails" element={<ServiceDetails/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/company" element={<Company/>}/>
                    <Route path="/vacancies" element={<Vacancies/>}/>
                    <Route path="/vacanciesDetails" element={<VacanciesDetails/>}/>



                    <Route path="*" element={<Home/>}/>


                </Routes>

        </main>

        <Footer/>
    </>


}

export default App



