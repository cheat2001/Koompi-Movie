import React from 'react'
import styles from '../styles/TopMovie.module.css';
import Batman from "../Images/batman.jpg";
import Superman from "../Images/superman.jpg";
import Luca from "../Images/luca.png";
import Movie from '../components/Movie';
function TopMovie() {
  
  return (
    <div className={styles.Container}>
         <div className={styles.TopTrending}>
            <h1>Trending Movies</h1>
            <a href='#'>See All &#62;</a>
         </div>
         <div className={styles.Movies}>
           <Movie Img={Batman} Title="The Batman"/>
           <Movie Img={Superman} Title="Superman Season3"/>
           <Movie Img={Luca} Title="Luca"/>
         </div>
        
      
    </div>
  )
}

export default TopMovie