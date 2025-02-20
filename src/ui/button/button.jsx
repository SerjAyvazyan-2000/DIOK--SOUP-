import './button.scss'


const Button = ({variant,text,icon}) => {
    return <button className={`button ${variant}`}>
        <span>{text}</span>
        {icon && <i className={`icon ${icon}`}></i>}

    </button>
};

export default Button;