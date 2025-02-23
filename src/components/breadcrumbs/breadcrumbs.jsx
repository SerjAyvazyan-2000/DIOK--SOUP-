import './breadcrumbs.scss'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";


const Breadcrumbs = ({next, nextUrl, prevUrl}) => {
    const productsUrl = nextUrl === '/products';


    useEffect(() => {
    }, [nextUrl]);


    return <ul className='breadcrumbs-items G-align-center'>
        <li className={`breadcrumbs-item ${productsUrl ? 'link-none' : ''}`}>
            <NavLink className='breadcrumbs-link' to={'/home'}>Главная</NavLink>
        </li>

        <li className={` ${productsUrl ? 'link-none' : ''}`}>
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

        <li className={` ${productsUrl ? 'arrow-visible' : 'arrow-none'}`}>
            <i className='icon icon-arrow-left2'></i>
        </li>

    </ul>
};

export default Breadcrumbs;