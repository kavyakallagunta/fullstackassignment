import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import sports from '../sports.jpg';
import radio from '../radio.jpg';
import music from '../music.jpg';
const Login = () => {
    return (
        <div>
            <table align="left">
                <tr>
                    <div>
                    <td align="left"><img src={sports} style={{width:'300px',height:'250px'}} />
                    <br/>
                    <NavLink to='sports'>Sports</NavLink>
                    </td>
                   </div>
                   
                   <td ><img src={radio} style={{width:'300px',height:'250px'}} />
                    <br/>
                    <NavLink to='radio'>Radio</NavLink>
                   </td>
                   
                   <td ><img src={music} style={{width:'300px',height:'250px'}} />
                    <br/>
                    <NavLink to='music'>Music</NavLink>
                   
                   </td>


                </tr>
                <Outlet/>
            </table> 
        </div>
    );
};

export default Login;