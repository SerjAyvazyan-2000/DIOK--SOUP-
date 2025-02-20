import {Link} from "react-router-dom";
import servicesItemDecor from "../../assets/images/servicesItemDecor.webp";
import './card.scss'

const Card = ({item,index}) => {
    return <Link to={item.link} key={index} className="services-item G-flex-column">
        <h3 className="services-item-title">{item.title}</h3>
        <div className="services-item-icon G-justify-end">
            <i className="icon icon-arrow-left"></i>
        </div>
        <div className="services-item-decor G-flex">
            <img src={servicesItemDecor} alt=""/>
        </div>
    </Link>
};

export default Card;