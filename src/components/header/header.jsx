import React, {useEffect, useState} from 'react';
import './header.scss'
import {Link, NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.svg'
import Button from "../../ui/button/button.jsx";


const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const toggleBurger = () => {
        setIsActive((prev) => !prev);

    };


    return <header className={`header ${scrolled ? "moved" : ""}`}>
        <div className='header-container'>

            <div className='header-body G-justify-between'>
                <NavLink className='header-logo G-flex' to="/home">
                    <img src={logo} alt=""/>
                </NavLink>
                <nav className={`menu ${isActive ? "active" : ""}`}>
                    <ul className='menu-list G-align-center'>
                        <li className='menu-item'>
                            <NavLink className='menu-link' to={'/services'}>Услуги</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-link' to={'/'}>Продукты</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-link' to={'/'}>Вакансии</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-link' to={'/'}>О компании</NavLink>
                        </li>
                    </ul>

                </nav>

                <div className='header-actions G-flex'>
                    <Button variant={'btn-primary'} text={'Стать клиентом'}/>
                </div>

                <div className={`burger ${isActive ? "active" : ""}`} onClick={toggleBurger}>
                    <span></span>
                </div>


            </div>
        </div>
    </header>


};

export default Header;