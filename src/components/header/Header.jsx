import React, { useState } from 'react';
import './header.css';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineSegment } from "react-icons/md";
import c from '../../pages/assets/c.png';

const Header = ({ backarrow, style }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className='header' style={style}>
      <div className='navbar'>
        {backarrow ? (
          <Link to={'/home'} className='navlink' style={{ color: 'white' }}>
            <IoMdArrowBack /> Back
          </Link>
        ) : (
          <>
            <div className='toggleIcon' onClick={handleToggle}>
              <MdOutlineSegment size={25} />
            </div>

            <div className='logo-container'>
              <img className='logo' src={c} alt='Logo' />
            </div>

            <div className='navitem'>
              <Link to={'/about'} className='navlink'>About Page</Link>
              <Link to={'/flex'} className='navlink'>Flex Container</Link>
              <Link to={'/order'} className='navlink'>Orders</Link>
              <Link to={'/stud'} className='navlink'>Api Data</Link>
              <Link to={'/user'} className='navlink'>Users</Link>
            </div>
             
            {toggle && (
              <div className={`navToggle ${toggle ? 'show' : ''}`}>
                <Link onClick={handleToggle} style={{right:10,position:'absolute',top:0,padding:10}} className='navlink'>❌</Link>
                <Link to={'/about'} className='navlink'>About Page</Link>
                <Link to={'/flex'} className='navlink'>Flex Container</Link>
                <Link to={'/order'} className='navlink'>Orders</Link>
                <Link to={'/stud'} className='navlink'>Api Data</Link>
                <Link to={'/user'} className='navlink'>Users</Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;