import React from 'react';
import './Challenge.css';
import "../Homepage/Homepage.css";
import videobg from "../Challenge/challengevideo.mp4"
import { Link } from 'react-router-dom';
import image1  from '../Assets/unsplash-image.jpeg'
export const Challenge = () => {
  return (
    <div className='homepg'>
    <nav>
    <div className="intro" style={{ position:"relative" }}>
        <h1 className='hed'style={{width:"150px"}}>Code Hub</h1>
        <div className='lnk'style={{marginLeft:"320px"}}>
            <Link to="/Homepage">Home</Link> 
            <Link to="/Challenge">Challenges</Link> 
            <Link to="/LeaderBoard">LeaderBoard</Link> 
            <Link to="/Homepage">FAQ</Link> 
            <Link to="/contact">Contact</Link>
        </div>
        <Link to="/Loginpage" className='log' style={{marginLeft:"414px"}}>Login</Link> 
    </div>
</nav>
<div className="home-containr">
      <section className="home-her">
        <video
          src={videobg}
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
          style={{top:"100px"}}
        ></video>
        <div className="home-hero-conten">
          <div className="home-header-contain">
            <div className="home-headr">
              <h1 className="home-head">
                <span>Get start coding with your </span>
                <span className="home-tex1">Logic</span>
                <br></br>
              </h1>
            </div>
          </div>
          <Link className="home-button button1" to="https://www.hackerrank.com/">
            <span>
              <span>Get Challenge today</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      </div>
      <div className="home-container1z">
        <img
          src={image1}
          alt="image"
          className="home-image"
        />
        <section className="home-note1">
          <h2 className="home-caption1">
          Empower yourself with the knowledge of programming and unlock a world of endless possibilities. Providing you with the tools to create, innovate, and problem-solve,
           Code Challenge Arena is your gateway to mastering the art of coding. 
          Join us on this journey of continuous learning and growth, where challenges become opportunities and frustrations turn into achievements.
          </h2>
        </section>
      </div>

      <div>
        <div className="home-container2w">
           {/* Script will be dynamically added here */}
        </div>
      </div> 

    </div>
  );
};
