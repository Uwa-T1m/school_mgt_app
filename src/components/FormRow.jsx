const FormRow = ({name, value, handleChange, className, type, width,placeholder,}) => {
  return (
    <div className='flex flex-col gap-4'>
      <label htmlFor={name} className='capitalize'>
        {name}
      </label>

        <input 
        type={type} 
        name={name} 
        id={name} 
        value={value} 
        onChange={handleChange} 
        placeholder={placeholder}
        style={{width}}
        className={`p-2 mb-4 rounded-md border-2 bg-transparent dark:text-white text-slate-900 outline-none ${className}`}
        />
    </div>
  )
}

export default FormRow