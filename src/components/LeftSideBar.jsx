import React from 'react'
import styles from '../styles/LeftSideBar.module.css';
import Koompi from "../Images/koompi.jpg";
function LeftSideBar() {
  return (
    <div className={styles.Container}>
        <div className={styles.Icon}>
          <img src={Koompi} width={50} alt="" />
        </div>
    </div>
  )
}

export default LeftSideBar