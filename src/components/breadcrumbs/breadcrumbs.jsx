import './breadcrumbs.scss'
import {NavLink} from "react-router-dom";


const Breadcrumbs = ({next, nextUrl, prevUrl}) => {




    return <ul className='breadcrumbs-items G-align-center'>
        <li className='breadcrumbs-item'>
            <NavLink className='breadcrumbs-link' to={'/home'}>Главная</NavLink>
        </li>

        <li>
            <i className='icon icon-arrow-left2'></i>
        </li>

        {prevUrl &&
            <>
                <li className='breadcrumbs-item'>
                    <NavLink className='breadcrumbs-link' to={'/services'}>{prevUrl}</NavLink>
                </li>

                <li>
                    <i className='icon icon-arrow-left2'></i>
                </li>
            </>

        }


        <li className='breadcrumbs-item'>
            <NavLink className='breadcrumbs-link' to={`${nextUrl}`}>{next}</NavLink>
        </li>

    </ul>
};

export default Breadcrumbs;