import React from 'react'
import styles from './Badge.module.css'

function Badge({ children, notifications }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.anchor}>
        {notifications.length >= 10 ? '9+' : notifications.length}
      </span>
      {children}
    </div>
  )
}

export default Badge