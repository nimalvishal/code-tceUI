import React from 'react'

import PropTypes from 'prop-types'

import './userview.css'

const Userview = (props) => {
  return (
    <div className={`userview-userview ${props.rootClassName} `}>
      <label className="userview-text">{props.text6}</label>
      <label className="userview-text01">{props.text1}</label>
      <input
        type="url"
        placeholder={props.textinputPlaceholder}
        className="userview-textinput input"
      />
      <span className="userview-text02">
        <span className="userview-text03">Software Engineer</span>
      </span>
      <input
        type="url"
        placeholder={props.textinputPlaceholder1}
        className="userview-textinput1 input"
      />
      <input
        type="text"
        placeholder={props.textinputPlaceholder2}
        className="userview-textinput2 input"
      />
      <div className="userview-container">
        <button type="button" className="userview-button button">
          <span className="userview-text04">
            <span className="">Save</span>
            <br className=""></br>
          </span>
        </button>
      </div>
      <label className="userview-text07">{props.text}</label>
      <label className="userview-text08">{props.text11}</label>
      <input
        type="url"
        placeholder={props.textinputPlaceholder3}
        className="userview-textinput3 input"
      />
      <label className="userview-text09">{props.text3}</label>
      <label className="userview-text10">{props.text4}</label>
      <label className="userview-text11">{props.text5}</label>
      <label className="userview-text12">{props.text7}</label>
    </div>
  )
}

Userview.defaultProps = {
  text4: 'SkillRack:',
  rootClassName: '',
  textinputPlaceholder: ' Linkedin Link',
  text1: '917721C093',
  textinputPlaceholder1: 'Skillrack Link',
  text2: 'LinkedIn:',
  text: 'Regno:',
  text3: 'GitHub:',
  textinputPlaceholder2: 'Intrested Domain',
  textinputPlaceholder3: 'Github link',
  text5: 'IDomain:',
  text6: 'Academic Year:',
  text11: '2025',
  text7: 'LinkedIn:',
}

Userview.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  text1: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  textinputPlaceholder3: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text11: PropTypes.string,
  text7: PropTypes.string,
}

export default Userview
