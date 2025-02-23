import './button.scss'


const Button = ({variant,text,icon,onClick}) => {
    return <button onClick={onClick} className={`button ${variant}`}>
        <span>{text}</span>
        {icon && <i className={`icon ${icon}`}></i>}

    </button>
};

export default Button;