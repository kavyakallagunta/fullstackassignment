import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import clubevent from '../club.png';
import clubevent1 from '../clubevents1.jpeg';
import clubevent2 from '../clubevents2.jpeg';
const Signup = () => {
    return (
        <div>
           <br/>
            <img src={clubevent} style={{width:'1350px',height:'500px'}} />
            <br/>
            <br/>
            <hr/>
            <h3>workshops in svecw</h3>
            <table align="left">
                <tr>
                    <td align="left"><img src={clubevent1} style={{width:'350px',height:'200px'}} />
                    <br/>
                    <NavLink to='Clubeventslink1'>A workshop on Assistive Technology</NavLink>
                    
                   </td>
                   {/* //&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                   <td ><img src={clubevent2} style={{width:'350px',height:'200px'}} />
                    <br/>
                    <NavLink to='Clubeventslink2'>Workshop on Assistive Technology Solutions in Minutes</NavLink>
                   </td>
                   {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <td ><img src={workshop3} style={{width:'300px',height:'150px'}} />
                    <br/>
                    <NavLink to='Workshoplink3'>Workshop on Microcontroller for Faculty involved in ATL</NavLink>
                   
                   </td> */}


                </tr>
                <Outlet/>
            </table> 
        </div>
    );
};

export default Signup;