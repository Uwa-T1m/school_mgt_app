import {NavLink} from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa'
import {useState} from 'react'
import {Button} from '.'
import Logo from '../../assets/favicon.ico'

const Sidebar = () =>{
    const [dropDownOpen, setDropDownOpen] = useState(false)
return(
    <div className="w-[inherit] dark:bg-slate-800 dark:text-white bg-white shadow-xl h-screen fixed l-0 z-50">
       <div className="m-6">
       <NavLink to="/">
            <div className="flex items-center gap-2 mb-7">
               <div className='w-8 h-8'>
                    <img src={Logo} alt="logo" className='object-cover w-[inherit] h-[inherit]' />
                </div>
                <h3 className="font-medium text-xl">LearnSyncPro</h3>
               </div>
        </NavLink>
               <div className="flex flex-col">
                <Button text={(<b className="flex items-center justify-between capitalize dark:text-white text-black">students <FaChevronDown /></b>)} clickFunc={()=>setDropDownOpen(!dropDownOpen)} className="w-full hover:shadow-none text-start"/>
                <div className={ dropDownOpen ? "flex flex-col p-4 text-sm" : 'hidden'}>
                    <NavLink to="/students">View All Students</NavLink>
                    <NavLink to="/add-student">Add Student</NavLink>
                    <NavLink to="/students/profile">Student Profile</NavLink>
                </div>
                <Button text={(<b className="flex items-center justify-between capitalize dark:text-white text-black">teachers <FaChevronDown /></b>)} clickFunc={()=>setDropDownOpen(!dropDownOpen)} className="w-full hover:shadow-none text-start"/>
                <div className={ dropDownOpen ? "flex flex-col p-4 text-sm" : 'hidden'}>
                    <NavLink to="/teachers">View All Teachers</NavLink>
                    <NavLink to="/add-teacher">Add Teacher</NavLink>
                    <NavLink to="/teachers/profile">Teacher Profile</NavLink>
                </div>
               </div>
       </div>
        </div>
)
}
export default Sidebar