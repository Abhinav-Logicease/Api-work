import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import './userCard.css';

const UserDetails = () => {
    const location = useLocation();
    const { user } = location.state ;
   

    
    return (
        <>
        
        <div style={{backgroundColor:'#6C4E31',padding: '25px',fontWeight:'bold'}}>
        <Link to={'/user'} className='navlink' style={{ color: 'white' }}>
            <IoMdArrowBack /> Back
          </Link>
        </div>
        <div className="user-card">
          <div className="user-card-left">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-image" />
            <div className="user-basic-info">
              <h2 className="user-name">{user.firstName} {user.lastName}</h2>
              <p className="user-phone">📱{user.phone}</p>
              <p className="user-email">📧 {user.email}</p>
            </div>
          </div>
          <div className="user-card-right">
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>University:</strong> {user.university}</p>
            <p><strong>Address:</strong> {user?.address?.address}, {user?.address?.city}, {user?.address?.state} {user?.address?.postalCode}</p>
            <p><strong>Company:</strong> {user?.company?.name}, {user?.company?.address?.address}, {user.company?.address?.city}, {user.company?.address?.state} {user.company?.address?.postalCode}</p>
            <p><strong>Department:</strong> {user?.company?.department}</p>
            <p><strong>Title:</strong> {user?.company?.title}</p>
            <p><strong>Bank Card:</strong> {user?.bank?.cardType} ending in {user?.bank?.cardNumber.slice(-4)}</p>
            <p><strong>Crypto Wallet:</strong> {user?.crypto?.wallet}</p>
          </div>
        </div>
        </>
      );
    };


export default UserDetails
