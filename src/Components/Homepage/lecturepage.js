import React from 'react'

import { Link } from 'react-router-dom'
import image1 from '../Assets/stackholder1.jpg'
import Lectureview from '../Futurecomponents/components/lectureview'
import './lecturepage.css'

export const Lecturepage = () => {
  const ontouch = (event) => {
    event.preventDefault();
      alert("Link posted");

    }
  return (
    <div className='homepg'>
      <div className='top'>
            <nav>
                <div className="intro" style={{width:"100%"}}>
                <h1 className='hed'>Code Hub</h1>
                <div className='lnk'style={{marginLeft:"388px"}}>
                    <Link to="/">Home</Link> 
                    <Link to="/Challenge">Challenges</Link> 
                    <Link to="/LeaderBoard">LeaderBoard</Link> 
                    <Link to='/Homepage'>FAQ</Link> 
                    <Link to="/contact">Contact</Link>
                </div>
                <Link to="/Loginpage" className='log' style={{marginRight:" 128px",marginLeft:"372px"}}> Login </Link> 
                </div>
            </nav>
          </div>
    <div className="lecturepage-container">
      <div className="lecturepage-hero">
        <div className="lecturepage-hero1">
          <h1 className="lecturepage-hero-heading">Your Profile</h1>
        </div>
      </div>
      <div className="lecturepage-container2">
        <div className="lecturepage-testimonial">
          <img
            alt="image"
            src= {image1}
            className="lecturepage-image"
          />
          <span className="lecturepage-text14">Raja Lavanya</span>
          <Lectureview rootClassName="lectureview-root-class-name"></Lectureview>
        </div>

      </div>
      <h1 className="lecturepage-text15">Challenges</h1>
      <div className="lecturepage-lchallenges">
        <div className="lecturepage-card">
          <div className="lecturepage-container3" style={{color:"black"}}>
            <span className="lecturepage-text16">Basic</span>
            <span className="lecturepage-text17">Max length Substring</span>
            <span className="lecturepage-text18">Valid till:May 10</span>
          </div>
          <span className="lecturepage-text19">
            <span className="lecturepage-text20" style={{color:"black"}}>
              <span>
                The program print the maximum length of the given substring
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <input type='text' ></input>
            </span>
            <span></span>
          </span>
          <button className="lecturepage-button button" onClick={ontouch}>Post Link</button>
        </div>
        <div className="lecturepage-card1">
          <div className="lecturepage-container4">
            <span className="lecturepage-text24">
              <span>medium</span>
              <br></br>
            </span>
            <span className="lecturepage-text27">Largest Substring</span>
            <span className="lecturepage-text28">
              <span>Valid till:May 10</span>
              <br></br>
            </span>
          </div>
          <span className="lecturepage-text31">
            <span className="lecturepage-text32">
              <span>
              The task is to print the largest substring over the given sentence(string of words).
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span></span>
          </span>
          <button className="lecturepage-button1 button">Post Link</button>
        </div>
        <div className="lecturepage-card2">
          <div className="lecturepage-container5">
            <span className="lecturepage-text36">
              <span>hard</span>
              <br></br>
            </span>
            <span className="lecturepage-text39">Simple Game</span>
            <span className="lecturepage-text40">
              <span>Valid till:May 10</span>
              <br></br>
            </span>
          </div>
          <span className="lecturepage-text43">
            <span className="lecturepage-text44">
              <span>
                The function takes the following 2 parameters aand returns the maximum difference between the score of the first player and the score of the second player.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span></span>
          </span>
          <button className="lecturepage-button2 button">Post Link</button>
        </div>
      </div>
      <svg viewBox="0 0 1024 1024" className="lecturepage-icon10">
        <path d="M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z"></path>
      </svg>
      <div className="lecturepage-social-bar">
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="lecturepage-icon12"
        >
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="lecturepage-icon14"
        >
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg
          viewBox="0 0 602.2582857142856 1024"
          className="lecturepage-icon16"
        >
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="lecturepage-icon18"
        >
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="lecturepage-icon20">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
    </div>
    </div>
  )
}

