import './order.scss'
import Input from "../../ui/input/input.jsx";
import box from "../../assets/images/box.svg";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Textarea from "../../ui/textarea/textarea.jsx";
import Button from "../../ui/button/button.jsx";
import api from "../../api.js";
import {toast, ToastContainer} from "react-toastify";

const Order = ({close, title}) => {
    const [checked, setChecked] = useState(false);



    const [formData, setFormData] = useState({
        fullname: "",
        phone_number: "",
        email: "",
        company_name: "",
        position: "",
        message: "",
    });


    const [errors, setErrors] = useState({
        fullname: false,
        phone_number: false,
        email: false,
        message:false,
        messageLength:false
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setErrors({ ...errors, [name]: false });
    };


    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.fullname.trim()) {
            newErrors.fullname = true;
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = true;
            isValid = false;
        }
        if (formData.message && formData.message.length < 50) {
            newErrors.messageLength = true;
            isValid = false;
        }

        if (!formData.phone_number.trim() || !/^\+?\d{10,15}$/.test(formData.phone_number)) {
            newErrors.phone_number = true;
            isValid = false;
        }

        if (!formData.email.trim() || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = true;
            isValid = false;
        }

        if (!checked) {
            toast.error("Вы должны согласиться с политикой обработки данных!");
            isValid = false;
        }


        setErrors(newErrors);
        return isValid;
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;


        toast.loading("Отправка данных...");

        try {
            const payload = {
                data: {
                    company_name: formData.company_name,
                    email: formData.email,
                    fullname: formData.fullname,
                    message: formData.message,
                    phone_number: formData.phone_number,
                    position: formData.position,
                }
            };


            const response = await api.post("/feedback-requests", payload, );


            toast.dismiss();
            toast.success("Отклик успешно отправлен!");

            setFormData({
                fullname: "",
                phone_number: "",
                email: "",
                company_name: "",
                position: "",
                message: "",
            });
            setChecked(false);

        } catch (err) {
            toast.dismiss();
            toast.error("Ошибка при отправке, попробуйте позже");

        }
    };




    return <div className='order-wrapper'>
        <p className='order-sub-title'>Заказать</p>
        <h2 className='modal-title'>{title}</h2>

        <div className='order-tools'>
            <div className='order-input'>
                <Input
                    title={'Как к вам обращаться'}
                    required={true} type={'text'}
                    placeholder='Иван Иванов Иванович'
                    onChange={handleChange}
                    name={'fullname'}
                    value={formData.fullname}
                    error={errors.fullname}
                />
            </div>
            <div className='order-inputs G-flex'>
                <Input
                    type={'text'}
                    title={'Номер телефона'}
                    required={true}
                    placeholder='+7 988 000 00-00'
                    onChange={handleChange}
                    name={'phone_number'}
                    value={formData.phone_number}
                    error={errors.phone_number}

                />
                <Input
                    type={'email'}
                    title={'Электронная почта'}
                    required={true}
                    placeholder='you@company.com'
                    onChange={handleChange}
                    name={'email'}
                    value={formData.email}
                    error={errors.email}

                />
            </div>

            <div className='order-inputs G-flex'>
                <Input
                    type={'text'}
                    title={'Компания'}
                    required={false}
                    placeholder='ООО "Рога и копыта'
                    onChange={handleChange}
                    name={'company_name'}
                    value={formData.company_name}

                />
                <Input
                    type={'text'}
                    title={'Должность'}
                    equired={false}
                    placeholder='Менеджер по закупкам'
                    onChange={handleChange}
                    name={'position'}
                    value={formData.position}
                />
            </div>

            <div className='order-textarea'>
                <Textarea
                    placeholder='Расскажите коротко'
                    title='Ваше предложение'
                    onChange={handleChange}
                    name={'message'}
                    value={formData.message}
                    error={errors.message}
                    errorLength={errors.messageLength}
                />
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
                <Button onClick={handleSubmit} text={'Написать нам'} variant='average-btn-primary'/>
            </div>


        </div>
        <ToastContainer />

    </div>
};

export default Order;