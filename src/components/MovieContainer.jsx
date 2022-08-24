import React from 'react'
import styles from "../styles/MovieContainer.module.css"
import MovieBlock from './MovieBlock'
import Navbar from './Navbar'
function MovieContainer() {
  return (
    <div className={styles.Container}>
        <Navbar/>
        <MovieBlock/>
    </div>
  )
}

export default MovieContainer