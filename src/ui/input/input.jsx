import './input.scss'

const Input = ({placeholder,labelClass,type,title,required,onChange,name,value,error}) => {
    return <label className={`label-input ${labelClass} ${error ? "error" : ""}`}>


        <div className='input-name G-align-start'>
            <span>{title}</span>
            {required && <i className='icon icon-required'></i>}
        </div>
        <input name={name} value={value} onChange={onChange}  type={type} placeholder={placeholder}/>

    </label>
};

export default Input;