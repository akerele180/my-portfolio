import React from 'react'
import './Header.css';
import tosin from './images/image2.jpeg';
import { FiArrowDownCircle } from 'react-icons/fi'
import { AiFillGithub  } from 'react-icons/ai';
import { RiWhatsappFill, RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Header() {
    return (
        <>
            {/* <Router> */}
                <header className='d-flex justify-content-center align-items-center flex-column'>
                    <h1 className='container'>Tosin Akerele</h1> 
                    <h2 className='container'>A Frontend Web Developer</h2>
                    <div className='social-icons'>
                        <ul>
                            <a href='https://github.com/akerele180'><li><AiFillGithub/></li></a>
                            <a href=''><li><RiWhatsappFill /></li></a>
                            <a href='https://web.facebook.com/james.akerele/'><li><RiFacebookCircleFill /></li></a>
                            <a href='https://www.instagram.com/tosin_jaims/'><li><RiInstagramFill /></li></a>
                            <a href='https://twitter.com/tosinjaims'><li><RiTwitterFill /></li></a>
                        </ul>                   
                    </div>
                    <FiArrowDownCircle className='back-to-top'/>
                    
                </header>
            {/* </Router> */}
        </>
    )
}

export default Header
