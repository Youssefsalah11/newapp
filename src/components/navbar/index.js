import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { isBrowser, isMobile } from 'react-device-detect'
import logo from '/Users/youssefsalah/div/new/newapp/src/assets/images/output-onlinepngtools copy.png'
    
    


export default function Navbar() {
    let collapse=''
    if(isMobile){
        collapse='collapse';
    }
    
    
   return (
        <header>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>                        
                 </button>
                <Link to="/">
                <img src={logo} className="nav-logo navbar-brand" alt='bigbee logo'/> 
                <span className="navbar-brand">BigBee</span>
                </Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar" data-toggle={collapse} data-target="#myNavbar">
                <ul className="nav navbar-nav"  >

                <li><NavLink className='nav-link' activeClassName="active" to="/services">SERVICES</NavLink></li>
                <li><NavLink className='nav-link'activeClassName="active" to="/work">WORK</NavLink></li>
                <li><NavLink className='nav-link' activeClassName="active" to="/clients">CLIENTS</NavLink></li>
                <li><NavLink className='nav-link' activeClassName="active" to="/contact">CONTACT</NavLink></li>
                </ul>
                </div>
            </div>
        </nav>
       
    </header>
    )
   
}
