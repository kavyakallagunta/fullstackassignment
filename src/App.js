import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Departments from './pages/Departments';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './pages/Navbar';
import Signup from './pages/Signup';
import StudentList from './pages/StudentList';
import Workshoplink1 from './pages/Workshoplink1';
import Workshoplink2 from './pages/Workshoplink2';
import Workshoplink3 from './pages/Workshoplink3';
import Hackathonlink1 from './pages/Hackathonlink1';
import Hackathonlink2 from './pages/Hackathonlink2';
import Hackathonlink3 from './pages/Hackathonlink3';
import Clubeventslink1 from './pages/Clubeventslink1';
import Clubeventslink2 from './pages/Clubeventslink2';
import Sports from './pages/Sports';
import Radio from './pages/Radio';
import Music from './pages/Music';
import Formlogin from './pages/Formlogin';


const App = () => {
    return (
        <div align='center'>
            
            
            <Navbar/>
            <Routes>
            <Route path='/' element={<Formlogin/>}/>
                <Route path='Home' element={<Home/>}/>
                <Route path='Departments' element={<Departments/>}>
                <Route path='Workshoplink1' element={<Workshoplink1/>}/>
                <Route path='Workshoplink2' element={<Workshoplink2/>}/>
                <Route path='Workshoplink3' element={<Workshoplink3/>}/>
                </Route>
                
                <Route path='StuDetails' element={<StudentList/>}>
                <Route path='Hackathonlink1' element={<Hackathonlink1/>}/>
                <Route path='Hackathonlink2' element={<Hackathonlink2/>}/>
                <Route path='Hackathonlink3' element={<Hackathonlink3/>}/>
                </Route>
                <Route path='Signup' element={<Signup/>}>
                <Route path='Clubeventslink1' element={<Clubeventslink1/>}/>
                <Route path='Clubeventslink2' element={<Clubeventslink2/>}/>
            </Route>
                <Route path='Login' element={<Login/>}>
                <Route path='sports' element={<Sports/>}/>
                <Route path='radio' element={<Radio/>}/>
                <Route path='music' element={<Music/>}/>
                </Route>
                <Route path='Logout' element={<Logout/>}/>

        </Routes>
        </div>
    );
};

export default App;