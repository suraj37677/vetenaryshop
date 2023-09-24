
import React from 'react';

function CustomerList() {
  
  const customers = [
    { id: 1, name: 'suraj sahoo', email: 'suraj23@gmail.com' },
   
   
    { id: 2, name: 'najuk swain', email: 'najuk23@gmail.com' },
    { id: 2, name: 'sturr swain', email: 'sturr12@gmail.com' },
    { id: 2, name: 'stupi  swain', email: 'stuppi345@gmail.com' },
    { id: 2, name: 'grupp  swain', email: 'grouup23@gmail.com' },
    { id: 2, name: 'krityy  swain', email: 'kritty32@gmail.com' },
    { id: 2, name: ' rothat swain', email: 'rothat34@gmail.com' },
    { id: 2, name: 'anup swain', email: 'anup23@gmail.com' },
    { id: 2, name: 'amabni swain', email: 'amabani23@gmail.com' },
    { id: 2, name: 'dimpal swain', email: 'dimpal45@gmail.com' },
    { id: 2, name: 'stul swain', email: 'stul34@gmail.com' },
    { id: 2, name: 'saroj  swain', email: 'saroj32@gmail.com' },
    { id: 2, name: 'subash swain', email: 'suash2@gmail.com' },
  ];

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
