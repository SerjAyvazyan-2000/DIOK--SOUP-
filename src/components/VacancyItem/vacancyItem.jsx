import './vacancyItem.scss'
import Button from "../../ui/button/button.jsx";


const VacancyItem = ({ vacancy ,isActive,onClick,handleReplay}) => {
    return (
        <div className={`vacancies-item ${isActive ? "active" : ""}`}>
            <div className={`vacancy-item-header ${isActive ? "active" : ""}`}>
                <div onClick={onClick} className='vacancy-item-titles G-align-center'>
                <h3 className='vacancies-name'>{vacancy?.position}</h3>
                    <div className='vacancy-item-icons G-flex-column'>
                        <i className='icon vacancy-arrow-down icon-arrow-down' onClick={onClick}></i>

                        <i className='icon icon-share2'></i>
                    </div>
                </div>
                <h4 className='vacancy-experience'>{vacancy?.grade}</h4>
            </div>

            <div className='vacancy-tools G-align-center'>
                <Button onClick={handleReplay} text='Откликнуться' variant={'btn-primary'}/>
                <p className='vacancies-price'>
                    от {vacancy?.min_salary?.toLocaleString("en-US")} до {vacancy?.max_salary?.toLocaleString("en-US")} ₽
                </p>

            </div>


            {vacancy.content && (
                <div className='vacancy-infos'>
                    {vacancy.content.split("\n").reduce((acc, line, index) => {
                        if (line.startsWith("#")) {
                            acc.push({ title: line.replace("#", "").trim(), list: [] });
                        } else if (line.trim()) {
                            if (acc.length === 0) acc.push({ title: "", list: [] });
                            acc[acc.length - 1].list.push(line.trim());
                        }
                        return acc;
                    }, []).map((section, index) => (
                        <div key={index} className='vacancy-info'>
                            {section.title && <h5 className='vacancy-info-title'>{section.title}</h5>}
                            {section.list.length > 0 && (
                                <div className='vacancy-info-list'>
                                    {section.list.map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VacancyItem;