import React from 'react'
import {CgProfile} from 'react-icons/cg' 
import {AiOutlineHome} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import { MdOutlineWork } from "react-icons/md";     
import {BsBuilding} from 'react-icons/bs'
import { MdCastForEducation,MdPermContactCalendar } from "react-icons/md";
import { Link } from "react-scroll";
import Wrapper from '../wrapper/SidebarList';


const SidebarList = () => {
    return (
    <Wrapper>
     <React.Fragment>
              <div className="navbar-items-only-icons">
                <ul>
                  <li className="nav-item">
                    <Link to="home"  spy={true}  smooth={true}  duration={100}  offset={-100}> 
                      <AiOutlineHome size={25}  />
                    </Link>
                  </li>
      
                  <li className="nav-item">
                    <Link  to="about"  spy={true}  smooth={true}   duration={100}  offset={-100}>
                      <CgProfile size={25} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="workexperience"  spy={true}   smooth={true}   duration={100}  offset={-100}>
                      <MdOutlineWork size={25}/>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="skill"   spy={true}   smooth={true}  duration={100} offset={-100}>
                      <GiSkills size={25} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="education"  spy={true}  smooth={true}   duration={100}  offset={-100}>
                      <MdCastForEducation size={25} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  to="project"  spy={true}  smooth={true}  duration={100}  offset={-100}>
                      <BsBuilding size={25} />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link  to="contactsection" spy={true}  smooth={true}  duration={100}  offset={-100}>
                      <MdPermContactCalendar size={25} />
                    </Link>
                  </li>
                </ul>
              </div>
          </React.Fragment>
        </Wrapper>
        );
      };
      
      export default SidebarList;
      