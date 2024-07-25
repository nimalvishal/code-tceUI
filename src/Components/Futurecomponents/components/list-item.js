import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className={`list-item-container ${props.rootClassName} `}>
      <li className="list-item-list-item list-item">
        <span className="list-item-text">{props.text}</span>
        <span className="list-item-text1">{props.text4}</span>
        <span className="list-item-text2">{props.text1}</span>
        <span className="list-item-text3">{props.text3}</span>
        <span className='list-item-text5'>{props.text5}</span>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="list-item-image"
        />
      </li>
    </div>
  )
}

ListItem.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text2: '0.10\n',
  text: 'Nimal Vishal N K V',
  text4: '5',
  imageAlt: 'image',
  text3: '1.',
  text1: '1',
  text5:"Medium",
  rootClassName: '',
}

ListItem.propTypes = {
  imageSrc: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItem
