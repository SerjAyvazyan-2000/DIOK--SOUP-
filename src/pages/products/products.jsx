import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.jsx";
import './products.scss'
import Form from "../../components/form/form.jsx";
import productsImg from '../../assets/images/productsPicture.webp'
import {Link} from "react-router-dom";
import CustomLink from "../../ui/customLink/link.jsx";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import React, {useEffect} from "react";
import {ToastContainer} from "react-toastify";

const Products = () => {

    const {data: products, isLoading: isLoadingProducts} = useFetchData("/products", "logo");


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
                <div className='products-infos'>


                    {isLoadingProducts ? (
                        <div className='loading'>Загрузка...</div>
                    ) : products.length === 0 ? (
                        <div className='null-products'>Нет Products.</div>
                    ) : (
                        products?.map((product, index) => (
                            <div key={index} className='products-info'>
                                <div className='products-info-header G-align-center'>
                                    <div className='products-logo G-flex'>
                                        <img
                                            src={product.logo ? `${'http://31.129.56.213:1337'}${product.logo.url}` : "/fallback-logo.svg"}
                                            alt="logo"/>

                                    </div>
                                    <CustomLink
                                        variant={'link-primary-icon'}
                                        text={'Перейти на сайт'}
                                        icon={'goTo-icon'}
                                        blank={true}
                                        url={product?.url}
                                    />
                                </div>

                                <div className='products-info-items G-flex'>
                                    <div className='products-info-item'>
                                        <h3>{product?.title}</h3>
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className='products-info-media G-flex'>
                                        <img src={productsImg} alt=""/>
                                    </div>
                                </div>
                            </div>

                        ))
                    )}

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

        <ToastContainer/>

    </>
};

export default Products;



