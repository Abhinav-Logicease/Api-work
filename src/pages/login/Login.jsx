import React, { useState } from 'react';
import './login.css';
import a from '../assets/a1.png';
import { CiUser, CiLock } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin') {
      alert('Login successful!');
      navigate('/home')
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='box-conatiner'>

<div className="container">
        <div style={{width:'90%',padding:'10px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
      <img alt="Your Company" src={a} style={{ height: '80px', width: 'auto', }} />
      </div>
      <h2 className="title">Black Matrix</h2>
      <h4 className="heading">Technology & Design</h4>
      <form onSubmit={handleSubmit} >
    <div style={{marginTop:'30px'}}>
        <div className="input-container">
          <CiUser size={'20px'} />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Username or Email"
            required
            style={{backgroundColor:'white'}}
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <CiLock size={'20px'} />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        </div>

        {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
        
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:'12px',lineHeight:'16px',marginTop:'20px'}}>
        <label style={{display:'flex',alignItems:'center',fontWeight:'600'}}>
              <input type="checkbox" style={{width:'12px' ,height:'12px' ,marginRight:'8px'}} />
              Remember me?
            </label>
            <a href="#" style={{fontWeight:600,color:'black',textDecoration:'none'}}>
              Forgot password?
            </a>
        </div>
        <button type="submit">Login</button>
      </form>

      <p style={{marginTop:'8px',textAlign:'center',fontSize:'14px',fontWeight:600}}>
          New to Black Matrix?{' '}
          <a href="#" style={{fontWeight:600,color:'black',textDecoration:'none'}}>
            Sign up here
          </a>
        </p>
        </div>
    </div>
    </div>
  );
}

export default Login;
