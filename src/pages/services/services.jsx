import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './services.scss'
import Form from "../../components/form/form.jsx";
import {useEffect, useState} from "react";
import Card from "../../components/card/card.jsx";

const Services = () => {
    const [isActive, setIsActive] = useState(true);



    const toggleServicesList = () => {
        setIsActive(!isActive);
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


    return <>
        <section className='services-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs nextUrl={'/services'} next={'Услуги '}/>
                    <div className=' services-share share G-align-center'>
                        <span>Поделиться</span>
                        <i className='icon icon-share'></i>
                    </div>
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

                    <div className='services-count G-align-center'>
                        <span>20</span>
                        <p>Аутсорсинг</p>
                    </div>
                </div>
            </div>
        </section>


        <section className='services-section'>
            <div className='average-container'>
                <div className='services-body'>
                    <div onClick={toggleServicesList}
                         className={`services-list-header G-align-center ${isActive ? "active" : ""}`}>
                        <h2 className='services-list-title'>Аутсорсинг</h2>
                        <div className='services-items-count mobile-block'>
                            <span>20</span>
                        </div>
                        <i className='icon services-arrow-down '></i>
                    </div>
                    <div className={`services-list  ${isActive ? "active" : ""}`}>
                        {services.map((service, index) => (
                            <Card key={index} item={service} index={index}/>
                        ))}

                    </div>
                </div>
            </div>
        </section>

        <Form titleClass='services-form-title'/>


    </>
};

export default Services;



