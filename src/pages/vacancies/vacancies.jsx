import './vacancies.scss'
import heroDecor from '../../assets/images/heroDecor.webp'
import heroDecorMobile from '../../assets/images/heroDecorMobile.webp'
import waitingItemImg from '../../assets/images/waitingItemImg.webp'
import waitingItemImgMobile from '../../assets/images/waitingItemImgMobile.webp'
import waitingItemImg2 from '../../assets/images/waitingItemImg2.webp'
import waitingItemImg2Mobile from '../../assets/images/waitingItemImg2Mobile.webp'
import waitingItemImg3 from '../../assets/images/waitingItemImg3.webp'
import waitingItemImg3Mobile from '../../assets/images/waitingItemImg3Mobile.webp'

import {Link} from "react-router-dom";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import {useEffect} from "react";

const Vacancies = () => {
    const {data: directions, isLoading: isLoadingDirections} = useFetchData("/job-types");






    return <>

        <section className='vacancies-hero-section'>
            <div className='container'>
                <div className='hero-body'>
                    <div className='hero-titles G-column-center'>
                        <h1 className='vacancies-hero-title hero-title'>Присоединяйся в <span className='text-wrap'>команду ДИОКА</span></h1>


                    </div>


                    <div className='vacancies-clues  G-flex'>

                        {isLoadingDirections ? (
                            <div className='loading'>Загрузка...</div>
                        ) : directions.length === 0 ? (
                            <div className={'directions-null G-center'}>
                                <p>Доступные направления нет</p>
                            </div>
                        ) : (
                            directions.map((direction, index) => (
                                <Link key={index} to={`/vacanciesDetails/${direction.documentId}`}
                                      className='vacancies-clue '>
                                    <span>{direction?.name}</span>

                                </Link>
                            ))

                        )}


                    </div>
                </div>
            </div>

            <div className='hero-decor G-flex'>
                <img className='img-desktop' src={heroDecor} alt="image"/>
                <img className='img-mobile' src={heroDecorMobile} alt="image"/>

            </div>
        </section>


        <section className='waiting-section'>
            <div className='average-container'>
                <div className='waiting-body'>
                    <h2 className='page-title'>Что ждёт тебя?</h2>
                    <div className='waiting-items G-flex'>

                        <div className='waiting-item G-flex-column'>
                            <div className='waiting-item-texts'>
                                <h3 className='page-item-title'>Развитие и гибкие карьерные треки</h3>
                                <p className='page-item-text'>
                                    Изучите динамичные пути карьерного роста и возможности роста в сфере ИТ-консалтинга
                                    и развития. Раскройте свой потенциал с помощью наших гибких карьерных планов,
                                    ориентированных на успех.
                                </p>
                            </div>
                            <div className='working-item-img G-flex'>
                                <img className='img-desktop' src={waitingItemImg} alt="image"/>
                                <img className='img-mobile' src={waitingItemImgMobile} alt="image"/>
                            </div>

                        </div>

                        <div className='waiting-item G-flex-column'>
                            <div className='waiting-item-texts'>
                                <h3 className='page-item-title'>Действительно удобные условия для работы</h3>
                                <p className='page-item-text'>
                                    Изучите нашу по-настоящему удобную рабочую среду, созданную для того, чтобы
                                    вдохновлять на творчество и способствовать инновациям. Присоединяйтесь к нам, чтобы
                                    переопределить будущее технологий.
                                </p>
                            </div>
                            <div className='working-item-img  G-flex'>
                                <img className='img-desktop' src={waitingItemImg2} alt="image"/>
                                <img className='img-mobile' src={waitingItemImg2Mobile} alt="image"/>


                            </div>

                        </div>


                        <div className='waiting-item G-flex-column'>
                            <div className='waiting-item-texts'>
                                <h3 className='page-item-title'>Программа wellbeing для комфортной жизни</h3>
                                <p className='page-item-text'>
                                    Изучите нашу адаптированную программу благополучия, призванную обеспечить
                                    сбалансированную и полноценную работу и личную жизнь. Мы уделяем приоритетное
                                    внимание удовлетворенности сотрудников и личностному росту, создавая благоприятную
                                    среду для профессионального развития.
                                </p>
                            </div>
                            <div className='working-item-img   G-flex'>
                                <img className='img-desktop' src={waitingItemImg3} alt="image"/>
                                <img className='img-mobile' src={waitingItemImg3Mobile} alt="image"/>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>


        <section className='we-waiting-section'>
            <div className='average-container'>
                <div className='we-waiting-body'>
                    <h2 className='page-title'>Чего мы ждём от тебя?</h2>


                    <div className='we-waiting-items  G-flex'>
                        <div className='we-waiting-item  '>
                            <h3 className='block-title'>Фокус на результат</h3>
                            <p className='we-waiting-text block-text'>
                                Мы в первую очередь ориентируемся на то, какой результат наши действия несут для
                                компании.
                                Если наши способы и инструменты не приводят к результату, мы не боимся их менять и
                                попробовать снова.
                            </p>
                        </div>

                        <div className='we-waiting-item  '>
                            <h3 className='block-title'>Честность</h3>
                            <p className='we-waiting-text block-text'>
                                Мы честны с коллегами и клиентами.
                                Мы честно признаем свои ошибки и не перекладываем ответственность на других людей или
                                обстоятельства.
                            </p>
                        </div>


                        <div className='we-waiting-item  '>
                            <h3 className='block-title'>Простота</h3>
                            <p className='we-waiting-text block-text'>
                                Мы делим сложные задачи на простые части и не пытаемся съесть слона
                                целиком. Мы стараемся говорить просто, чтобы было понятно каждому.
                            </p>
                        </div>

                        <div className='we-waiting-item  '>
                            <h3 className='block-title'>Смелость</h3>
                            <p className='we-waiting-text block-text'>
                                Мы смело берёмся за сложные и амбициозные задачи и проекты!
                                Мы видим возможности в изменениях и сами их предлагаем!
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>

        <section className='directions-section'>
            <div className='average-container'>
                <div className='directions-body'>
                    <h2 className='page-title'>Доступные <span className='mobile-text-wrap'>направления</span></h2>

                    <div className='directions-items G-flex'>

                        {isLoadingDirections ? (
                            <div className='loading'>Загрузка...</div>
                        ) : directions.length === 0 ? (
                            <div className={'directions-null G-center'}>
                                <p>Вакансий нет</p>
                            </div>
                        ) : (
                            directions.map((direction, index) => (
                                <Link key={index}  to={`/vacanciesDetails/${direction.documentId}`}  className='directions-item G-justify-between'>
                                    <h3 className='directions-name'>{direction?.name}</h3>
                                    <i className='icon icon-arrow-left'></i>
                                </Link>
                            ))

                        )}



                    </div>
                </div>
            </div>
        </section>






    </>
};

export default Vacancies;


