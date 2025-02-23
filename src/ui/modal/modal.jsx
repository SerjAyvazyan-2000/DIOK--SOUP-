import React from 'react';
import './modal.scss'
import closeImg from '../../assets/images/close.svg'

const Modal = ({children, active,close}) => {
    return <div className={`modal-block G-center ${active ? 'active' : ''}`}>
        <div onClick={() => close()} className='modal-bg'></div>
        <div className='modal-cnt'>
            {children}

            <div onClick={() => close()} className='modal-close G-flex'>
                <img src={closeImg} alt=""/>
            </div>
        </div>


    </div>
};

export default Modal;