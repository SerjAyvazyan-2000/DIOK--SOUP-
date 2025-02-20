import './input.scss'

const Input = ({placeholder,labelClass,type,title,required}) => {
    return <label className={`label-input ${labelClass}`}>
        <div className='input-name G-align-start'>
            <span>{title}</span>
            {required && <i className='icon icon-required'></i>}
        </div>
        <input  type={type} placeholder={placeholder}/>

    </label>
};

export default Input;