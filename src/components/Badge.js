import React from 'react'
import styles from './Badge.module.css'

function Badge({ className, id, style, children, notifications }) {
  return (
    <div
      className={[className, styles.badge].join(' ')}
      id={id}
      style={style}
    >
      <span className={styles.anchor}>
        {notifications.length >= 10 ? '9+' : notifications.length}
      </span>
      {children}
    </div>
  )
}

export default Badge