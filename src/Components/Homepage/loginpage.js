import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginpage.css';
import './Homepage.css';

export const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Enter details');
      return;
    }

    // Simulating a simple user data structure stored in local storage
    const loginArray = [
      { email: 'nimalvishal', password: '123456' },
      { email: 'thiyagu@gmail.com', password: '123456' },
      { email: 'sibi@gmail.com', password: '123456' },
      { email: 'suriya', password: '123456' },
      { email: 'chandra', password: '123456' }
    ];

    const loginArray1 = [{ email: 'rajalavanya@gmail.com', password: '1234567' }];

    let loggedIn = false;
    for (let i = 0; i < loginArray.length; i++) {
      if (loginArray[i].email === email && loginArray[i].password === password) {
        loggedIn = true;
        localStorage.setItem('loggedInUser', JSON.stringify(loginArray[i]));
        navigate('/Userprofile');
        break;
      }
    }
    if (!loggedIn) {
      for (let i = 0; i < loginArray1.length; i++) {
        if (loginArray1[i].email === email && loginArray1[i].password === password) {
          loggedIn = true;
          localStorage.setItem('loggedInUser', JSON.stringify(loginArray1[i]));
          navigate('/Lecturepage');
          break;
        }
      }
    }
    if (!loggedIn) {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='homepg'>
      <div className='top'>
        <nav>
          <div className='intro'>
            <h1 className='hed' style={{ width: '150px' }}>Code Hub</h1>
            <div className='lnk' style={{ marginLeft: '320px' }}>
              <Link to='/Homepage'>Home</Link>
              <Link to='/Challenge'>Challenges</Link>
              <Link to='/LeaderBoard'>LeaderBoard</Link>
              <Link to='/Homepage'>FAQ</Link>
              <Link to='/contact'>Contact</Link>
            </div>
            <Link to='/Loginpage' className='log'>Login</Link>
          </div>
        </nav>
      </div>
      <div className='loginpage-container'>
        <div className='loginpage-hero'>
          <div className='loginpage-hero1'>
            <h1 className='loginpage-herohead'>Code Challenge Arena</h1>
          </div>
        </div>
        <div className='loginpage-banner'>
          <span className='loginpage-text'>
            Enhance your coding skills and expand your knowledge in the world of programming.
          </span>
          <h1 className='loginpage-text1'>Learn to keep it simple</h1>
          <div className='loginpage-container2'>
            <input
              type='text'
              placeholder='Email here...'
              className='loginpage-textinput input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password...'
              className='loginpage-textinput1 input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='loginpage-button button' onClick={handleLogin}>Getzin</button>
          </div>
        </div>
      </div>
    </div>
  );
};
