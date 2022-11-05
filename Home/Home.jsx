
import React from 'react'
import Featured from '../componets/featured/Featured'
import Navbar from "../componets/navbar/Navbar"
import List from "../componets/list/List"


import "./Home.scss"



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
        
        
    </div>
  )
}

export default Home


