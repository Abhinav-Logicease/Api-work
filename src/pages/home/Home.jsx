import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import pic from '../assets/a.avif'
import './home.css'

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat' ,
    height:'100vh'
  };
  return (
    <div style={backgroundStyle}>
        <Header/>
          
          <div >            
         
            <div style={{paddingLeft:'100px',width:'50%',marginTop:'150px'}}>
              <div  className='HomeHeader'>
                  <span className='HomeContainer'>Small Team</span>
                  <br/> 
                  <span className='HomeContainer'>Doing Big Things</span> 
              </div>
            </div>
          </div>
        <Footer />
    </div>
  )
}

export default Home