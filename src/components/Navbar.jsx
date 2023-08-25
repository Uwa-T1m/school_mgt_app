import Logo from '../../assets/favicon.ico' 
import { useEffect } from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import { BsSun, BsMoon, BsSearch, BsBell } from 'react-icons/bs'
import { useStateContext } from '../contexts/store'
import Button from './Button'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const { activeMenu, setActiveMenu, darkMode, setDarkMode } = useStateContext()

    const switchMode = () => setDarkMode(!darkMode)

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("darkMode", "true")
            window.document.documentElement.classList.add('dark')
        }

        else if (darkMode === false) {
            localStorage.setItem("darkMode", "false");
            window.document.documentElement.classList.remove('dark');
        }

        else {
            setDarkMode(localStorage.getItem("darkMode") === "true")
        }
    }, [darkMode])

    return (
        <nav className="w-full py-4 bg-gray-100 dark:bg-slate-900 flex px-2 items-center justify-between sticky top-0 z-[10000]">
            <div className="flex ml-4 gap-4">
                <button className='text-xl dark:text-white' onClick={() => setActiveMenu(!activeMenu)}><FaAlignLeft /></button>
            <NavLink to="/">
            <div className="flex items-center gap-2">
               <div className='w-8 h-8'>
                    <img src={Logo} alt="logo" className='object-cover w-[inherit] h-[inherit]' />
                </div>
                <h3 className="font-medium text-xl">LearnSyncPro</h3>
               </div>
            </NavLink>
            </div>
            <div className='flex items-center'>
                <Button
                    text={<BsSearch />}
                    color={darkMode ? '#fff' : '#555'}
                    className='bg-gray-200 dark:bg-slate-700 dark:text-white'
                    borderRadius='5px'
                    size='lg'
                />

                <Button
                    text={darkMode ? <BsSun /> : <BsMoon />}
                    color={darkMode ? '#fff' : '#555'}
                    className='bg-gray-200 dark:bg-slate-700 dark:text-white'
                    borderRadius='5px'
                    size='lg'
                    clickFunc={switchMode}
                />
                <Button
                    text={<BsBell />}
                    color={darkMode ? '#fff' : '#555'}
                    className='bg-gray-200 dark:bg-slate-700 dark:text-white'
                    borderRadius='5px'
                    size='lg'
                />
                <Link to="/teachers/profile">
                    <div className='h-8 w-8'>
                        <img src="/assets/favicon.ico" alt="profile-pic" className='object-cover rounded-full h-[inherit] w-[inherit]' />
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar