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
                                <NavLink to={'/'} className='footer-menu-link'>Услуги</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/'} className='footer-menu-link'>Продукты</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/'} className='footer-menu-link'>Вакансии</NavLink>
                            </li>
                            <li className='footer-menu-item'>
                                <NavLink to={'/'} className='footer-menu-link'>О компании</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className='outsourcing-list G-flex-column'>
                        <h3 className='outsourcing-title'>Аутсорсинг</h3>
                        <NavLink to='/' className='outsourcing-item'>Разработка сайтов</NavLink>
                        <NavLink to='/' className='outsourcing-item'>чат-боты</NavLink>
                        <NavLink to='/' className='outsourcing-item'>Разработка мобильных приложений</NavLink>
                        <NavLink to='/' className='outsourcing-item'>доработка и развитие существующих решений</NavLink>
                        <NavLink to='/' className='outsourcing-item'>Разработка ИТ-систем</NavLink>
                        <NavLink to='/' className='outsourcing-item'>блокчейн и крипто</NavLink>
                        <NavLink to='/' className='outsourcing-item'>Искусственный интеллект</NavLink>
                        <NavLink to='/' className='outsourcing-item'>аналитические и bi решения</NavLink>
                        <NavLink to='/' className='outsourcing-item'>электронная коммерция</NavLink>
                        <NavLink to='/' className='outsourcing-item'>devops</NavLink>
                        <NavLink to='/' className='outsourcing-item'>Машинное обучение</NavLink>
                        <NavLink to='/' className='outsourcing-item'>тестирование</NavLink>
                        <NavLink to='/' className='outsourcing-item'>Компьютерное зрение</NavLink>
                        <NavLink to='/' className='outsourcing-item'>управление проектами</NavLink>
                        <NavLink to='/' className='outsourcing-item'>асутп и низкоуровневые решения</NavLink>
                        <NavLink to={'/'} className='outsourcing-item'>аналитика и проектирование </NavLink>
                        <NavLink to={'/'} className='outsourcing-item'>аппаратные решения и робототехника</NavLink>
                        <NavLink to={'/'} className='outsourcing-item'>составление документации</NavLink>
                        <NavLink to={'/'} className='outsourcing-item'>rpa и автоматизация бизнес-процессов</NavLink>
                        <NavLink to={'/'} className='outsourcing-item'>ui/ux дизайн </NavLink>

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