import { Header, Button, Card } from '../../components'
import { BsSearch,  } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/favicon.ico'


const AllTeachers = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <Header title="All Teachers" />
      <div className="p-4 bg-white dark:bg-slate-800 rounded-lg w-[90%] m-auto flex items-center justify-between">
        <div className="border-2 dark:border-gray-300 px-2 gap-2 rounded-md flex items-center">
          <i><BsSearch className="text-purple-700 dark:text-white font-bold" /></i>
          <input type="text" className="border-0 p-2 rounded-md bg-transparent dark:text-white text-slate-900 outline-none" placeholder="Search here..." />
        </div>
        <div className='flex items-center'>
          <select className="dark:text-white border-2 bg-transparent p-2 rounded-md outline-none">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <Link to="/add-student"><Button className="bg-purple-700" borderRadius="5px" text={(<b className="flex items-center gap-2"> <FaPlus /> Add Student</b>)} /></Link>
        </div>
      </div>
      <div className="grid grid-cols-4  gap-3 w-[90%] m-auto">
        <Card title="Munaroh Steffani" text="Teacher" tag="science">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
        <Card title="Munaroh Steffani" text="Teacher" tag="art">
          <img src={Logo} className="rounded-full" />
        </Card>
      </div>
    </div>
  )
}

export default AllTeachers