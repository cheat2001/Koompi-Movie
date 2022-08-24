import React from 'react'
import styles from '../styles/TopMovie.module.css';
import Batman from "../Images/batman.jpg";
import Superman from "../Images/superman.jpg";
import Luca from "../Images/luca.png";
import Movie from '../components/Movie';

function BottomMovie() {
  return (
    <div className={styles.Container}>
         <div className={styles.TopTrending}>
            <h1>Top Rating</h1>
            <a href='#'>See All &#62;</a>
         </div>
         <div className={styles.Movies}>
           <Movie Img={Batman} Title="The Batman" w="200px" h="200px"/>
           <Movie Img={Superman} Title="Superman Season3"  w="200px" h="200px"/>
           <Movie Img={Luca} Title="Luca"  w="200px" h="200px"/>
           <Movie Img={Batman} Title="The Batman" w="200px" h="200px"/>
           <Movie Img={Superman} Title="Superman Season3"  w="200px" h="200px"/>
           <Movie Img={Luca} Title="Luca"  w="200px" h="200px"/>
         </div>
        
      
    </div>
  )
}

export default BottomMovie