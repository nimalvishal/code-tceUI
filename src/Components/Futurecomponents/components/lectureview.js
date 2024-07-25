import React from 'react'

import PropTypes from 'prop-types'

import './lectureview.css'

const Lectureview = (props) => {
  return (
    <div className={`lectureview-container ${props.rootClassName} `}>
      <label className="lectureview-text">{props.text2}</label>
      <input
        type="url"
        placeholder={props.textinputPlaceholder}
        className="lectureview-textinput input"
      />
      <button type="button" className="lectureview-button button">
        <span className="lectureview-text1">
          <span className="">Save</span>
          <br className=""></br>
        </span>
      </button>
      <span className="lectureview-text4">
        <span className="lectureview-text5">Assistant Professor</span>
      </span>
    </div>
  )
}

Lectureview.defaultProps = {
  rootClassName: '',
  textinputPlaceholder2: 'Intrested Domain',
  textareaPlaceholder: 'placeholder',
  textinputPlaceholder: ' Linkedin Link',
  text3: 'GitHub:',
  textinputPlaceholder1: 'Skillrack Link',
  text2: 'LinkedIn:',
  text21: 'Challenges :',
  text1: '917721C133',
  text: '',
  text4: 'Skillrack:',
  textinputPlaceholder3: 'Github link',
  text5: 'IDomain:',
}

Lectureview.propTypes = {
  rootClassName: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text3: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text2: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  text5: PropTypes.string,
}

export default Lectureview
