import {Button} from'.'
import {BsEnvelope} from 'react-icons/bs'
import {FaUser, FaEllipsisH} from 'react-icons/fa'

const Card = ({title,text,children, className, tag}) =>{
return(
    <div className={`shadow-md relative flex flex-col items-center  rounded-md bg-white dark:bg-slate-800 p-6 ${className}`}>
        <b className="absolute right-5 text-purple-700 bg-purple-300 p-1 rounded-md"><FaEllipsisH /></b>
        {children}
        <h4 className={`font-medium mt-3 mb-1 text-purple-700 text-xl`}>{title}</h4>
        <p className="text-gray-400 mb-3">{text}</p>
        <small className="text-green-600 bg-green-300 py-1 px-4 rounded-md text-sm capitalize font-medium">{tag}</small>
        <div className="flex items-center justify-center w-full py-3 text-center">
            <Button text={(<b className="flex items-center gap-2 justify-center"><FaUser /> Profile</b>)} className="bg-purple-700 w-1/2 text-center" borderRadius="7px"/>
            <Button text={(<b className="flex items-center gap-1 text-center justify-center"><BsEnvelope /> Chat</b>)} className="bg-red-400 w-1/2 text-center" borderRadius="7px"/>
        </div>
    </div>
)
}

export default Card