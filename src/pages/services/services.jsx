import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './services.scss'
import Form from "../../components/form/form.jsx";
import React, {useEffect, useState} from "react";
import Card from "../../components/card/card.jsx";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import {ToastContainer} from "react-toastify";
import SEO from "../../SEO.jsx";

const Services = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const { data: servicesCategories, isLoading: isLoadingCategories } = useFetchData("/service-categories");
    const { data: services, isLoading: isLoadingServices } = useFetchData("/services", "serviceCategory");


    const toggleServicesList = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };

    const getCategoryServiceCount = (categoryName) => {
        return services.filter(service => service?.serviceCategory.name === categoryName).length;
    };


    useEffect(() => {
        if (servicesCategories.length > 0) {
            setActiveCategory(servicesCategories[0].id);
        }
    }, [servicesCategories]);







    return <>
       <SEO
            title="Services | DIOK"
            description="DIOK — современные IT-решения. Создаём сайты и сервисы под ключ."
          />
        <section className='services-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs nextUrl={'/services'} next={'Услуги '}/>
                    {/* <div className=' services-share share G-align-center'>
                        <span>Поделиться</span>
                        <i className='icon icon-share'></i>
                    </div> */}
                </div>

            </div>
        </section>

        <section className='services-top-section'>
            <div className='average-container'>
                <div className='services-top-body'>
                    <div className='services-titles'>
                        <h1 className='services-title'>УСЛУГИ</h1>
                        <p className='services-sub-title'>
                            Расширение возможностей бизнеса с помощью передовых ИТ-решений. От консультаций до
                            разработки, мы предлагаем индивидуальные услуги для удовлетворения ваших цифровых
                            потребностей.
                        </p>
                    </div>


                    <div className='services-counts G-align-center'>

                        {isLoadingCategories ? (
                            <div className='loading'>Загрузка...</div>
                        ) : servicesCategories.length === 0 ? (
                            <div className='null-products'>Нет  категории.</div>
                        ) : (
                            servicesCategories.map((category) => (
                                <div key={category.id} className='services-count G-align-center'>
                                    <span>{getCategoryServiceCount(category.name)}</span>
                                    <p>{category.name}</p>
                                </div>
                            ))
                        )}


                    </div>


                </div>
            </div>
        </section>


        <section className='services-section'>
            <div className='average-container'>
                <div className='services-body'>

                    {isLoadingServices ? (
                        <div className='loading'>Загрузка...</div>
                    ) : servicesCategories.length === 0  ? (
                        <div className='null-products'>Нет продуктов в этой категории.</div>
                    ) : (
                        servicesCategories.map((category) => (
                            <div key={category.id}>
                                <div
                                    onClick={() => toggleServicesList(category.id)}
                                    className={`services-list-header G-align-center ${activeCategory === category.id ? "active" : ""}`}
                                >
                                    <h2 className='services-list-title'>{category.name}</h2>
                                    <div className='services-items-count mobile-block'>
                                        <span>{getCategoryServiceCount(category.name)}</span>
                                    </div>
                                    <i className='icon services-arrow-down '></i>
                                </div>

                                <div className={`services-list ${activeCategory === category.id ? "active" : ""}`}>
                                    {services
                                        .filter(service => service?.serviceCategory?.name === category.name)
                                        .map((filteredService, index) => (
                                            <Card key={index}  item={filteredService} index={index}/>
                                        ))}
                                </div>
                            </div>
                        ))
                    )}



                </div>
            </div>
        </section>

        <Form titleClass='services-form-title'/>

        <ToastContainer/>

    </>
};

export default Services;



