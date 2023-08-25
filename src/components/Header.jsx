import React from 'react'

const Header = ({title}) => {
  return (
    <div>
        <h1 className={`text-4xl text-slate-900 dark:text-white font-medium m-8`}>{title}</h1>
    </div>
  )
}

export default Header