import './home.scss'
import Button from "../../ui/button/button.jsx";
import heroDecor from '../../assets/images/heroDecor.webp'
import heroDecorMobile from '../../assets/images/heroDecorMobile.webp'

import Form from "../../components/form/form.jsx";

const Home = () => {
    return <>
        <section className='hero-section'>
            <div className='container'>
                <div className='hero-body'>
                    <div className='hero-titles G-column-center'>
                        <h1 className='hero-title'>Инновации для бизнеса</h1>
                        <p className='hero-sub-title'>Инновационные ИТ-решения для вашего успеха. Узнайте о наших
                            <span
                                className='desktop-text-wrap'>технологиях для оптимизации производительности и роста</span>
                        </p>

                    </div>
                    <div className='hero-info G-column-center'>
                        <div className='hero-clues'>
                            <h2 className='hero-clue-title'>Создаём IT-решения, которые приносят результаты</h2>
                            <p className='hero-clue-sub'>Мы создаем инновационные ИТ-решения, которые приносят ощутимые
                                результаты для вашего бизнеса.</p>
                        </div>

                        <Button text={'Связаться в 1 клик'} variant='btn-primary'/>
                    </div>
                </div>
            </div>

            <div className='hero-decor G-flex'>
                <img className='img-desktop' src={heroDecor} alt="image"/>
                <img className='img-mobile' src={heroDecorMobile} alt="image"/>

            </div>
        </section>


        <section className='trends-section'>

            <div className='container'>
                <div className='trends-body'>
                    <h2 className='trends-title section-title'>Актуальные направления</h2>

                    <div className='trends-items block-cnt G-flex'>
                        <div className='trends-item trends-big-item '>
                            <div className='trends-item-icon'>
                                <i className='icon icon-trends icon-trends1'></i>

                            </div>
                            <div className='trends-info'>
                                <h3 className='trends-title block-title'>Аутсорсинг</h3>
                                <p className='trends-text block-text'>
                                    Анализируем бизнес процессы компании, погружаемся в особенности предприятия, изучаем
                                    техническую инфраструктуру.
                                    <span className='desktop-text-wrap'>
                                        Разложим по полочкам все технические детали, поможем задать вектор изменений и
                                    определиться с его реализацией. Мы разбираемся как в технологиях, так и в бизнесе, а
                                    также умеем их объединять.
                                    </span>
                                </p>
                            </div>

                        </div>

                        <div className='trends-item trends-big-item '>
                            <div className='trends-item-icon'>
                                <i className='icon icon-trends icon-trends2'></i>

                            </div>
                            <div className='trends-info'>
                                <h3 className='trends-title block-title'>консалтинг</h3>
                                <p className='trends-text block-text'>
                                    Проводим комплексный анализ вашей маркетинговой стратегии, с целью повысить
                                    финансовую эффективность и результативность.
                                    <span
                                        className='desktop-text-wrap'>Оцениваем текущее состояние ваших соцсетей, веб</span>-сайтов
                                    и маркетоинговых компаний,
                                    выявляем точки <span className='desktop-text-wrap'>роста и разрабатываем индивидуальные</span> рекомендации.
                                    Наша цель –
                                    сделать вашу коммерциализация более прибыльной и эффективной.
                                </p>
                            </div>

                        </div>

                        <div className='trends-item '>
                            <div className='trends-item-icon'>
                                <i className='icon icon-trends icon-trends3'></i>

                            </div>
                            <div className='trends-info'>
                                <h3 className='trends-title block-title'>маркетинг</h3>
                                <p className='trends-text block-text'>
                                    Разрабатываем программные продукты на стыке технологий и инжинерного подхода.
                                    Реализуем комплексные проекты от формирования идеи до её воплощения. Подбираем и
                                    создаем бизнес-решения под ваши технические условия и ресурсные потребности.
                                    Позвольте нашему профессионализму работать на вас.
                                </p>
                            </div>

                        </div>


                    </div>

                    <div className='trends-btn '>
                        <Button variant='btn-border' icon='icon-arrow-left' text='Все услуги'/>
                    </div>
                </div>
            </div>

        </section>


        <section className='about-us-section'>
            <div className='container'>
                <div className='about-us-body'>
                    <h2 className='about-us-title section-title'>ДИОК.ТЕХ <span>— это</span></h2>

                    <div className='about-us-items  G-flex'>
                        <div className='about-us-item  '>
                            <div className='about-us-info'>
                                <h3 className='trends-title block-title'>Управление рисками</h3>
                                <p className='trends-text block-text'>
                                    Оптимизируйте свои логистические операции с помощью наших индивидуальных ИТ-решений.
                                    Оптимизируйте процессы и повысьте эффективность. Свяжитесь с нами сегодня, чтобы
                                    узнать больше.
                                </p>
                            </div>
                        </div>

                        <div className='about-us-item  '>
                            <div className='about-us-info'>
                                <h3 className='trends-title block-title'>Работа по SLA</h3>
                                <p className='trends-text '>
                                    Обеспечите бесперебойную работу с помощью наших услуг ИТ консалтинга и разработки в
                                    соответствии с соглашениями об уровне обслуживания (SLA) для оптимальной
                                    производительности и надежности
                                </p>
                            </div>
                        </div>

                        <div className='about-us-item  '>
                            <div className='about-us-info'>
                                <h3 className='trends-title block-title'>Гарантия результата</h3>
                                <p className='trends-text '>
                                    Уверенно внедряйте инновации с помощью наших ИТ-решений. Мы гарантируем измеримые
                                    результаты для роста вашего бизнеса
                                </p>
                            </div>
                        </div>

                        <div className='about-us-item  '>
                            <div className='about-us-info'>
                                <h3 className='trends-title block-title'>Оптимальные решения</h3>
                                <p className='trends-text '>
                                    Обеспечение конфиденциальности клиентов является нашим главным приоритетом.
                                    Доверьтесь нам, чтобы защитить вашу конфиденциальную информацию с максимальной
                                    осторожностью и безопасностью.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <Form/>
    </>
};

export default Home;