
import React from 'react';

function ServiceList() {
  
  const services = [
    { id: 1, name: 'Pet Shower', price: 20 },
    { id: 2, name: 'Nail Cutting', price: 10 },
    { id: 3, name: 'Surgery', price: 100 },
  ];

  return (
    <div className="service-list">
      <h2>Service List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>${service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;
