import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './serviceDetails.scss'
import {Link, useLocation} from "react-router-dom";
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
import {useEffect, useState} from "react";
import Card from "../../components/card/card.jsx";
import Form from "../../components/form/form.jsx";
import Button from "../../ui/button/button.jsx";
import ServiceProducts from "../../components/serviceProducts/serviceProducts.jsx";
import Modal from "../../ui/modal/modal.jsx";
import Order from "../../components/order/order.jsx";

const ServiceDetails = () => {
    const [isActive, setIsActive] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [order, setOrder] = useState(false);
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');



    const handleItemClick = (index,name) => {
        if (activeIndex !== index) {
            setActiveIndex(index);
            setName(name);
        }
    };

    const handleOpenServices = () => {
        setIsActive(!isActive)
    };



    const services = [
        {title: "Разработка сайтов", link: "/servicesDetails"},
        {title: "Разработка мобильных приложений", link: "/servicesDetails"},
        {title: "Разработка ИТ-систем", link: "/servicesDetails"},
        {title: "Искусственный интеллект", link: "/servicesDetails"},
        {title: "Аналитические и BI решения", link: "/servicesDetails"},
        {title: "Машинное обучение", link: "/servicesDetails"},
        {title: "Компьютерное зрение", link: "/servicesDetails"},
        {title: "асутп и низкоуровневые решения", link: "/servicesDetails"},
        {title: "аппаратные решения и робототехника", link: "/servicesDetails"},
        {title: "rpa и автоматизация бизнес-процессов", link: "/servicesDetails"},
        {title: "чат-боты", link: "/servicesDetails"},
        {title: "доработка и развитие существующих решений", link: "/servicesDetails"},
        {title: "блокчейн и крипто", link: "/servicesDetails"},
        {title: "электронная коммерция", link: "/servicesDetails"},
        {title: "devops", link: "/servicesDetails"},
        {title: "тестирование", link: "/servicesDetails"},
        {title: "управление проектами", link: "/servicesDetails"},
        {title: "аналитика и проектирование ", link: "/servicesDetails"},
        {title: "составление документации", link: "/servicesDetails"},
        {title: "ui/ux дизайн", link: "/"},
        {title: "Big Data и анализ данных", link: "/servicesDetails"},
        {title: "Аналитика", link: "/"},
        {title: "Backend-разработка", link: "/servicesDetails"},
        {title: "Frontend-разработка", link: "/servicesDetails"},

    ];

    const interesting = [
        {title: "Разработка сайтов", link: "/servicesDetails"},
        {title: "Разработка мобильных приложений", link: "/servicesDetails"},
        {title: "Разработка ИТ-систем", link: "/servicesDetails"},
        {title: "Искусственный интеллект", link: "/servicesDetails"},
        {title: "аналитические и bi решения", link: "/servicesDetails"},
        {title: "Машинное обучение", link: "/servicesDetails"},


    ];

    const products = [
        {id: 1, name: 'Лендинг', link: '/'},
        {id: 2, name: 'Корпоративный сайт', link: '/'},
        {id: 3, name: 'Интернет магазин', link: '/'},
        {id: 4, name: 'Маркетплейс', link: '/'},
        {id: 5, name: 'Выделенные рабочие места', link: '/'},
        {id: 6, name: 'Корпоративные и клиентские порталы', link: '/'},
        {id: 7, name: 'Интранет решения', link: '/'},
        {id: 8, name: 'Стартап', link: '/'}
    ];

    useEffect(() => {
        if (order) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [order]);

    const handleOrder = (name) => {

        setOrder(!order);
        setTitle(name || '');

    }


    return <>
        <section className='services-details-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs
                        prevUrl='Услуги '
                        nextUrl={'/servicesDetails'}
                        next={'Разработка сайтов '}
                    />
                    <div className='details-share-share share G-align-center'>
                        <span>Поделиться</span>
                        <i className='icon icon-share'></i>
                    </div>
                </div>

            </div>
        </section>


        <section className='service-details-info'>
            <div className='big-container'>
                <div className='service-details-body G-flex'>
                    <div className='services-details-list'>
                        <div onClick={handleOpenServices}
                             className={`details-list-titles ${isActive ? 'active' : ''}  G-align-center`}>
                            <h3>Аутсорсинг</h3>
                            <div className='details-list-count G-center'>
                                <span>20</span>
                            </div>
                            <i className='icon services-arrow-down '></i>

                        </div>
                        <div className={`services-details-items  ${isActive ? "active" : ""}`}>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`services-details-item ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => handleItemClick(index,service.title)}>

                                    <h4>{service.title}</h4>
                                    <div className='service-active-decor'>
                                        <img src={detailsItemActive} alt=""/>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    <div className='service-details-description'>

                        <div className='details-media G-flex-column'>
                            <h3 className='details-name'> {name || 'Разработка сайтов' }</h3>
                            <div className='details-price G-align-center'>
                                <p>От</p>
                                <p>600 000,00 ₽</p>
                            </div>

                            <div className='details-img G-flex'>
                                <img className='img-desktop' src={detailsImg} alt="image"/>
                                <img className='img-mobile' src={detailsImgMobile} alt="image"/>


                            </div>
                        </div>

                        <div className='service-details-text'>
                            <p>
                                Многие наши клиенты сталкиваются с тем, что вместо развития и роста ИТ-департамент
                                тормозит работу. В итоге становится невозможно решать задачи со скоростью, требуемой для
                                бизнеса. А это значит — регулярные финансовые потери и недополученная прибыль.
                                Эту проблему эффективно и быстро решает аудит вашего ИТ-отдела.
                            </p>
                        </div>

                        {products && products.length > 0 && (
                            <ServiceProducts onclick={handleOrder} products={products}/>
                        )}


                        <div className='about-us-numbers'>
                            <h4 className='details-about-title'>// О НАС В ЦИФРАХ</h4>

                            <div className='numbers-items G-flex'>
                                <div className='numbers-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>7 лет опыта</h5>
                                    <p className='numbers-item-text'>
                                        КОММЕРЧЕСКОЙ РАЗРАБОТКИ ПРОЕКТОВ ЛЮБОГО УРОВНЯ СЛОЖНОСТИ
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={numbersItemDecor} alt=""/>
                                    </div>
                                </div>

                                <div className='numbers-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>Собственный r&d</h5>
                                    <p className='numbers-item-text'>
                                        более 50 Best of practice-решений в ИТ
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={numbersItemDecor} alt=""/>
                                    </div>
                                </div>

                                <div className='numbers-item'>
                                    <i className='icon numbers-icon'></i>
                                    <h5 className='numbers-item-title'>45 разработчиков </h5>
                                    <p className='numbers-item-text'>
                                        ВЫСОКОКВАЛИФИЦИРОВАННЫХ СПЕЦИАЛИСТОВ С ОПЫТОМ КОММЕРЧЕСКОЙ РАЗРАБОТКИ 5+ ЛЕТ
                                    </p>
                                    <div className='numbers-item-decor G-flex'>
                                        <img src={numbersItemDecor} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>


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

                                <p className='our-client-clue'>ДИОК сотрудничает более чем с 70 брендами 10 клиентов из
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
                                    <Button text={'Оставить заявку'} variant={'btn-primary'}/>
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
                                                <b className='mobile-text-wrap'> — Пользовательский интерфейс с ролевой
                                                    персонализацие й</b>
                                                <b className='text-wrap'>— Создание сценариев монтажа материалов</b>
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
                                                <b className='desktop-text-wrap'> месяц на этапе пилотирования</b>

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


                        <div className='interesting-block'>
                            <h4 className='details-about-title'>// ВАМ МОЖЕТ БЫТЬ ИНТЕРЕСНО</h4>

                            <div className='interesting-items'>
                                {interesting.map((service, index) => (
                                    <Card key={index} item={service} index={index}/>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <Form titleClass={'details-form-title'}/>


        <Modal close={() => handleOrder()} active={order}>
            <Order title={title} close={() => handleOrder()}/>
        </Modal>

    </>
};

export default ServiceDetails;