import './link.scss'
import {Link} from "react-router-dom";


const CustomLink = ({variant ,url,text,icon,blank}) => {
    return  <Link target={ blank ? '_blank' : null} className={`${variant}`} to={url}>
        <span>{text}</span>
        {icon && <i className={`icon ${icon}`}></i>}

    </Link>
};

export default CustomLink;