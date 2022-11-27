import Wrapper from "../wrapper/About";
import { Link } from "react-scroll";
const About = () => {

  return (
    <Wrapper>
    <div className="container about-section" id="about">

	<section className="about">
		<div className="main">
			<img  className='image' src="https://res.cloudinary.com/diasporaapp/image/upload/v1664571122/delssa/kgfn9uis95wey6mttx3s.jpg" alt=''/>
			<div className="about-text">
				<h2 className="header">About Me</h2>
				<h5>Developer <span>& Designer</span></h5>
				<p>I am a goal-oriented, results driven software engineer with experience in designing and developing 
         software solutions.Proven ability to leverage full-stack knowledge and experience 
        to build interactive and user-centered website designs. 
        </p>
				<button className="center-button" type="button"> <Link to="contactsection"  spy={true}  smooth={true}   duration={100}   offset={-100}>Let's Talk</Link></button>
			</div>
		</div>
	</section>

  </div>     
  </Wrapper>
  );
};

export default About;
