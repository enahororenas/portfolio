import React from "react";
import Wrapper from "../wrapper/Contact";
import {MdEmail} from 'react-icons/md'
import { FaBell,FaGithub } from "react-icons/fa";
import {GrLinkedin} from 'react-icons/gr'


const Contact = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <Wrapper>
    
    <div className="contact-section" id="contactsection"> 
 
    <div className="section-title">
        <h2>Contact Me</h2>
      </div>
  

      <div className="box">
			<div className="card">
      <FaBell size={25} color="#f9004d" className="bell"/> 
      {/*<h5 className="bh5">Web Development</h5>*/}
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
				</div>
			</div>
      </div>

{/*
<div className="cover">
    <div className="topelement">
        <FaBars size={25} color="#f9004d"/> <h5 className="bh5">Web Development</h5>
        </div>

  <div className="pra">
	<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
	</div>
</div>
  */}

  <footer className="footcontrol">
  <div className="bottom">
      <p>Enahoro Oriero</p>
      </div>
      <div className="emailhead">
      <p className='link'><span><MdEmail/> &nbsp; Email:</span> <a className="email" href="mailto:jumbonas2@hotmail.com">orieroenahoro@gmail.com</a></p>
      </div>
      <div className="git">
        <p className='link' onClick={() => openInNewTab('https://www.linkedin.com/in/enahoro-oriero')}><span><GrLinkedin/></span> www.linkedin.com/in/enahoro-oriero</p>
      </div>
      <div className="git">
        <p className='link' onClick={() => openInNewTab('https://github.com/enahororenas')}><span><FaGithub/></span> www.github.com/enahororenas</p>
      </div>
      <div className="pcontrol">
      <p>&copy; Copyright 2022 EE </p> 
       </div> 
  </footer>
				        		
    </div>
    
    </Wrapper>
  );
};

export default Contact;
