import './order.scss'
import Input from "../../ui/input/input.jsx";
import box from "../../assets/images/box.svg";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Textarea from "../../ui/textarea/textarea.jsx";
import Button from "../../ui/button/button.jsx";

const Order = ({close, title}) => {
    const [checked, setChecked] = useState(false);


    return <div className='order-wrapper'>
        <p className='order-sub-title'>Заказать</p>
        <h2 className='modal-title'>{title}</h2>

        <div className='order-tools'>
            <div className='order-input'>
                <Input title={'Как к вам обращаться'} required={true} type={'text'} placeholder='Иван Иванов Иванович'/>
            </div>
            <div className='order-inputs G-flex'>
                <Input type={'text'} title={'Номер телефона'} required={true} placeholder='+7 988 000 00-00'/>
                <Input type={'email'} title={'Электронная почта'} required={true} placeholder='you@company.com'/>
            </div>

            <div className='order-inputs G-flex'>
                <Input type={'text'} title={'Компания'} required={false} placeholder='ООО "Рога и копыта'/>
                <Input type={'text'} title={'Должность'} required={false} placeholder='Менеджер по закупкам'/>
            </div>

            <div className='order-textarea'>
                <Textarea placeholder='Расскажите коротко' title='Ваше предложение'/>
            </div>
            <div className={`order-agree form-agree  G-align-center ${checked ? "checked" : ""}`}
                 onClick={() => setChecked(!checked)}>
                <div className='agree-icon G-flex'>
                    <img src={box} alt=""/>
                </div>
                <div className='agree-text'>
                    Вы согласны с <NavLink to='/'>Политикой обработки персональных данных</NavLink>
                </div>

            </div>

            <div className='order-bnt'>
                <Button text={'Написать нам'} variant='average-btn-primary'/>
            </div>


        </div>

    </div>
};

export default Order;