import './form.scss'
import Input from "../../ui/input/input.jsx";
import Textarea from "../../ui/textarea/textarea.jsx";
import {useState} from "react";
import box from '../../assets/images/box.svg'
import {NavLink} from "react-router-dom";
import Button from "../../ui/button/button.jsx";

const Form = ({titleClass,blockClass}) => {
    const [checked, setChecked] = useState(false);

    return <section className={` ${blockClass  ?  blockClass : ' form-section' }`}>
        <div className='container'>
            <div className='form-body G-flex'>
                <div className='form-titles G-flex-column'>
                   <h2 className={`form-title ${titleClass}`}>
                       Давайте <span className='text-wrap'>реализуем вашу</span> идею вместе
                   </h2>
                    <div className='form-clue'>
                        Заполните форму или напишите нам на почту:
                        <p>
                            <a href="mailto:sales@dioc.tech">sales@dioc.tech</a>
                        </p>


                    </div>
                </div>
                <form action="" className='form'>
                    <div className='form-inputs-block G-flex-column'>
                        <div className='form-input'>
                            <Input
                                title='Имя Фамилия Отчество'
                                type={'text'} placeholder='Иван Иванов Иванович'
                                required={true}
                            />
                        </div>
                        <div className='form-inputs G-align-center'>
                            <Input
                                title='Номер телефона'
                                type={'text'} placeholder='+7 988 000 00-00'
                                required={true}
                            />
                            <Input
                                title='Электронная почта'
                                type={'email'} placeholder='you@company.com'
                                required={true}
                            />
                        </div>
                        <div className='form-inputs G-align-center'>
                            <Input
                                title='Компания'
                                type={'text'} placeholder='ООО "Рога и копыта"'
                                required={false}
                            />
                            <Input
                                title='Должность'
                                type={'email'} placeholder='Менеджер по закупкам'
                                required={false}
                            />
                        </div>

                        <div className='form-input'>
                            <Textarea placeholder='Расскажите коротко' title='Ваш вопрос или предложения'/>
                        </div>
                        <div className={`form-agree  G-align-center ${checked ? "checked" : ""}`}
                             onClick={() => setChecked(!checked)}>
                            <div className='agree-icon G-flex' >
                                <img src={box} alt=""/>
                            </div>
                            <div className='agree-text'>
                                Вы согласны с <NavLink to='/'>Политикой обработки персональных данных</NavLink>
                            </div>

                        </div>

                        <div className='form-submit'>
                            <Button  variant={'big-btn-primary'} text={'Написать нам'}/>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
};

export default Form;