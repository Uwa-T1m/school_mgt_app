import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import { Footer, Navbar, Sidebar } from './components' 
import { useStateContext } from './contexts/store' 
import {Dashboard,AllStudents, AddStudent, StudentProfile, AllTeachers, TeacherProfile, AddTeacher} from './pages'
const App = () => { 
  const { activeMenu } = useStateContext() 
  return (
    <BrowserRouter>
      <div className="flex w-full dark:bg-slate-900 bg-gray-100 dark:text-white min-h-screen">
        <div className={activeMenu ? "md:w-1/5" : 'hidden w-0'}><Sidebar /></div>  
        <div className={activeMenu ? "md:flex hidden flex-col w-4/5 min-w-[auto]" : 'flex flex-col w-full'}>
          <div className="sticky top-0 z-[500]"><Navbar /></div>
          <div className='m-2'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={(
                <section className="w-full h-screen fixed top-0 left-0 dark:bg-slate-950 bg-white z-[100000] flex flex-col items-center justify-center">
                  <h1 className="text-3xl dark:text-white font-medium">We can't seem to find the page you are looking for</h1>
                  <p className="my-2 text-gray-600 hover:text-purple-700 hover:underline text-lg"><Link to="/">&larr; Back to Home Page</Link></p>
                </section>
              )} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-student" element={<AddStudent />}/>
              <Route path="/add-teacher" element={<AddTeacher />}/>
              <Route path="/teachers" element={<AllTeachers />}/>
              <Route path="/students" element={<AllStudents />}/>
              <Route path="/students/profile" element={<StudentProfile />}/>
              <Route path="/teachers/profile" element={<TeacherProfile />}/>

            </Routes>
          </div>
          <div className='my-7 w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App