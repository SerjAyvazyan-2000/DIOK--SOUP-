import './footer.scss'
import logo from '../../assets/images/logo.svg'
import {NavLink} from "react-router-dom";
import React from "react";


const Footer = () => {
    return <footer className='footer'>
        <div className='footer-container'>
            <div className='footer-body'>
                <NavLink className='footer-logo G-flex' to="/home">
                    <img src={logo} alt=""/>
                </NavLink>

                <div className='footer-cnt G-flex'>
                    <nav className='footer-menu'>
                        <ul className='footer-menu-list G-flex-column'>
                            <li className='footer-menu-item'>
                                <NavLink to={'/services'} className='footer-menu-link'>Услуги</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/products'} className='footer-menu-link'>Продукты</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/vacancies'} className='footer-menu-link'>Вакансии</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/company'} className='footer-menu-link'>О компании</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='outsourcing-list G-flex-column'>
                        <h3 className='outsourcing-title'>Аутсорсинг</h3>
                        <NavLink to='/services' className='outsourcing-item'>Разработка сайтов</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Чат-боты</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Разработка мобильных приложений</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Доработка и развитие существующих решений</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Разработка ИТ-систем</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Блокчейн и крипто</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Искусственный интеллект</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Аналитические и BI решения</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Электронная коммерция</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>DevOps</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Машинное обучение</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Тестирование</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Компьютерное зрение</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>Управление проектами</NavLink>
                        <NavLink to='/services' className='outsourcing-item'>АСУТП и низкоуровневые решения</NavLink>
                        <NavLink to={'/services'} className='outsourcing-item'>Аналитика и проектирование </NavLink>
                        <NavLink to={'/services'} className='outsourcing-item'>Аппаратные решения и робототехника</NavLink>
                        <NavLink to={'/services'} className='outsourcing-item'>Составление документации</NavLink>
                        <NavLink to={'/services'} className='outsourcing-item'>RPA и автоматизация бизнес-процессов</NavLink>
                        <NavLink to={'/services'} className='outsourcing-item'>UX/UI дизайн</NavLink>

                    </div>

                    <div className='footer-links G-flex'>
                        <NavLink className='footer-link' to={'/'}>Политика обработки персональных данных</NavLink>
                        <NavLink className='footer-link' to={'/'}>Управление качеством</NavLink>
                        <NavLink className='footer-link' to={'/'}>Управление рисками</NavLink>

                    </div>

                    <div className='footer-clue'>
                        <p>
                            Copyright © ДИОК, 2025
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
};

export default Footer;