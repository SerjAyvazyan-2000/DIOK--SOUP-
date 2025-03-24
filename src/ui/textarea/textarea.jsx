import './textarea.scss'

const Textarea = ({placeholder,labelClass,title,required,onChange,value,name,error,errorLength}) => {
    return<label className={`label-textarea ${labelClass} ${error ? "error" : ""}`}>
            <div className='textarea-name G-align-start'>
                {errorLength ? <b className='error-text'>Минимальное количество символов: 50 </b> : <span>{title}</span>}

                {required && <i className='icon icon-required'></i>}
            </div>
            <textarea value={value} name={name} onChange={onChange} placeholder={placeholder}></textarea>
        </label>
        };

        export default Textarea;