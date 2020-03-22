import React from 'react'
import Header from '../containers/Header'
import SideBar from '../containers/SideBar'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      <Header className={styles.header}/>
      <SideBar className={styles.sideBar}/>
    </div>
  )
}

export default Home