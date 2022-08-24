import React from 'react'
import styles from "../styles/MovieBlock.module.css";
import TopMovie from '../components/TopMovie'
import MideMovie from '../components/MideMovie';
import BottomMovie from '../components/BottomMovie';
function MovieBlock() {
  return (
    <div className={styles.Container}>
        <TopMovie />
        <MideMovie/>
        <BottomMovie/>
    </div>
  )
}

export default MovieBlock