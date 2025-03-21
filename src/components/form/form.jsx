import './form.scss'
import Input from "../../ui/input/input.jsx";
import Textarea from "../../ui/textarea/textarea.jsx";
import React, { useState} from "react";
import box from '../../assets/images/box.svg'
import {NavLink} from "react-router-dom";
import Button from "../../ui/button/button.jsx";
import api from "../../api.js";
import {useFetchData} from "../../hooks/useFetchData/useFetchData.jsx";
import {toast, ToastContainer} from "react-toastify";

const Form = ({titleClass,blockClass}) => {
    const [checked, setChecked] = useState(false);

    const {data: landing, isLoading: isLoadingLanding} = useFetchData("/landing", 'Logo');




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



    return <>

        <section className={` ${blockClass ? blockClass : ' form-section'}`}>
            <div className='container'>
                <div className='form-body G-flex'>
                    <div className='form-titles G-flex-column'>
                        <h2 className={`form-title ${titleClass}`}>
                            Давайте <span className='text-wrap'>реализуем вашу</span> идею вместе
                        </h2>
                        {!isLoadingLanding && landing ?
                            <div className='form-clue'>
                                Заполните форму или напишите нам на почту:
                                <p>
                                    <a href={`mailto:${landing?.salesEmail}`}>{landing?.salesEmail}</a>
                                </p>


                            </div>
                            : null}

                    </div>
                    <form action="" className='form'>

                        <div className='form-inputs-block G-flex-column'>

                            <div className='form-input'>
                                <Input
                                    title='Имя Фамилия Отчество'
                                    type={'text'} placeholder='Иван Иванов Иванович'
                                    required={true}
                                    onChange={handleChange}
                                    name={'fullname'}
                                    value={formData.fullname}
                                    error={errors.fullname}


                                />
                            </div>

                            <div className='form-inputs G-align-center'>
                                <Input
                                    title='Номер телефона'
                                    type={'text'} placeholder='+7 988 000 00-00'
                                    required={true}
                                    onChange={handleChange}
                                    value={formData.phone_number}
                                    name={'phone_number'}
                                    error={errors.phone_number}

                                />
                                <Input
                                    title='Электронная почта'
                                    type={'email'} placeholder='you@company.com'
                                    required={true}
                                    onChange={handleChange}
                                    name={'email'}
                                    value={formData.email}
                                    error={errors.email}

                                />
                            </div>

                            <div className='form-inputs G-align-center'>
                                <Input
                                    title='Компания'
                                    type={'text'} placeholder='ООО "Рога и копыта"'
                                    required={false}
                                    onChange={handleChange}
                                    name={'company_name'}
                                    value={formData.company_name}
                                />
                                <Input
                                    title='Должность'
                                    type={'email'} placeholder='Менеджер по закупкам'
                                    required={false}
                                    onChange={handleChange}
                                    name={'position'}
                                    value={formData.position}
                                />
                            </div>

                            <div className='form-input'>
                                <Textarea error={errors.message} errorLength={errors.messageLength}
                                          value={formData.message} name={'message'} onChange={handleChange}
                                          placeholder='Расскажите коротко' title='Ваш вопрос или предложения'/>
                            </div>

                            <div className={`form-agree  G-align-center ${checked ? "checked" : ""}`}
                                 onClick={() => setChecked(!checked)}>
                                <div className='agree-icon G-flex'>
                                    <img src={box} alt=""/>
                                </div>
                                <div className='agree-text'>
                                    Вы согласны с <NavLink to='/'>Политикой обработки персональных данных</NavLink>
                                </div>

                            </div>

                            <div className='form-submit'>
                                <Button onClick={handleSubmit} variant={'big-btn-primary'} text={'Написать нам'}/>

                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </section>


    </>
};

export default Form;