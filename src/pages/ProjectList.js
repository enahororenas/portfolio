import React from "react";
import Wrapper from "../wrapper/Project";

const ProjectList = ({ name, des, projectlink, techused }) => {

  //const colors = ['#43A6C6','#8181F7',"#001CCE",'#BF40BF',"#4B088A","#FF8042","#1F618D",'#FAD02C','#001f47','#000230',"#FF1042"]

  return (
    <Wrapper>
    
      <div className="card">

      
      
          <h2 className='header' style={{color:'white'}}>{name}</h2>
        
        <div className="description">
          {des}
        </div>

        <div className="tech-used-in-project">
          {techused &&
            techused.map((tech, index) => (
              <div key={index}>
                <div className="skill" >
                  <p>{tech.techname}</p>
                </div>
              </div>
            ))}
        </div>
        
      <div className="cover">
        <div className="demo">
          <a className='link' href={projectlink}> Visit Website </a>
          </div>
      </div>        
            
       
      </div>
    </Wrapper>
  );
};

export default ProjectList;
