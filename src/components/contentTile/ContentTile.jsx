import React from 'react';
import ti from '../../pages/assets/ti.png';
import './style.css';
import img1 from '../../pages/assets/i1.png';
import img2 from '../../pages/assets/i2.png';
import img3 from '../../pages/assets/i3.png';

const ContentTile = () => {
  return (
    <div className="content-tile-container">
      <div className="content-tile-header">
        <img src={ti} alt="Content Tile" />
      </div>
      <div className="content-tile-text">
        <p>We are the Leader in IT Value</p>
      </div>

      <div className="content-tile-items">
        <div className="content-tile-item">
          <img src={img1} alt="Quality" />
          <h2>Quality</h2>
          <p>Quality defines us. We provide high quality Apps and Websites. The main thing behind building a good business is Goodwill.We get a 4.5 star rating and also have many positive reviews on google.</p>
        </div>

        <div className="content-tile-item">
          <img src={img2} alt="Development" />
          <h2>Development</h2>
          <p>We develop native as well as hybrid apps for both android and iOS platforms.A native vs hybrid app is an application developed to fully comply with the requirements and guidelines of a particular operating system.</p>
        </div>
        <div className="content-tile-item">
          <img src={img3} alt="Team" />
          <h2>Team</h2>
          <p>Teamwork is the ability to work together toward a common vision.We are small Team doing big Things. We work on Agile methodology which accelerates the achievement of task easily.</p>
        </div>
      </div>
    </div>
  );
}

export default ContentTile;
