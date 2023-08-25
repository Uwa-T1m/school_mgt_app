import Logo from '../../../assets/favicon.ico' 
import { BsCalendar, BsClock, BsEnvelope } from "react-icons/bs"
import { FaEllipsisH, FaMapMarkedAlt, FaUser, FaPhoneAlt } from "react-icons/fa"

const StudentProfile = () => {
    return (
        <div>
            <div className="w-[90%] h-auto m-auto rounded-lg mb-7 bg-white dark:bg-slate-800">
                <div className="flex flex-col relative">
                    <div className="h-[200px] bg-sky-500 rounded-lg"></div>
                    <div className="absolute rounded-full h-32 w-32 border-8 flex bottom-[-50px] left-24 dark:border-slate-800 border-white">
                        <img src={Logo} className="object-cover rounded-full" />
                    </div>
                    <FaEllipsisH className="absolute right-16 bottom-[-40px]" />
                </div>
                <div className="mt-32 w-full pl-8">
                    <h1 className="text-4xl mb-3 font-medium">Longer Name</h1>
                    <b className="text-lg my-4 font-medium">Student</b>
                </div>
                <div className="w-full grid grid-cols-4 overflow-x-auto md:grid-cols-2 place-items-start gap-4 px-6 py-4">
                    <div className="flex  items-center justify-center gap-4">
                        <span className="text-white"><FaUser className="text-2xl h-[auto] w-[auto] p-4 bg-purple-500 rounded-full" /></span>
                        <h4 className="flex flex-col">Parent: <b>Justin Hope</b> </h4>
                    </div>
                    <div className="flex  items-center justify-center gap-4">
                        <span className="text-white text-2xl h-[auto] w-[auto] p-4 bg-purple-500 rounded-full"><FaMapMarkedAlt /></span>
                        <h4 className="flex flex-col">Address <b>Jakarts, Indonesia</b> </h4>
                    </div>
                    <div className="flex  items-center justify-center gap-4">
                        <span className="text-white"><FaPhoneAlt className="text-2xl h-[auto] w-[auto] p-4 bg-purple-500 rounded-full" /></span>
                        <h4 className="flex flex-col">Phone <b>+12 345 6789 0</b> </h4>
                    </div>
                    <div className="flex  items-center justify-center gap-4">
                        <span className="text-white text-2xl h-[auto] w-[auto] p-4 bg-purple-500 rounded-full"><BsEnvelope /></span>
                        <h4 className="flex flex-col">Email<b>Historia@mail.com</b> </h4>
                    </div>
                </div>
            </div>
            <div className="w-[90%] h-auto m-auto rounded-lg mb-7 bg-white dark:bg-slate-800">
                <div className="w-full capitalize p-4 font-medium">payment history</div>
                <div className="m-auto flex items-center w-full justify-center">
                    <table className='w-full m-auto overflow-x-auto'>
                        <tr className='flex gap-3 w-full bg-gray-100 dark:bg-slate-900 text-purple-700  items-center justify-between p-2'>
                            <th className='text-center'>Payment Number</th>
                            <th className='text-center'>Date & Time</th>
                            <th className='text-center'>Amount</th>
                            <th className='text-center'>Status</th>
                        </tr>
                        <tr className='flex gap-3 w-full  items-center mb-3 justify-between p-2'>
                            <td className='text-center'>#12345678</td>
                            <td className='text-center text-gray-400'>03 March 2023, 13:45 PM</td>
                            <td className='text-center'>$ 50,036</td>
                            <td className='text-center text-green-500 font-medium'>Completed</td>
                        </tr>
                        <tr className='flex gap-3 w-full  items-center mb-3 justify-between p-2'>
                            <td className='text-center'>#12345679</td>
                            <td className='text-center text-gray-400'>03 March 2023, 13:45 PM</td>
                            <td className='text-center'>$ 40,010</td>
                            <td className='text-center text-red-500 font-medium'>Canceled</td>
                        </tr>
                        <tr className='flex gap-3 w-full  items-center mb-3 justify-between p-2'>
                            <td className='text-center'>#12345680</td>
                            <td className='text-center text-gray-400'>03 March 2023, 13:45 PM</td>
                            <td className='text-center'>$ 30, 050</td>
                            <td className='text-center text-green-500 font-medium'>Completed</td>
                        </tr>
                        <tr className='flex gap-3 w-full  items-center mb-3 justify-between p-2'>
                            <td className='text-center'>#12345681</td>
                            <td className='text-center text-gray-400'>03 March 2023, 13:45 PM</td>
                            <td className='text-center'>$ 20,070</td>
                            <td className='text-center text-red-500 font-medium'>Canceled</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="w-[90%] p-4 h-auto m-auto rounded-lg bg-white dark:bg-slate-800">
<h4 className="text-purple-700 font-medium text-2xl p-4">Schedule Details</h4>
<b className="text-gray-400 font-normal px-4 py-2">Thursday, 10th April, 2022</b>
</div>

<div className="mt-7 w-full">
<div className="grid grid-cols-2 w-[90%] m-auto gap-4">
<div className="p-4 border-l-4 border-purple-700 rounded-md dark:bg-slate-800 bg-white h-auto">
    <div className="mb-4">
    <h4 className="text-purple-700 text-xl font-medium">Basic Algorithim</h4>
    <p className="text-gray-400">Algorithim</p>
    </div>
    <div className="flex items-center justify-between">
        <div>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsCalendar className="text-red-500 font-bold" /> July 20,2023</p>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsClock  className="text-yellow-500 font-bold"/> 09.00-10.00 AM</p>
        </div>
        <div><img src="../../../assets/favicon.ico" /></div>
    </div>
</div>
<div className="p-4 border-l-4 border-orange-500 rounded-md dark:bg-slate-800 bg-white h-auto">
    <div className="mb-4">
    <h4 className="text-purple-700 text-xl font-medium">Basic Art</h4>
    <p className="text-gray-400">Art</p>
    </div>
    <div className="flex items-center justify-between">
        <div>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsCalendar className="text-red-500 font-bold" /> July 20,2023</p>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsClock  className="text-yellow-500 font-bold"/> 09.00-10.00 AM</p>
        </div>
        <div><img src="../../../assets/favicon.ico" /></div>
    </div>
</div>
<div className="p-4 border-l-4 border-yellow-500 rounded-md dark:bg-slate-800 bg-white h-auto">
    <div className="mb-4">
    <h4 className="text-purple-700 text-xl font-medium">React & Scss</h4>
    <p className="text-gray-400">Programming</p>
    </div>
    <div className="flex items-center justify-between">
        <div>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsCalendar className="text-red-500 font-bold" /> July 20,2023</p>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsClock  className="text-yellow-500 font-bold"/> 09.00-10.00 AM</p>
        </div>
        <div><img src="../../../assets/favicon.ico" /></div>
    </div>
</div>
<div className="p-4 border-l-4 border-purple-700 rounded-md dark:bg-slate-800 bg-white h-auto">
    <div className="mb-4">
    <h4 className="text-purple-700 text-xl font-medium">Simple Past Tense</h4>
    <p className="text-gray-400">English</p>
    </div>
    <div className="flex items-center justify-between">
        <div>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsCalendar className="text-red-500 font-bold" /> July 20,2023</p>
            <p className="flex items-center gap-2 text-gray-400 text-sm"><BsClock  className="text-yellow-500 font-bold"/> 09.00-10.00 AM</p>
        </div>
        <div><img src="../../../assets/favicon.ico" /></div>
    </div>
</div>
</div>
</div>

        </div>
    )
}

export default StudentProfile