import React from 'react';
import PropTypes from 'prop-types';
import Userview from './userview';
import './testimonial.css';
import image2 from '../components/sibhi.jpg'; // Import the image directly

const Testimonial = (props) => {
  return (
    <div className="testimonial-testimonial">
      <img
        alt={props.imageAlt}
        src={props.imageSrc} // Use props.imageSrc directly
        className="testimonial-image"
      />
      <Userview rootClassName="userview-root-class-name"></Userview>
      <span className="testimonial-text">{props.text}</span>
    </div>
  );
};

Testimonial.defaultProps = {
  imageSrc: image2, // Use the imported image directly
  text: 'Sibhiraj H',
  imageAlt: 'image',
};

Testimonial.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Testimonial;
