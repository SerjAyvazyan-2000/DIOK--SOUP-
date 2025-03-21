import React from 'react';

import './serviceProducts.scss'

const ServiceProducts = ({subServices,selectedService,onclick}) => {
    return <div className="product-services">
        {subServices && selectedService ? (
            subServices.filter(service =>
                Array.isArray(service?.services) &&
                service?.services.some(s => s.title === selectedService.title)
            ).length > 0 ? (
                subServices
                    .filter(service =>
                        Array.isArray(service.services) &&
                        service.services.some(s => s.title === selectedService.title)
                    )
                    .map(service => (
                        <div onClick={() => onclick(service.name)} key={service.id}
                             className="product-service G-flex-column">
                            <h4 className="product-service-name">{service.name}</h4>
                            <div className="service-order G-align-center">
                                <p>Заказать</p>
                                <i className="icon order-arrow"></i>
                            </div>
                        </div>
                    ))
            ) : (
                <p className='null-products'>Здесь ничего нет</p>
            )
        ) : (
            <p className='loading'>Загрузка...</p>
        )}
    </div>

};

export default ServiceProducts