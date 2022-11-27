import React from "react";
import Wrapper from "../wrapper/Home";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Wrapper>
    <div className="home" id="home">

    <div className="hero">
		<nav>
      <h2 className="logo">Portfo<span>lio</span></h2>
			<ul>
				<li><Link to="home">Home</Link></li>
				<li><Link to="about">Bio</Link></li>
				<li><Link to="workexperience">Work-Experience</Link></li>
				<li><Link to="skill">Skills</Link></li>
        <li><Link to="education">Education</Link></li>
        <li><Link to="project">Projects</Link></li>
				<li><Link to="contactsection">Contact Me</Link></li>
			</ul>
		</nav>
    </div>

		<div className="content">
			<h4 className="hsize1">Hello, my name is</h4>
			<h1 className="header">Enahoro <span>Oriero</span></h1>
			<h3 className="hsize1">I'am a Full Stack Web Developer.</h3>
      <div className="button-for-action">
            <Link to="contactsection"  spy={true}  smooth={true}   duration={100}   offset={-100}>
              <div className="hire-me-button">Contact Me</div>
            </Link>
          </div>
		</div>

    
    </div>
    </Wrapper>
  );
};

export default Home;
