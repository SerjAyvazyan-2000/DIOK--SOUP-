import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './vacanciesDetails.scss'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import VacancyItem from "../../components/VacancyItem/vacancyItem.jsx";
import Modal from "../../ui/modal/modal.jsx";
import Reply from "../../components/reply/reply.jsx";
import api from "../../api.js";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";

const VacanciesDetails = () => {
    const {id} = useParams();
    const {data: directions, isLoading: isLoadingDirections} = useFetchData("/job-types");
    const [activeId, setActiveId] = useState(null);
    const [replay, setReplay] = useState(false);
    const [selectedVacancy, setSelectedVacancy] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    const handleClick = (id) => {
        setActiveId(activeId === id ? null : id);
    };


    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                setIsLoading(true)
                const response = await api.get(`/job-types/${id}?populate=vacancies`);
                if (response.status === 200) {
                    setSelectedVacancy(response.data.data);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVacancies();

    }, [id]);






    const handleReplay = () => {
        setReplay(!replay);

    }

    useEffect(() => {
        if (replay) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [replay]);


    return <>
        <section className='vacancies-details-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs
                        next='Вакансии '
                        nextUrl={'/vacancies'}
                    />
                </div>

                    <div className='vacancies-top-body'>
                        <h1 className='products-title'>{selectedVacancy?.name}</h1>


                        <div className='products-sub-title vacancies-title-items G-align-center'>
                            {selectedVacancy?.vacancies?.map((vacancy) => (
                                <p key={vacancy.id} className='products-sub-title '>
                                    {vacancy?.position} /
                                </p>
                            ))}
                        </div>

                    </div>


            </div>
        </section>


        <section className='vacancies-section'>
        <div className='big-container'>

                {!isLoading ?

                    <div className='vacancies-list G-flex'>
                        {selectedVacancy?.vacancies?.map((vacancy) => (
                            <VacancyItem
                                key={vacancy.id}
                                vacancy={vacancy}
                                isActive={activeId === vacancy.id}
                                onClick={() => handleClick(vacancy.id)}
                                handleReplay={handleReplay}
                            />))}
                    </div>


                    : <div className='loading'>Загрузка...</div>

                }


            </div>
        </section>


        <section className='details-directions-section'>
            <div className='average-container'>
                <div className='directions-body'>
                    <h2 className='page-title'>Доступные направления</h2>

                    <div className='directions-items G-flex'>

                        {isLoadingDirections ? (
                            <div className='loading'>Загрузка...</div>
                        ) : directions.length === 0 ? (
                            <div className={'directions-null G-center'}>
                                <p>Вакансий нет</p>
                            </div>
                        ) : (
                            directions.map((direction, index) => (
                                <Link key={index} to={`/vacanciesDetails/${direction.documentId}`}
                                      className='directions-item G-justify-between'>
                                    <h3 className='directions-name'>{direction?.name}</h3>
                                    <i className='icon icon-arrow-left'></i>
                                </Link>
                            ))

                        )}


                    </div>
                </div>
            </div>
        </section>


        <Modal close={handleReplay} active={replay}>
            <Reply close={handleReplay}/>
        </Modal>


    </>
};

export default VacanciesDetails;



