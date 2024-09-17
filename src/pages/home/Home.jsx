import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import pic from '../assets/a12.jpg';
import './home.css';
import img1 from '../assets/s.png'; 
import img2 from '../assets/s.png';
import img3 from '../assets/s.png';
import ContentTile from '../../components/contentTile/ContentTile';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(false);

  const textArray = [
    ['Small Team', 'Doing Big Things'],
    ['We make quality Mobile Apps', 'and websites'],
    ['One Spirit, One Team', 'One Win']
  ];

  const imageArray = [img1, img2, img3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => setFade(true), 0);
      
      setCurrentText((prevText) => (prevText + 1) % textArray.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      
      <div >
        <div className='mainContainer' >
          
         
          <div className={`HomeHeader ${fade ? 'fade' : ''}`}>
            <div>
              <span className='HomeContainer'>{textArray[currentText][0]}</span>
              <br />
              <span className='HomeContainer'>{textArray[currentText][1]}</span>
            </div>
          </div>

        
          <div className={`ImgHeader ${fade ? 'fade' : ''}`}>
            <img src={imageArray[currentText]} alt="" style={{ maxWidth: '70%', height: 'auto' }} />
          </div>

        </div>


        
      </div>
      <div style={{marginTop:'200px'}}>
      <ContentTile/>
      </div>



      <Footer />
    </div>
    
  );
}

export default Home;
