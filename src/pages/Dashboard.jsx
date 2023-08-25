import {FaUsers, FaUser} from 'react-icons/fa' 
import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import {ResponsiveContainer, BarChart,AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Area} from 'recharts'

const studentData = [
    {grade:'1st', students:'120'},
    {grade:'2nd', students:'150'},
    {grade:'3rd', students:'130'},
    {grade:'4th', students:'200'},
    {grade:'5th', students:'140'},
    {grade:'6th', students:'160'},
]
const schoolData = [
    {grade:'2016', teachers:'600'},
    {grade:'2017', teachers:'350'},
    {grade:'2018', teachers:'0'},
    {grade:'2019', teachers:'200'},
    {grade:'2020', teachers:'550'},
    {grade:'2021', teachers:'260'},
]

const Dashboard = () => {    
    const [selectedDate , setSelectedDate] = useState(new Date())

  return (
    <div>

    <div className="dark:bg-slate-800 grid md:grid-cols-2 rounded-lg gap-4 bg-white w-[90%] p-6 m-auto">
        <div className="flex flex-col  items-center justify-center gap-4">
            <span className="text-white"><FaUsers className="text-2xl h-[auto] w-[auto] p-4 bg-purple-500 rounded-full"/></span>
            <h4><b>150</b> Students</h4>
        </div>
        <div className="flex flex-col  items-center justify-center gap-4">
            <span className="text-white"><FaUser className="text-2xl h-[auto] w-[auto] p-4 bg-red-500 rounded-full"/></span>
            <h4><b>100</b> Students</h4>
        </div>
    </div>
    <div className="dark:bg-slate-800 bg-white p-4 w-[90%] m-auto rounded-lg my-7 flex flex-col gap-7 items-center justify-center">
        <div className="w-full px-4"><h3 className="text-purple-700 text-xl font-medium">Student Performance</h3></div>
        <ResponsiveContainer  width="80%" height={400} >
    <BarChart data={studentData}>
<XAxis dataKey="grade"/>
<YAxis />
<CartesianGrid />
<Tooltip />
<Legend />
<Bar dataKey="students" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    </div>
    <div className="dark:bg-slate-800 bg-white p-4 w-[90%] m-auto rounded-lg my-7 flex items-center flex-col gap-7 justify-center">
    <div className="w-full px-4"><h3 className="text-purple-700 text-xl font-medium">School Overview</h3></div>
        <ResponsiveContainer  width="80%" height={400} >
    <AreaChart data={schoolData}>
<XAxis dataKey="grade"/>
<YAxis />
<CartesianGrid />
<Tooltip />
<Legend />
<Area dataKey="teachers" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
    </div>
    <div className="dark:bg-slate-800 bg-white p-4 w-[90%] m-auto rounded-lg my-7 flex items-center flex-col gap-7 justify-center">
<div className="w-full max-w-[1000px] m-auto">
<Calendar onChange={date=>setSelectedDate(date)}
value={selectedDate}
className="bg-transparent border-0 w-full"
/>
</div>
</div>
    </div>
  )
}

export default Dashboard