import React,{useState,useEffect} from 'react'
import styles from "../styles/Navbar.module.css";
import { BiMenu,MdOutlineLiveTv } from "react-icons/bi";
import Menu from "../components/Menu";

function Navbar() {
  const [action,setAction]=useState(true);
  useEffect(() => {
    if(action){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";

    }
  }, [action]);
  return (
    <div className={styles.Container}>
      <Menu mode={action?{left:"80px"}:{left:"-100%"}}/>
        <div className={styles.LeftBar}>
            <BiMenu onClick={()=>setAction(!action)} color='white' size={25} className={styles.toggle}/>
            <a style={{color: 'white'}} href="#">Movies</a>
            <a href="#">Series</a>
            <a href="#">TV Shows</a>
        </div>
    </div>
  )
}

export default Navbar