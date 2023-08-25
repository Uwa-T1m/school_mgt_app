const Button = ({className,type, color, clickFunc, borderRadius, text, size}) => {
  return (
    <button
    className={`text-${size} text-white p-2 m-2 font-medium hover:shadow-md ${className}`}
    style={{color, borderRadius }}
    onClick={clickFunc}
    type={type}
    >{text}</button>
  )
}

export default Button