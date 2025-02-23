import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './products.scss'
import Form from "../../components/form/form.jsx";
import logo from '../../assets/images/logo2.svg'
import productsImg from '../../assets/images/productsPicture.webp'
import {Link} from "react-router-dom";
import CustomLink from "../../ui/customLink/link.jsx";
const Products = () => {




    return <>
        <section className='products-breadcrumbs'>
            <div className='big-container'>
                <div className='breadcrumbs-body G-align-center'>
                    <Breadcrumbs nextUrl={'/products'} next={'Продукты '}/>
                </div>

            </div>
        </section>

        <section className='products-top-section'>
            <div className='big-container'>
                <div className='products-top-body'>
                    <div className='products-titles'>
                        <h1 className='products-title'>ПРОДУКТЫ</h1>
                        <p className='products-sub-title'>
                            Предлагая передовые решения в области веб-разработки и разработки программного обеспечения,
                            <span className='desktop-text-wrap'>наши продукты переопределяют эффективность и инновации в технологической отрасли.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className='products-info-section'>
            <div className='big-container'>
                <div className='products-info'>
                    <div className='products-info-header G-align-center'>
                        <div className='products-logo G-flex'>
                            <img src={logo} alt="logo"/>
                        </div>
                        <CustomLink
                            variant={'link-primary-icon'}
                            text={'Перейти на сайт'}
                            icon={'goTo-icon'}
                            blank={true}
                            url={'https://dioc-knowledge.vercel.app/'}
                        />
                    </div>

                    <div className='products-info-items G-flex'>
                        <div className='products-info-item'>
                            <h3>АРЕНДУЙТЕ <span className='mobile-text-wrap'>СПЕЦИАЛИСТОВ</span>
                                ПО МОДЕЛИ АУТСТАФИНГА</h3>
                            <p>Получите доступ к лучшим ИТ-
                                <span className='mobile-text-wrap'>специалистам</span>
                                с помощью нашей модели <span className='mobile-text-wrap'>аутстаффинга.</span>
                                Арендуйте специалистов, <span className='mobile-text-wrap'>необходимых для развития</span> ваших проектов</p>
                        </div>
                        <div className='products-info-media G-flex'>
                            <img src={productsImg} alt=""/>
                        </div>

                    </div>

                </div>
                <div className='steps-block '>
                    <div className='steps-items G-flex'>
                        <div className='step-item'>
                            <i className='icon step-icon step-icon1'></i>
                            <p>Найдите специалиста</p>
                        </div>
                        <div className='step-item'>
                            <i className='icon step-icon step-icon2'></i>
                            <p>Проведите интервью</p>
                        </div>
                        <div className='step-item'>
                            <i className='icon step-icon step-icon3'></i>
                            <p>И подпишите договор</p>
                        </div>
                    </div>
                    <div className='step-bnt G-center'>
                        <Link className='btn-border-big' to={'/services'}>Перейти на страницу услуг</Link>

                        <Link className='btn-border' to={'/services'}>
                            <span>Все услуги</span>
                            <i className='icon icon-arrow-left'></i>
                        </Link>
                    </div>

                </div>

            </div>
        </section>


        <Form titleClass='services-form-title'/>


    </>
};

export default Products;



