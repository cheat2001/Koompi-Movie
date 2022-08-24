import React from 'react'
import styles from "../styles/MenuLink.module.css";

function MenuLink({Icon,Title}) {
  return (
    <a href='#' className={styles.MenuLink}>
      <Icon color='white' size={20}/>
      <p style={{color:"white"}} className={styles.Text}>{Title}</p>
    </a>
  )
}

export default MenuLink