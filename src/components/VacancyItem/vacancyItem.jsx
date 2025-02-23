import './vacancyItem.scss'
import Button from "../../ui/button/button.jsx";


const VacancyItem = ({ vacancy ,isActive,onClick,handleReplay}) => {
    return (
        <div className={`vacancies-item ${isActive ? "active" : ""}`}>
            <div className={`vacancy-item-header ${isActive ? "active" : ""}`}>
                <div onClick={onClick} className='vacancy-item-titles G-align-center'>
                <h3 className='vacancies-name'>{vacancy.title}</h3>
                    <div className='vacancy-item-icons G-flex-column'>
                        <i className='icon vacancy-arrow-down icon-arrow-down' onClick={onClick}></i>

                        <i className='icon icon-share2'></i>
                    </div>
                </div>
                <h4 className='vacancy-experience'>{vacancy.experience}</h4>
            </div>

            <div className='vacancy-tools G-align-center'>
                <Button onClick={handleReplay} text='Откликнуться' variant={'btn-primary'}/>
                <p className='vacancies-price'>{vacancy.salary}</p>
            </div>

            <div className='vacancy-infos'>
                {["Условия", "Навыки и знания", "Требования", "Дополнительно"].map((key) => (
                    <div className='vacancy-info' key={key}>
                        <h5 className='vacancy-info-title'>{key}</h5>
                        <div className='vacancy-info-list'>
                            {vacancy[key].map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VacancyItem;