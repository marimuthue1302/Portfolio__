import React from 'react'
import { Link } from "react-scroll";
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr. Marimuthu Eswaran</h1>
            <p>A Professional Web Developer</p>
            <a href="">
                <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
        </div>
    </div>
  )
}

export default TopContent