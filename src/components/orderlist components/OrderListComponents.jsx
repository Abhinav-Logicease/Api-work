import React, { useState } from 'react';
import './Component.css';

const OrderListComponents = ({ user }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = user.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(user.length / entriesPerPage);

  const handlePageChange = (pageNumber) => {  
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
      <div className='Container'>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: 'right' }}><input type='checkbox' /></th>
              <th>Order ID</th>
              <th>Created</th>
              <th>Customer</th>
              <th>Fulfillment</th>
              <th>Total</th>
              <th>Profit</th>
              <th>Status</th>
              <th style={{ textAlign: 'right', width: '90px' }}>Updated</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((info) => (
              <tr className='tableRow' key={info.id}>
                <td style={{ borderLeft: '1px solid rgb(196, 190, 190)', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', textAlign: 'right' }}><input type='checkbox' /></td>
                <td style={{ color: 'blue', width: '90px' }}>{info.id}</td>
                <td>{info.created}</td>
                <td className='aligmnet'>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png' className='image' alt="customer" /> {info.customer}
                </td>
                <td style={{ width: '150px' }}>{info.fulfillment}</td>
                <td>${info.Total}</td>
                <td>${info.Profit}</td>
                <td style={{ width: '150px' }}>{info.Status}</td>
                <td style={{ textAlign: 'right', borderRight: '1px solid rgb(196, 190, 190)', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>{info.Updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'inline-flex' }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li key={pageNumber} style={{ margin: '0 5px' }}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  backgroundColor: currentPage === pageNumber ? '#007bff' : '#fff',
                  color: currentPage === pageNumber ? '#fff' : '#007bff',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderListComponents;