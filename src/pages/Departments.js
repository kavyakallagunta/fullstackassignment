import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import workshop from '../workshop.jpg';
import workshop1 from '../workshop1.jpg';
import workshop2 from '../workshop2.jpg';
import workshop3 from '../workshop3.jpg';
// import workshoplink1 from './workshoplink1';
const Departments = () => {
    return (
        <div>
            <br/>
            <img src={workshop} style={{width:'1350px',height:'500px'}} />
            <br/>
            <br/>
            <hr/>
            <h3>workshops in svecw</h3>
            <table align="left">
                <tr>
                    <td align="left"><img src={workshop1} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Workshoplink1'>A workshop on Assistive Technology</NavLink>
                    
                   </td>
                   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   <td ><img src={workshop2} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Workshoplink2'>Workshop on Assistive Technology Solutions in Minutes</NavLink>
                   </td>
                   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   <td ><img src={workshop3} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Workshoplink3'>Workshop on Microcontroller for Faculty involved in ATL</NavLink>
                   
                   </td>


                </tr>
                <Outlet/>
            </table>
        </div>
    );
};
                    

export default Departments;