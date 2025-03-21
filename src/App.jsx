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
import axios from "axios";


function App() {

    // const API_BASE = "http://31.129.56.213:1337/api";
    // const API_TOKEN = "2b9adcaa53ada101a450e750c3c453fb15efd3e85fff631a0835000ee6312859de71c8dd3700704957ec3caa69f6498d5d71d9e38c663c7b0e5e2c753c5de2ea6baa12833dd2299120f07b8ba3252d0630ca1863b1859638831250f258960477df7e5902243f30647560689fbfb5023c034df7d960cc96f6dedd76807d2fc816"; // Токен
    //
    // const fetchVacancies = async () => {
    //     try {
    //         const response = await axios.get(`${API_BASE}/services?populate=category`, {
    //             headers: {
    //                 Authorization: `Bearer ${API_TOKEN}`, // Добавляем Bearer перед токеном
    //             }
    //         });
    //
    //         if (response.status === 200) {
    //             console.log("Data Home:", response.data);
    //             // Здесь можешь обработать ответ
    //         } else {
    //             console.error(`Ошибка загрузки данных: ${response.status}`);
    //         }
    //     } catch (error) {
    //         console.error("Ошибка API:", error.response?.data || error.message);
    //     }
    // };
    //
    // fetchVacancies();

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
                <Route path="/" element={<Navigate to="/home" replace/>}/>

                <Route path="/home" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/servicesDetails/:id" element={<ServiceDetails />} />

                <Route path="/products" element={<Products/>}/>
                <Route path="/company" element={<Company/>}/>
                <Route path="/vacancies" element={<Vacancies/>}/>
                <Route path="/vacanciesDetails/:id" element={<VacanciesDetails/>}/>


                <Route path="*" element={<Home/>}/>


            </Routes>

        </main>

        <Footer/>
    </>


}

export default App



