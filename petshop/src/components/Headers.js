import React from 'react'
import './Headers.css';
import { Link } from 'react-router-dom';
const Headers = () => {
  return (
    <div className='header'>
    <img src='pet1.png' alt='vetenary logo' className='logo'/>
    <ul className='header-menu'>
        <li>
            <a href='/'>Home</a>
            </li>
        <li>
            <a href='/dashboard'>DashBoard</a></li>
        <li>
            <a href='/appointment'>Appointment</a></li>
        <li>
            <a href='/service'>Service</a></li>
        <li><a href='/blog'>Blog</a></li>
    </ul>
    </div>
  )
}

export default Headers
