import React from 'react'
import styles from "../styles/Menu.module.css";
import MenuLink from '../components/MenuLink';
import { AiOutlineHome,AiOutlineFieldTime } from "react-icons/ai";
import {RiCompassDiscoverLine} from "react-icons/ri";
import {BsPeopleFill} from "react-icons/bs";
function Menu({mode}) {
  return (
    <div style={mode} className={styles.Container}>
        <p className={styles.Title}>MENU</p>
        <div className={styles.LinkBlock}>
            <MenuLink Icon={AiOutlineHome} Title="Home" Color="#"/>
            <MenuLink Icon={RiCompassDiscoverLine} Title="Discovery"/>
            <MenuLink Icon={BsPeopleFill} Title="Community"/>
            <MenuLink Icon={AiOutlineFieldTime} Title="Comming Soon!"/>
        </div>
    </div>
  )
}

export default Menu