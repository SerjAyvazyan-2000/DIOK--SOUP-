import React, {useState} from 'react';
import Input from "../../ui/input/input.jsx";
import resumeBorder from '../../assets/images/resumeBorder.webp'
import box from "../../assets/images/box.svg";
import {NavLink} from "react-router-dom";
import Button from "../../ui/button/button.jsx";
import './reply.scss'

const Reply = ({close}) => {
    const [checked, setChecked] = useState(false);

    return <div className='replay-wrapper'>
        <h2 className='modal-title'>Откликнуться <span className='text-wrap'>на вакансию</span></h2>
        <div className='replay-tools'>
            <div className='replay-input'>
                <Input title={'ФИО'} required={true} type={'text'} placeholder='Иван Иванов Иванович'/>
            </div>
            <div className='replay-inputs G-flex'>
                <Input type={'text'} title={'Номер телефона'} required={true} placeholder='+7 988 000 00-00'/>
                <Input type={'text'} title={'Telegram'} required={true} placeholder='@user'/>

            </div>

            <div className='resume-block'>
                <div className='resume-header G-align-start'>
                    <h3 className='resume-title'>Резюме</h3>
                    <i className='icon icon-required'></i>
                </div>
                <div className='resume-cnt G-center'>
                    <label className='resume-label'>
                        <p>Перетащите файлы или <span>загрузите</span></p>
                        <input type="file"/>
                        <span>Поддерживаемые форматы: PNG, TIFF, JPG,PDF</span>
                    </label>

                    <div className='resume-border G-flex'>
                        <img src={resumeBorder} alt="image"/>
                    </div>
                </div>

                    <div className={`resume-agree form-agree  G-align-center ${checked ? "checked" : ""}`}
                         onClick={() => setChecked(!checked)}>
                        <div className='agree-icon G-flex'>
                            <img src={box} alt=""/>
                        </div>
                        <div className='agree-text'>
                            Вы согласны с <NavLink to='/'>Политикой обработки персональных данных</NavLink>
                        </div>

                    </div>


                <div className='resume-btn'>
                    <Button variant={'average-btn-primary'} text={'Откликнуться'}/>

                </div>

            </div>
        </div>
    </div>
};

export default Reply;