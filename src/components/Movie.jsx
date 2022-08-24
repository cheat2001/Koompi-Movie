import React from 'react'
import styles from "../styles/Movie.module.css";

function Movie({Img,Title,w,h}) {
  return (
    <div style={{width:w, height:h}} className={styles.Container}>
        <img src={Img} alt="" />
         <div className={styles.Title}>
         <h2>{Title}</h2>
        <p>2022</p>
         </div>
    </div>
  )
}

export default Movie