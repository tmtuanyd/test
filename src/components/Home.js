import React from 'react'
import Menu from './Menu'
import Banner from './Banner'
import Header from './Header'
import { useSelector } from 'react-redux'



export default function Home() {
  
    return (
        
        <div>
          
            <Menu/>
            <Banner/>
            <Header/>
          
         
            {/* <Menu/>
            <Banner/>
            <Header/> */}
        </div>
    )
}
