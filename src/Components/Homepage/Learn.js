import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";
import "./Learn.css";

export const Learn = () => {
  return (
    <div className='homepg'>
      <div className='top'>
        <nav>
          <div className="intro" style={{ width: "100%", position: "relative" }}>
            <h1 className='hed'>Code Hub</h1>
            <div className='lnk' style={{ marginLeft: "388px" }}>
              <Link to="/">Home</Link>
              <Link to="/Challenge">Challenges</Link>
              <Link to="/LeaderBoard">LeaderBoard</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <Link to="/Loginpage" className='log' style={{ marginRight: "128px", marginLeft: "372px" }}> Login </Link>
          </div>
        </nav>
      </div>
      <div className='iframe-container'>
        <iframe
          title="Youtube"
          src="https://www.youtube.com/embed/7dSJubxFWv0" // Correct embed URL
          width="1000"
          height="600"
          frameBorder="0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowFullScreen
        />
        <iframe
          title="GeeksforGeeks"
          top='20px'
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/s2mYsPWzLjg" // Correct embed URL
          frameBorder="0"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Learn;
