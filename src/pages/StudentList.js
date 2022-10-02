import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import hackthon from '../hackthon.jpg';
import hackthon1 from '../hackthon1.jpg';
import hackthon2 from '../hackthon2.jpg';
import hackthon3 from '../hackthon3.jpg';

const StudentList = () => {
    return (
        <div>
          <br/>
            <img src={hackthon} style={{width:'1350px',height:'500px'}} />
            <br/>
            <br/>
            <hr/>
            <h3>Hackathons in svecw</h3>
            <table align="left">
                <tr>
                    <td align="left"colSpan={3}><img src={hackthon1} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Hackathonlink1'>A workshop on Assistive Technology</NavLink>
                    
                   </td>
                   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   <td ><img src={hackthon2} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Hackathonlink2'>Workshop on Assistive Technology Solutions in Minutes</NavLink>
                   </td>
                   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   <td><img src={hackthon3} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Hackathonlink3'>Workshop on Microcontroller for Faculty involved in ATL</NavLink>
                    
                   
                   </td>


                </tr>
                <Outlet/>
            </table> 
        </div>
    );
};

export default StudentList;