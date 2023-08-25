import { Header, Button } from '../../components'
import { BsSearch, BsEnvelope } from 'react-icons/bs'
import { FaEllipsisH, FaPhone, FaPlus } from 'react-icons/fa'

const AllStudents = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <Header title="All Students" />
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
          <Button className="bg-purple-700" borderRadius="5px" text={(<b className="flex items-center gap-2"><FaPlus /> Add Student</b>)} />
        </div>
      </div>
      <div className="m-auto flex w-[90%] items-center justify-center">
        <table className='w-full m-auto overflow-x-auto'>
          <tr className='flex gap-3 items-center justify-around p-2'>
            <th className='text-center truncate'><input type='checkbox' /></th>
            <th className='text-center truncate w-24'>Name</th>
            <th className='text-center truncate w-24'>ID</th>
            <th className='text-center truncate w-24'>Date</th>
            <th className='text-center w-48'>Parent Name</th>
            <th className='text-center truncate w-16'>City</th>
            <th className='text-center truncate'>Contact</th>
            <th className='text-center truncate'>Grade</th>
            <th className='text-center truncate w-16'>Action</th>
          </tr>
          <tr className='flex gap-3 items-center justify-around dark:bg-slate-800 pb-4 bg-white p-2'>
            <td className='text-center truncate'><input type='checkbox' /></td>
            <td className='text-center truncate'>Longer Name</td>
            <td className='text-center truncate w-24'>ID 123456789</td>
            <td className='text-center truncate w-24'>March 25, 2023</td>
            <td className='text-center truncate w-48'>Parent Name</td>
            <td className='text-center truncate w-16'>Enugu</td>
            <td className='text-center truncate flex items-center gap-2'> <i className='bg-purple-700 text-white p-2 rounded-full'><FaPhone /></i><i className='bg-purple-700 text-white p-2 rounded-full'><BsEnvelope /></i></td>
            <td className='text-center truncate'>VIII AB</td>
            <td className='text-center truncate w-12 flex items-center'><i><FaEllipsisH /></i></td>
          </tr>

          <tr className='flex gap-3 items-center justify-around dark:bg-slate-800 bg-white p-2'>
            <td className='text-center truncate'><input type='checkbox' /></td>
            <td className='text-center truncate'>Longest Name</td>
            <td className='text-center truncate w-24'>ID 123456789</td>
            <td className='text-center truncate w-24'>March 25, 2023</td>
            <td className='text-center truncate w-48'>Parent Name</td>
            <td className='text-center truncate w-16'>Enugu</td>
            <td className='text-center truncate flex items-center gap-2'> <i className='bg-purple-700 text-white p-2 rounded-full'><FaPhone /></i><i className='bg-purple-700 text-white p-2 rounded-full'><BsEnvelope /></i></td>
            <td className='text-center truncate'>VIII AB</td>
            <td className='text-center truncate w-12 flex items-center'><i><FaEllipsisH /></i></td>
          </tr>
        </table>
        </div>
      </div>
  )
}

export default AllStudents