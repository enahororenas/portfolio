import React, { useState} from "react";
import Wrapper from "../wrapper/Skills";
//import {FaBars} from 'react-icons/fa'

const Skills = () => {
  
  const data = [
    { name: "Python"},{name: "Javascript"},{ name: "Perl"},{ name: "C"},{ name: "C Shell"},{name: "TCL"},
    {name: "Full Stack Development"},{name: "Node js"},{name: "React js"},{name: "Express js"},
  ];

  //const colors = ["#F1C40F","#4B088A","#8181F7","#FE2EF7","#585858","#800000","#0088FE","#00C49F","#FFBB28","#FF8042","#001CCE","#00C79F","#FFBB24","#FF1042","#FF1042"];

  const [showMoreTechStack, setShowMoreTechStack] = useState(4);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 2);
  };

  return (
    <Wrapper>

    <div className="techstack-section" id="skill">
    <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row grid-container-element">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          
            <div key={index}>
              <div className="tech-content" key={index+'div'}>
                <button key={index+'p'}>{item.name}</button>
              </div>
            </div>
          
        ))}
      </div>

      {showMoreTechStack >= data.length ? null : (
        <div className="loadmore">
          <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
          </span>
        </div>
      )}



    </div>
    </Wrapper>
  );
};

export default Skills;
