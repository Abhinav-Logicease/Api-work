import React, { useState } from 'react';
import './userTile.css';
import { FaEye } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const UserComponent = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  
  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const handleUserDetails = () => {
    navigate('/user-details', { state: { user: selectedUser } });
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);
  
  const totalPages = Math.ceil(data.length / entriesPerPage);
  
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
              <th style={{textAlign:'center'}}>Order ID</th>
              <th style={{textAlign:'center'}}>First Name</th>
              <th style={{textAlign:'center'}}>Age</th>
              <th style={{textAlign:'center'}}>Gender</th>
              <th style={{textAlign:'center'}}>User Name</th>
              <th style={{textAlign:'center'}}>University</th>
              <th style={{textAlign:'center'}}>Email</th>
              <th style={{textAlign:'center'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((info) => (
              <tr className='tableRow' key={info.id}>
                <td style={{ borderLeft: '1px solid rgb(196, 190, 190)', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', textAlign: 'right' }}><input type='checkbox' /></td>
                <td style={{textAlign:'center'}}>{info.id}</td>
                <td style={{textAlign:'center'}}>{info.firstName}</td>
                <td style={{textAlign:'center'}}>{info?.age}</td>
                <td style={{textAlign:'center'}}>{info?.gender}</td>
                <td style={{textAlign:'center'}}>{info?.username}</td>
                <td style={{textAlign:'center'}}>{info?.university}</td>
                <td style={{textAlign:'center'}}>{info?.email}</td>
                <td style={{textAlign:'center',cursor:'pointer'}} onClick={() => handleOpen(info)}><FaEye /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} className="modal-content">
          <h2>User Details</h2>
          {selectedUser && (
            <>
              <img src={selectedUser?.image} alt="User" />
              <p><strong>First Name:</strong> {selectedUser?.firstName } {selectedUser?.lastName }</p>
              <p><strong>Age:</strong> {selectedUser?.age}</p>
              <p><strong>Gender:</strong> {selectedUser?.gender}</p>
              <p><strong>Username:</strong> {selectedUser?.username}</p>
              <p><strong>University:</strong> {selectedUser?.university}</p>
              <p><strong>Email:</strong> {selectedUser?.email}</p>
              <Button style={{ color: 'black', border: '1px solid lightBlue', marginTop: '20px' }} onClick={handleUserDetails}>
                User More Details
              </Button>
            </>
          )}
        </Box>
      </Modal>

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

export default UserComponent;
