import Wrapper from "../wrapper/Education";
import { FaGraduationCap } from "react-icons/fa";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  
  const data = [
    {
      name: "Tennessee Technological University",
      degree: "M.S in Electrical and Computer Engineering",
      year: "2014-2016",
      des: "Took relevant classes related to electrical and computer engineering",
    },
    {
      name: "University of Benin",
      degree: "B.Eng in Electrical/Electronics Engineering",
      year: "2007-2012",
      des: "Took relevant classes related to electrical and electronics engineering",
    },
  ];


  //const colors = ["#001CCE","#4B088A","#FE2EF7", "#FF1042"];

  return (
    <Wrapper>
    <div className= "education-section" id="education">

    <div className="section-title">
        <h2 className="header">Education</h2>
      </div>


      <div className="timeline-section">
        <VerticalTimeline lineColor="#f9004d">

          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#191919', color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #f9004d" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: "#f9004d", color: "#fff" }}
              icon={<FaGraduationCap />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {item.degree}
              </h5>

              <p style={{color:"#fcfc"}}>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    
    </div>
    </Wrapper>
  );
};

export default Education;
