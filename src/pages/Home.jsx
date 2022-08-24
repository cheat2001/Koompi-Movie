import React from 'react'
import styles from "../styles/Home.module.css";
import LeftSideBar from '../components/LeftSideBar'
import MovieContainer from '../components/MovieContainer'

function Home() {
  return (
    <div className={styles.Container}>
        <LeftSideBar/>
        <MovieContainer/>
    </div>
  )
}

export default Home