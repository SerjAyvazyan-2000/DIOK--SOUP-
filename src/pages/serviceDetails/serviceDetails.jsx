import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './serviceDetails.scss'
import detailsItemActive from "../../assets/images/detailsItemActive.webp";
import detailsImg from "../../assets/images/detailsImg.webp";
import detailsImgMobile from "../../assets/images/detailsImgMobile.png";
import numbersItemDecor from "../../assets/images/numbersItemDecor.webp";
import gazprom from "../../assets/images/gazprom.svg";
import dodoPizza1 from "../../assets/images/dodoPizza1.svg";
import dodoPizza2 from "../../assets/images/dodoPizza2.svg";
import ministry from "../../assets/images/ministry.svg";
import clientsDecor from "../../assets/images/clientsDecor.png";
import casesItemDecor from "../../assets/images/casesItemDecor.png";
import advantagesItemDecor from "../../assets/images/advantagesItemDecor.png";
import React, {useEffect, useState} from "react";
import Card from "../../components/card/card.jsx";
import Form from "../../components/form/form.jsx";
import Button from "../../ui/button/button.jsx";
import ServiceProducts from "../../components/serviceProducts/serviceProducts.jsx";
import Modal from "../../ui/modal/modal.jsx";
import Order from "../../components/order/order.jsx";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import {useParams} from "react-router-dom";
import api from "../../api.js";
import {ToastContainer} from "react-toastify";

const ServiceDetails = () => {
    const {id} = useParams();
    const [activeId, setActiveId] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [order, setOrder] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [breadcrumbText, setBreadcrumbText] = useState(selectedService?.title);
    const [selectedSubService, setSelectedSubService] = useState(null);
    const [feedback, setFeedback] = useState(false);
    const {data: servicesCategories, isLoading: isLoadingCategories} = useFetchData("/service-categories");
    const {data: services, isLoading: isLoadingServices} = useFetchData("/services", "serviceCategory");
    const {data: subServices, isLoading: isLoadingSubServices} = useFetchData("/subservices", "services");
    const {data: facts, isLoading: isLoadingFacts} = useFetchData("/facts");


    const handleItemClick = (id, filteredService) => {
        if (activeId !== id) {
            setActiveId(id);
        }

        setSelectedService(filteredService)

    };


    useEffect(() => {
        if (servicesCategories.length > 0) {
            setActiveCategory(servicesCategories[0].id);
        }

    }, [servicesCategories]);


    useEffect(() => {
        setActiveId(selectedService?.id);
    }, [selectedService]);


    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await api.get(`/services/${id}?populate=serviceCategory`);
                if (response.status === 200) {
                    setSelectedService(response.data.data);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };

        fetchService();

    }, [id]);

    const handleFeedback = () => {
        setFeedback(!feedback);

    }

    useEffect(() => {
        if (!selectedService) return;

        const handleResize = () => {
            setBreadcrumbText(
                window.innerWidth < 570
                    ? selectedService?.serviceCategory?.name
                    : selectedService?.title
            );
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [selectedService]); // Ждём загрузки данных


    useEffect(() => {
        if (order) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [order]);

    const handleOrder = (name) => {
        setOrder(!order);
        setSelectedSubService(name)

    }


    const getCategoryServiceCount = (categoryName) => {
        return services.filter(service => service?.serviceCategory.name === categoryName).length;
    };

    const toggleServicesList = (categoryId) => {
        setActiveCategory(activeCategory === categoryId ? null : categoryId);
    };


    return <>
        <section className='services-details-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs
                        prevUrl='Услуги '
                        nextUrl={'/servicesDetails'}
                        next={breadcrumbText || ""}
                    />
                    {/* <div className='details-share-share share G-align-center'>
                        <span>Поделиться</span>
                        <i className='icon icon-share'></i>
                    </div> */}
                </div>

            </div>
        </section>


        <section className='service-details-info'>
            <div className='big-container'>
                <div className='service-details-body G-flex'>


                    <div className='services-details-list'>

                        <div className='details-list-categories'>

                            {isLoadingCategories ? (
                                <div className='loading'>Загрузка...</div>
                            ) : servicesCategories.length === 0 ? (
                                <div className='null-products'>Нет категории.</div>
                            ) : (
                                servicesCategories.map((category) => (
                                    <div key={category.id} className='details-categorie-item'>
                                        <div onClick={() => toggleServicesList(category.id)}
                                             className={`details-list-titles  G-align-center ${activeCategory === category.id ? "active" : ""}`}>
                                            <h3>{category?.name}</h3>
                                            <div className='details-list-count G-center'>
                                                <span>{getCategoryServiceCount(category?.name)}</span>
                                            </div>
                                            <i className='icon services-arrow-down '></i>
                                        </div>

                                        <div
                                            className={`services-details-items ${activeCategory === category.id ? "active" : ""}`}>
                                            {services
                                                .filter(service => service?.serviceCategory?.name === category.name)
                                                .map((filteredService, index) => (

                                                    <div key={index}
                                                         className={`services-details-item ${activeId === filteredService.id ? "active" : ""}`}
                                                         onClick={() => handleItemClick(filteredService.id, filteredService)}>

                                                        <h4>{filteredService?.title}</h4>
                                                        <div className='service-active-decor'>
                                                            <img src={detailsItemActive} alt=""/>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>

                                    </div>

                                ))
                            )}

                        </div>

                    </div>

                    <div className='service-details-description'>

                        {selectedService && (
                            <div className='details-media G-flex-column'>
                                <h3 className='details-name'> {selectedService?.title}</h3>
                                <div className='details-price G-align-center'>
                                    <p>От</p>
                                    <p>{new Intl.NumberFormat('en-US').format(selectedService?.cost)} ₽</p>


                                </div>

                                <div className='details-img G-flex'>
                                    <img className='img-desktop' src={detailsImg} alt="image"/>
                                    <img className='img-mobile' src={detailsImgMobile} alt="image"/>
                                </div>
                            </div>
                        )}

                        <div className='service-details-text'>

                            <p>
                                {selectedService?.description?.[0]?.children?.[0]?.text !== "null"
                                    ? selectedService?.description?.[0]?.children?.[0]?.text
                                    : "Описание отсутствует"}
                            </p>

                        </div>



                        {subServices?.length > 0 && <ServiceProducts onclick={handleOrder}
                                                                     subServices={subServices}
                                                                     selectedService={selectedService}
                        />}





                        {!isLoadingFacts && facts?.length > 0 && (
                            <div className='about-us-numbers'>
                                <h4 className='details-about-title'>// О НАС В ЦИФРАХ</h4>

                                <div className='numbers-items G-flex'>
                                    {facts.map((fact, index) => (
                                        <div key={index} className='numbers-item'>
                                            <i className='icon numbers-icon'></i>
                                            <h5 className='numbers-item-title'>{fact.title}</h5>
                                            <p className='numbers-item-text'>{fact.description}</p>
                                            <div className='numbers-item-decor G-flex'>
                                                <img src={numbersItemDecor} alt=""/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}




                        <div className='our-clients-block'>
                            <h4 className='details-about-title'>// НАШИ КЛИЕНТЫ</h4>

                            <div className='our-clients'>
                                <div className='our-clients-list G-align-center'>
                                    <div className='our-client-item'>
                                        <img src={gazprom} alt="image"/>
                                    </div>
                                    <div className='our-client-item'>
                                        <img src={dodoPizza1} alt="image"/>
                                    </div>
                                    <div className='our-client-item'>
                                        <img src={dodoPizza2} alt="image"/>
                                    </div>
                                    <div className='our-client-item'>
                                        <img src={ministry} alt="image"/>
                                    </div>
                                </div>

                                <p className='our-client-clue'>ДИОК сотрудничает более чем с 70 брендами 10
                                    клиентов из
                                    РБК500</p>

                                <div className='clients-decor'>
                                    <img src={clientsDecor} alt=""/>
                                </div>

                            </div>
                        </div>

                        <div className='cases-block'>
                            <div className='cases-block-header G-align-center'>
                                <h4 className='details-about-title'>// КЕЙСЫ</h4>

                                <div className='cases-btn'>
                                    <Button onClick={handleFeedback} text={'Оставить заявку'} variant={'btn-primary'}/>
                                </div>

                            </div>

                            <div className='cases-items'>

                                <div className='cases-item G-align-start'>

                                    <div className='cases-item-column cases-big-column'>
                                        <h5 className='cases-item-title'>// Кейс dodo brands</h5>
                                        <div className='cases-item-info G-flex-column'>
                                            <p><span>Задача:</span> Разработка системы для <b
                                                className='desktop-text-wrap'> автоматизации создания</b>
                                                персонализированных маркетинговых материалов
                                                <b className='desktop-text-wrap'>(видео и фото)</b>
                                            </p>
                                            <p>
                                                <span className='cases-info-title'>функционал:</span>
                                                — ИИ система монтажа и подготовки <b
                                                className='desktop-text-wrap'>материалов</b>
                                                <b className='mobile-text-wrap'> — Пользовательский интерфейс с
                                                    ролевой
                                                    персонализацие й</b>
                                                <b className='text-wrap'>— Создание сценариев монтажа
                                                    материалов</b>
                                                — Система распознавания лиц (Цели -
                                                афроамериканцы, азиаты, арабы до 16 лет)

                                            </p>
                                        </div>
                                    </div>

                                    <div className='cases-item-column cases-small-column'>
                                        <h5 className='cases-item-title'>// Бизнес-эффект от внедрения</h5>

                                        <div className='cases-another-info G-flex-column '>
                                            <span>В 3360 раз</span>
                                            <p>Ускорен процесс подготовки видео и
                                                фото материалов</p>
                                        </div>

                                        <div className='cases-another-info G-flex-column '>
                                            <span>НА 80%</span>
                                            <p>
                                                Сокращено влияние человеческого
                                                <b className='desktop-text-wrap'>фактора на процесс</b>
                                            </p>
                                        </div>


                                        <div className='cases-another-info G-flex-column '>
                                            <span>С 50 до 96%</span>
                                            <p>
                                                Вырос NPS

                                            </p>
                                        </div>


                                        <div className='cases-another-info G-flex-column '>
                                            <span>ROI 1000%</span>
                                            <p>
                                                Решение экономит 4 млн рублей в
                                                <b className='desktop-text-wrap'> месяц на этапе
                                                    пилотирования</b>

                                            </p>
                                        </div>

                                    </div>

                                    <div className='cases-item-decor G-flex'>
                                        <img src={casesItemDecor} alt=""/>
                                    </div>
                                </div>


                                <div className='cases-item G-align-start'>

                                    <div className='cases-item-column cases-big-column'>
                                        <h5 className='cases-item-title'>// кейс retail (магазин техники)</h5>
                                        <div className='cases-item-info G-flex-column'>
                                            <p><span>Задача:</span>Обучить и ввести в эксплуатацию
                                                большую языковую модель для юридических B2Bконсультаций
                                            </p>
                                            <p>
                                                <span className='cases-info-title'>функционал:</span>
                                                LLM
                                                <b className='text-wrap'>API для интеграций с корпоративными
                                                    сервисами</b>
                                                Мониторинг
                                                <b className='text-wrap'>BI-функционал</b>

                                            </p>
                                        </div>
                                    </div>

                                    <div className='cases-item-column cases-small-column'>
                                        <h5 className='cases-item-title'>// Бизнес-эффект от внедрения</h5>

                                        <div className='cases-another-info G-flex-column '>
                                            <span>В 30 раз</span>
                                            <p>
                                                повысилась скорость получения
                                                <b className='text-wrap'>ответа на вопросы общего характера</b>
                                            </p>
                                        </div>

                                        <div className='cases-another-info G-flex-column '>
                                            <span>НА 80%</span>
                                            <p>
                                                сокращение количества обращений в
                                                <b className='text-wrap'>юридическую службу</b>
                                            </p>
                                        </div>


                                        <div className='cases-another-info G-flex-column '>
                                            <span>37 МЛН РУБЛЕЙ</span>
                                            <p>
                                                экономия в годовом выражении на
                                                <b className='text-wrap'>этапе пилотирования</b>

                                            </p>
                                        </div>


                                        <div className='cases-another-info G-flex-column '>
                                            <span>ROI 145%</span>

                                        </div>

                                    </div>

                                    <div className='cases-item-decor G-flex'>
                                        <img src={casesItemDecor} alt=""/>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className='advantages-block'>
                            <h4 className='details-about-title'>// ПРЕИМУЩЕСТВА</h4>

                            <div className='advantages-items G-flex'>
                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>Кроссотраслевая
                                        экспертиза</h5>
                                    <p className='numbers-item-text'>
                                        Паботаем в большинстве существующих отраслей
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>

                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Гибкие условия
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Выстраиваем долгосрочные взаимоотношения с клиентами. предлагаем гибкие условия
                                        оплаты и заключения
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>


                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Собственный r&d
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Поддерживаем процесс разработки полного цикла от задумки до эксплуатации
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>

                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Предлагаем оптимальные решения
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Руководствуемся выгодой клиента в принятии технологических решений
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>


                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Прозрачность
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Предоставляем отчетность по работам в режиме реального времени.
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>


                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Собственная система менеджмента проектов
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Работаем по всем рыночным методологиям. все менеджеры прошли сертификацию pmbok.
                                        знаем iso/гост и отраслевые стандарты
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>


                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Гарантируем качество
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Каждый договор сопровождается sla. пожизненная гарантия на исправность решения
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>

                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Уникальный опыт
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Участвовали 30+ иновационных проектах от крупнейших компаний
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>


                                <div className='advantages-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>
                                        Гибкость
                                    </h5>
                                    <p className='numbers-item-text'>
                                        Готовы повернуть проект на 180 градусов при необходимости. поддерижваем
                                        методологию agile
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={advantagesItemDecor} alt=""/>
                                    </div>

                                </div>

                            </div>
                        </div>


                        {isLoadingServices ? (
                            <div className='loading'>Загрузка...</div>
                        ) : services.length === 0 ? (
                            ''
                        ) : (
                            <div className='interesting-block'>
                                <h4 className='details-about-title'>// ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО</h4>

                                <div className='interesting-items'>
                                    {services.slice(0, 6).map((service, index) => (
                                        <Card key={index} item={service} index={index}/>
                                    ))}
                                </div>
                            </div>

                        )}


                    </div>

                </div>
            </div>
        </section>

        <Form titleClass={'details-form-title'}/>


        <Modal close={() => handleOrder()} active={order}>
            <Order title={selectedSubService} close={() => handleOrder()}/>
        </Modal>

        <Modal close={() => handleFeedback()} active={feedback}>
            <Form blockClass={'modal-form-block'}/>
        </Modal>
        <ToastContainer/>

    </>
};

export default ServiceDetails;

