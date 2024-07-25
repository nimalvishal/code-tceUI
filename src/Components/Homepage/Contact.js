import React from 'react';
import { Link } from 'react-router-dom';
import "./Homepage.css";
import "./Contact.css"; // You can create this CSS file to style your Contact Us page

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission
    alert("Thanks for Contacting CodeHub");
  };

  return (
    <div className='contact-page'>
      <div className='top'>
        <nav>
          <div className="intro" style={{ width: "100%", position:"relative" }}>
            <h1 className='hed'>Code Hub</h1>
            <div className='lnk' style={{ marginLeft: "388px" }}>
              <Link to="/">Home</Link>
              <Link to="/Challenge">Challenges</Link>
              <Link to="/LeaderBoard">LeaderBoard</Link>
              <Link to="/contact" className="active">Contact</Link> {/* Active link */}
            </div>
            <Link to="/Loginpage" className='log' style={{ marginRight: " 128px", marginLeft: "372px" }}> Login </Link>
          </div>
        </nav>
      </div>
      <div className='contact-content'>
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, please feel free to contact us using the form below.</p>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' rows='5' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
