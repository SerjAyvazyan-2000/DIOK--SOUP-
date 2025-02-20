import './textarea.scss'

const Textarea = ({placeholder,labelClass,title,required}) => {
    return <label className={`label-textarea ${labelClass}`}>
        <div className='textarea-name G-align-start'>
            <span>{title}</span>
            {required && <i className='icon icon-required'></i>}
        </div>
        <textarea placeholder={placeholder}></textarea>
    </label>
};

export default Textarea;