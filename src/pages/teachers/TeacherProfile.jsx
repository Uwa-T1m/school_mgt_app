import { BsCalendar, BsClock, BsEnvelope } from "react-icons/bs"
import { FaEllipsisH, FaMapMarkedAlt, FaUser, FaPhoneAlt } from "react-icons/fa"


const TeacherProfile = () => {
  return (
    <div>
        <div className="w-[90%] h-auto m-auto rounded-lg mb-7 bg-white dark:bg-slate-800">
            <div className="flex flex-col relative">
                <div className="h-[200px] bg-sky-500 rounded-lg"></div>
                <div className="absolute rounded-full h-32 w-32 border-8 flex bottom-[-50px] left-24 dark:border-slate-800 border-white">
                    <img src="../../../assets/favicon.ico" className="object-cover rounded-full" />
                </div>
                <FaEllipsisH className="absolute right-16 bottom-[-40px]" />
            </div>
            <div className="mt-32 w-full pl-8">
                <h1 className="text-4xl mb-3 font-medium">Longest Name</h1>
                <b className="text-lg my-4 font-medium">History Teacher</b>
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
        <div className="w-[90%] p-8 h-auto m-auto rounded-lg mb-7 bg-white dark:bg-slate-800">
            <h3 className="text-xl font-medium text-purple-700 mb-2">About</h3>
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore eos porro odit? <br /> Eum molestiae temporibus harum autem inventore vel placeat excepturi magnam nostrum ad, at molestias quisquam enim! Quidem tempore consequatur similique et nostrum.</p>
        <div className="mb-4">
          <h3 className="text-xl font-medium text-purple-700 mb-2">Education:</h3>
          <ul  className="list-disc marker:text-purple-700 marker:text-lg">
            <span>
              <li className="font-medium text-md text-purple-700 py-1"><h5>History Major, University Akademi Historia</h5></li>
              <small className="text-gray-400">2013-2017</small>
            </span>
            <span>
              <li className="font-medium text-md text-purple-700 py-1"><h5>Master of History, University Akademi Historia</h5></li>
              <small className="text-gray-400">2013-2017</small>
            </span>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium text-purple-700 mb-2">Expertise:</h3>
          <p className="text-gray-400">World HIstory, Philosophy, Prehistoric, Culture, Ancient</p>
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
<h4 className="text-purple-700 text-xl font-medium">World History</h4>
<p className="text-gray-400">Class VII-B</p>
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
<h4 className="text-purple-700 text-xl font-medium">Ancient History</h4>
<p className="text-gray-400">Class VII-A</p>
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
<h4 className="text-purple-700 text-xl font-medium">Culture</h4>
<p className="text-gray-400">Class VII-A</p>
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
<h4 className="text-purple-700 text-xl font-medium">World History</h4>
<p className="text-gray-400">Class VII-C</p>
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

export default TeacherProfile