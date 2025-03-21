import React, {useState} from 'react';
import Input from "../../ui/input/input.jsx";
import resumeBorder from '../../assets/images/resumeBorder.webp'
import box from "../../assets/images/box.svg";
import {NavLink} from "react-router-dom";
import Button from "../../ui/button/button.jsx";
import './reply.scss'
import {toast, ToastContainer} from "react-toastify";
import api from "../../api.js";

const Reply = ({close}) => {
    const [checked, setChecked] = useState(false);
    const [fileError, setFileError] = useState("");
    const [fileUploaded, setFileUploaded] = useState(false);

    const [formData, setFormData] = useState({
        fullname: "",
        phoneNumber: "",
        telegram: "",
        resume: null,
    });

    const [errors, setErrors] = useState({
        fullname: "",
        phoneNumber: "",
        telegram: "",
        resume: null,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        setErrors({ ...errors, [name]: false });

    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.fullname.trim()) {
            newErrors.fullname = true;
            isValid = false;
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = true;
            isValid = false;
        }


        if (!formData.phoneNumber.trim() || !/^\+?\d{10,15}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = true;
            isValid = false;
        }

        if (!formData.telegram.trim()) {
            newErrors.telegram = true;
            isValid = false;
        }

        if (!formData.resume) {
            newErrors.resume = true;
            isValid = false;
        }

        if (!checked) {
             toast.error("Вы должны согласиться с политикой обработки данных!");
            isValid = false;
        }


        setErrors(newErrors);
        return isValid;
    };



    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const allowedFormats = ["image/png", "image/tiff", "image/jpg", "application/pdf"];
            const fileType = file.type;

            if (allowedFormats.includes(fileType)) {
                setFormData((prev) => ({ ...prev, resume: file }));
                setFileError("");
                setFileUploaded(true);
                setErrors((prevErrors) => ({ ...prevErrors, resume: "" }));
            } else {
                setFileError("Неподдерживаемый формат файла!");
                setFileUploaded(false);
                setErrors((prevErrors) => ({ ...prevErrors, resume: "Неподдерживаемый формат файла!" }));
            }
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log()

        if (!validateForm()) return;

        toast.loading("Отправка данных...");

        try {

            const jsonData = {
                fullname: formData.fullname,
                phoneNumber: formData.phoneNumber,
                telegram: formData.telegram,
                resume: formData.resume,
                locale: "ru",
                localizations: [],
            };

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            await api.post("/job-applications", { data: jsonData },config);

            toast.dismiss();
            toast.success("Отклик успешно отправлен!");
            setFormData({ fullname: "", phoneNumber: "", telegram: "", resume: null });
            setChecked(false);
            setFileUploaded(false)

        } catch (err) {
            toast.dismiss();
            toast.error("Ошибка при отправке, попробуйте позже");
        }
    };



    return <div className='replay-wrapper'>
        <h2 className='modal-title'>Откликнуться <span className='text-wrap'>на вакансию</span></h2>
        <div className='replay-tools'>
            <div className='replay-input'>
                <Input
                    title={'ФИО'}
                    required={true}
                    type={'text'}
                    placeholder='Иван Иванов Иванович'
                    onChange={handleChange}
                    name={'fullname'}
                    value={formData.fullname}
                    error={errors.fullname}
                />
            </div>
            <div className='replay-inputs G-flex'>
                <Input
                    type={'text'}
                    title={'Номер телефона'}
                    required={true}
                    placeholder='+7 988 000 00-00'
                    onChange={handleChange}
                    name={'phoneNumber'}
                    value={formData.phoneNumber}
                    error={errors.phoneNumber}
                />
                <Input
                    type={'text'}
                    title={'Telegram'}
                    required={true}
                    placeholder='@user'
                    onChange={handleChange}
                    name={'telegram'}
                    value={formData.telegram}
                    error={errors.telegram}
                />

            </div>
            <div className='resume-block'>
                <div className='resume-header G-align-start'>
                    <h3 className='resume-title'>Резюме</h3>
                    <i className='icon icon-required'></i>
                </div>
                <div className='resume-cnt G-center'>
                    <label className={`resume-label ${errors.resume ? 'error' : ''}`}>
                        <p>Перетащите файлы или <span>загрузите</span></p>
                        <input type="file" onChange={handleFileChange}/>
                        <span>{fileUploaded ? "Загружено" : fileError || "Поддерживаемые форматы: PNG, TIFF, JPG, PDF"}</span>
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
                    <Button onClick={handleSubmit} variant={'average-btn-primary'} text={'Откликнуться'}/>

                </div>

            </div>
        </div>

        <ToastContainer />

    </div>
};

export default Reply;