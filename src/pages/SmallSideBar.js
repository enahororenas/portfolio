import React,{useContext} from 'react'
import Wrapper from '../wrapper/SmallSidebar';
import {FaTimes} from 'react-icons/fa'
import { ThemeContext } from "../App";
import { GiHamburgerMenu } from "react-icons/gi";
import {FcNightPortrait,FcHome,FcTodoList,FcContacts,FcFactory} from "react-icons/fc";
import { MdBiotech,MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";

const SmallSidebar = () => {
  const {expandSidebar, setExpandSidebar} = useContext(ThemeContext);
  const handleExpandClick = () => {   setExpandSidebar(!expandSidebar) };
  return (
    <Wrapper>

    <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleExpandClick} />
        </p>
      </div>

        <div className={expandSidebar?'sidebar-container show-sidebar':'sidebar-container'}> 
        <div className='content'>
            <button
            type='button'
            className='close-btn'
            onClick={handleExpandClick}
            >
                <FaTimes/>
            </button>

            <ul>
            <li className="nav-item-mobileview">
              <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                <FcHome size={25} /> Home
              </Link>
            </li>

            <li className="nav-item-mobileview">
              <Link to="about" spy={true} smooth={true} duration={100}  offset={-100}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="workexperience" spy={true} smooth={true} duration={100} offset={-100}>
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link to="techstack" spy={true} smooth={true} duration={100}  offset={-100}>
                <MdBiotech size={25} color="orange" /> Tech Stack
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link  to="education"  spy={true} smooth={true}  duration={100} offset={-100}>
                <MdCastForEducation size={25} color="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link  to="project" spy={true} smooth={true} duration={100} offset={-100}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>

            <li className="nav-item-mobileview">
              <Link  to="contactsection" spy={true} smooth={true} duration={100} offset={-100}>
                <FcContacts size={25} /> Contact
              </Link>
            </li>
          </ul>


        </div>
        </div>
    </Wrapper>

  )
}

export default SmallSidebar