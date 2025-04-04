import './company.scss'
import heroDecor from '../../assets/images/heroDecor.webp'
import heroDecorMobile from '../../assets/images/heroDecorMobile.webp'
import workingItemImg from '../../assets/images/workingItemImg.webp'
import workingItemImg2 from '../../assets/images/workingItemImg2.webp'
import workingItemImg2Mobile from '../../assets/images/workingItemImg2Mobile.webp'
import workingItemImg3 from '../../assets/images/workingItemImg3.webp'
import workingItemImg3Mobile from '../../assets/images/workingItemImg3Mobile.webp'
import workingItemImg4 from '../../assets/images/workingItemImg4.webp'
import workingItemImg4Mobile from '../../assets/images/workingItemImg4Mobile.webp'
import Form from "../../components/form/form.jsx";
import CustomLink from "../../ui/customLink/link.jsx";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import React, {useEffect} from "react";
import {ToastContainer} from "react-toastify";
import detailsItemActive from "../../assets/images/detailsItemActive.webp";

const Company = () => {

    const {data: technologies, isLoading: isLoadingTechnologies} = useFetchData("/tehnologiis");
    const {data: companyInfo, isLoading: isLoadingCompany} = useFetchData("/o-kompanii");


    const languages = [
        {name: "PHP", className: "rose-language"},
        {name: "Java", className: "gray-language"},
        {name: "Python", className: "primary-language",},
        {name: "HTML", className: "orange-language"},
        {name: "PHP", className: "gray-language"},
        {name: "Vue.js", className: "primary-language"},
        {name: "JSON", className: "gray-language"},
        {name: "Solana", className: "red-language"},
        {name: "Ruby", className: "rose-language"},
        {name: "Django", className: "primary-language"},
        {name: "Swift", className: "orange-language"},
        {name: "Kotlin", className: "orange-language"},
        {name: "Dart", className: "primary-language"},
        {name: "JavaScript", className: "gray-language", size: 'big-gray'},
        {name: "Flutter", className: "primary-language"},
        {name: "SwiftUI", className: "gray-language"},
        {name: "React Native", className: "gray-language", size: 'big-primary'},
        {name: "Figma", className: "orange-language"},
        {name: "NodeJs", className: "red-language"},
        {name: "Swift", className: "rose-language"},
        {name: "Spring Boot", className: "rose-language", size: 'big-primary'},
        {name: "C#", className: "primary-language", side: 'big-primary'},
        {name: "BotPress", className: "rose-language"},
        {name: "Siemens TIA", className: "gray-language", size: 'big-gray'},
        {name: "BotPress", className: "primary-language"},
        {name: "C#", className: "gray-language"},
        {name: ".NET", className: "orange-language"},
        {name: "Ladder Logic", className: "gray-language", size: 'big-gray'},
        {name: "Sketch", className: "red-language"},
        {name: "XML", className: "primary-language"},
        {name: "Flask", className: "rose-language"},
        {name: "Postman", className: "orange-language"},
        {name: "Adobe XD", className: "primary-language", size: 'big-primary'},
        {name: "Figma", className: "rose-language"},
        {name: "Apache Spark", className: "primary-language", size: 'big-primary'},
        {name: "TypeScript", className: "orange-language"},
        {name: "MySQL", className: "primary-language"},
        {name: "SQL", className: "orange-language"},
        {name: "CSS", className: "red-language"},
        {name: "Data Analysis", className: "rose-language", size: 'big-primary'},
        {name: "C++ ", className: "gray-language"},
        {name: "OpenCV", className: "orange-language"},
        {name: "Bash", className: "gray-language"},
        {name: "React", className: "gray-language"},
        {name: "Unity 3D", className: "rose-language", size: 'big-primary'},
        {name: "Kanban", className: "primary-language"},

    ];


    const uniqueLanguages = technologies
        ? [...new Set(technologies.map(lang => lang.name))]
        : [];

    const infiniteLanguages = technologies
        ? [...Array(3)].flatMap(() =>
            uniqueLanguages.map(name => technologies.find(lang => lang.name === name))
        )
        : [];

    const shuffleArray = (array) => {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    return <>
        <section className='company-section'>
            <div className='container'>
                <div className='hero-body'>


                    {!isLoadingCompany ? (
                        companyInfo ? (
                            <div className='hero-titles G-column-center'>
                                <h1 className='hero-title company-hero-title'>{companyInfo?.title}</h1>
                                <p className='company-sub-title'>{companyInfo?.slogan}</p>
                            </div>
                        ) : (
                            <div className='hero-titles G-center'>
                                <p className='error-message'>Информация о компании недоступна.</p>
                            </div>
                        )
                    ) : (
                        <div className='hero-titles G-center'>
                            <p className='loading'>Загрузка...</p>
                        </div>
                    )}


                    <div className='company-hero-btn G-center'>
                        <CustomLink variant={'link-border'} icon={'icon-arrow-left'} text={'Наши услуги'}
                                    url={'/services'}/>
                    </div>


                    <div className='company-hero-info G-column-center'>
                        <div className='hero-clues'>
                            <h2 className='hero-clue-title'>Понижаем расходы и повышаем доходы</h2>
                            <p className='hero-clue-sub'>
                                За годы работы мы определили именно те услуги, благодаря которым возможно развитие
                                бизнеса через ИТ. Любой ИТ
                                <span className='mobile-text-wrap'>— проект или онлайн продукт проходит три стадии, в
                                соответствии с которыми мы разделяем наши услуги.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='hero-decor G-flex'>
                <img className='img-desktop' src={heroDecor} alt="image"/>
                <img className='img-mobile' src={heroDecorMobile} alt="image"/>

            </div>
        </section>


        <section className='working-clients-section'>
            <div className='average-container'>
                <div className='working-clients-body'>
                    <h2 className='page-title'>Принципы работы с клиентами</h2>
                    <div className='working-clients-items G-flex'>
                        <div className='working-clients-item G-flex-column'>
                            <div className='working-item-texts'>
                                <h3 className='page-item-title'>Анализируем, потом действуем</h3>
                                <p className='page-item-text'>Мы стремимся к тому, чтобы все ресурсы в проектах
                                    распределялись целесообразно, поэтому работа над задачами клиента всегда начинается
                                    с
                                    аналитики. В команде AWG подавляющее большинство сотрудников — аналитики.</p>
                            </div>
                            <div className='working-item-img G-flex'>
                                <img src={workingItemImg} alt="image"/>
                            </div>

                        </div>

                        <div className='working-clients-item G-flex-column'>
                            <div className='working-item-texts'>
                                <h3 className='page-item-title'>Баланс скорости и качества</h3>
                                <p className='page-item-text'>
                                    Наш баланс – это скорость и качество. Мы предоставляем передовые ИТ-решения,
                                    неизменно стремясь к совершенству
                                </p>
                            </div>
                            <div className='working-item-img working-img-p G-flex'>
                                <img className='img-desktop' src={workingItemImg2} alt="image"/>
                                <img className='img-mobile' src={workingItemImg2Mobile} alt="image"/>

                            </div>

                        </div>


                        <div className='working-clients-item G-flex-column'>
                            <div className='working-item-texts'>
                                <h3 className='page-item-title'>Прозрачность работы</h3>
                                <p className='page-item-text'>
                                    Подчеркивая прозрачность в нашей работе, мы уделяем приоритетное внимание четкому
                                    общению и подотчетности, гарантируя, что наши клиенты будут информированы на каждом
                                    этапе пути
                                </p>
                            </div>
                            <div className='working-item-img working-img-p  G-flex'>
                                <img className='img-desktop' src={workingItemImg3} alt="image"/>
                                <img className='img-mobile' src={workingItemImg3Mobile} alt="image"/>


                            </div>

                        </div>


                        <div className='working-clients-item G-flex-column'>
                            <div className='working-item-texts'>
                                <h3 className='page-item-title'>Коммуникация с фокусом на бизнес</h3>
                                <p className='page-item-text'>
                                    Расширение возможностей бизнеса с помощью стратегических ИТ-решений. Мы уделяем
                                    особое внимание эффективной коммуникации, ориентированной на ваш успех.
                                </p>
                            </div>
                            <div className='working-item-img G-flex'>
                                <img className='img-desktop' src={workingItemImg4} alt="image"/>
                                <img className='img-mobile' src={workingItemImg4Mobile} alt="image"/>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className='results-section'>
            <div className='average-container'>
                <div className='results-body'>
                    <h2 className='page-title'>Результаты после <span className='mobile-text-wrap'>работы с ДИОК</span>
                    </h2>
                    <div className='results-items G-flex'>
                        <div className='results-item G-flex-column'>
                            <h3 className='page-item-title'>Рост чистой прибыли</h3>
                            <p className='company-page-text page-item-text'>
                                Увеличение производительности
                                Расширение рынков сбыта Выстроена система управления предприятием
                            </p>

                        </div>

                        <div className='results-item G-flex-column'>
                            <h3 className='page-item-title'>Высвобождение времени</h3>
                            <p className='company-page-text page-item-text'>
                                Выстроена система управления ТОП-менеджерами и руководителями. Выход из
                                микроменеджмента, без потери контроля
                            </p>

                        </div>


                        <div className='results-item G-flex-column'>
                            <h3 className='page-item-title'>Сокращение рисков</h3>
                            <p className='company-page-text page-item-text'>
                                От НЕкачественных или НЕсвоевременных решений. Ресурс на развитие и масштабирование
                                бизнеса.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section className='support-section'>
            <div className='support-container'>
                <div className='support-body '>
                    <div className='support-title '>
                        <h2 className='page-title'>Поддерживаем более <span
                            className='mobile-text-wrap'>100 языков</span>
                            <span className='desktop-text-wrap'> программирования и
                            фреймворков</span>
                        </h2>

                    </div>


                    {isLoadingTechnologies ? <div className='support-loading loading'>Загрузка...</div> :
                        technologies.length === 0 ?
                            <div className='support-null null-products'>Нет категории.</div>
                            :

                            <div className="support-languages G-flex-column">
                                {[...Array(5)].map((_, columnIndex) => {
                                    const shuffledLanguages = shuffleArray(infiniteLanguages).slice(0, uniqueLanguages.length); // Ограничиваем дубли
                                    return (
                                        <div key={columnIndex} className="support-language-column G-align-center">
                                            {shuffledLanguages.map((lang, index) => (
                                                <div key={`${lang.name}-${index}`} className="language-item"
                                                     style={{backgroundColor: lang.color}}>
                                                    <span>{lang.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                    }


                </div>
            </div>
        </section>

        <Form/>

        <ToastContainer/>

    </>
};

export default Company;


