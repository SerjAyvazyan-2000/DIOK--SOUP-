import React from 'react';

import './serviceProducts.scss'

const ServiceProducts = ({products,onclick}) => {
    return <div className="product-services">
        {products.map((service) => (
            <div onClick={()=>onclick(service.name)} key={service.id} className="product-service G-flex-column">
                <h4 className="product-service-name">{service.name}</h4>
                <div className="service-order G-align-center">
                    <p>Заказать</p>
                    <i className="icon order-arrow"></i>
                </div>
            </div>
        ))}
    </div>

};

export default ServiceProducts