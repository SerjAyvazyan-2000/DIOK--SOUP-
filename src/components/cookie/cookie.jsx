import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './cookie.scss'
import Button from "../../ui/button/button.jsx";
const Cookie = () => {

    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
         setHidden(!hidden);
    }

    return <div className={`cookie-box G-justify-between ${hidden ? 'hidden': ''}`}>
        <div className='cookie-texts G-align-center'>
           <p>
               Мы используем файлы cookie, чтобы гарантировать вам наилучший опыт.
              <span className='mobile-text-wrap'> Вы соглашаетесь с <Link to={'/'}>Политикой <span className='mobile-text-wrap'>конфиденциальности.</span></Link></span>
           </p>
        </div>
        <div onClick={handleClick} className='cookie-bnt'>
            <Button variant={'btn-primary'} text={'Принять'}/>
        </div>
    </div>
};

export default Cookie;