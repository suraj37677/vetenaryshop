import React from 'react'
import { Outlet,Link,BrowserRouter ,Route,Routes } from 'react-router-dom';
import CustomerList from './CustomerList';
import ServiceList from './ServiceList';
const Dashboard = () => {
  return (
    <>
    
    <div className="dashboard">
        
    <Routes>
        <Route path="/" element={<h2>Welcome to Dashboard</h2>} />
        <Route path="/customerlist" element={<CustomerList />} />
        <Route path="servicelist" element={<ServiceList />} />
      </Routes>
      
      <nav>
        <ul>
          <li>
            <Link to="customerList">Customers</Link>
          </li>
          <li>
            <Link to="servicesList">Services</Link>
          </li>
        </ul>
      </nav>
     
    
      <Outlet />
    </div>
  

    </>
  )
}

export default Dashboard;
