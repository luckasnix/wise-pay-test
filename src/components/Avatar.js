import React from 'react'
import photo from '../media/photo.jpg'
import styles from './Avatar.module.css'

function Avatar({ className, id, style, name }) {
  return (
    <div
      className={[className, styles.avatar].join(' ')}
      id={id}
      style={style}
    >
      <div/>
      <img
        src={photo}
        alt={`Avatar do ${name}`}
      />
    </div>
  )
}

export default Avatar