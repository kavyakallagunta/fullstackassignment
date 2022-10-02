import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.jpg';
const Navbar = () => {
    const changestyle=({isActive})=>{
        return{
            color:isActive?'black':'brown'
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ms-auto">
      <a className="navbar-brand" href="#">
      <img src={logo} style={{width:'70px',height:'50px'}} />
      </a>
      <h2>Shri vishnu engineering college for women
        <br/>
        <h3>Bhimavaram</h3>
      </h2>
      <button
        className="navbar-toggler ms-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='/'style={changestyle}>login</NavLink>
            </a>
          </li>
          <li className="nav-item active ms-auto">
            <a className="nav-link" href="#">
            <NavLink className='item' to='Home'style={changestyle}>About</NavLink> 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='Departments'style={changestyle}>Workshops</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='StuDetails'style={changestyle}>Hackathons</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='Signup'style={changestyle}>ClubEvents</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='Login'style={changestyle}>Others</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink className='item' to='/'style={changestyle}>Logout</NavLink>
            </a>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
        
            {/* <NavLink className='item' to='Home'style={changestyle}>Home</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink className='item' to='Departments'style={changestyle}>Departments</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink className='item' to='StuDetails'style={changestyle}>StudentList</NavLink>&nbsp;&nbsp;&nbsp;
            
            <NavLink className='item' to='Signup'style={changestyle}>Signup</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink className='item' to='Login'style={changestyle}>Login</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink className='item' to='Home'style={changestyle}>Logout</NavLink>&nbsp;&nbsp;&nbsp; */}
        </div>
       
    );
};

export default Navbar;