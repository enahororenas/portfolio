import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Wrapper from "../wrapper/WorkExperiencs";
import { MdGroupWork } from "react-icons/md";


const WorkExperience = () => {
  
  const data = [
    {
      companyname: "Intel",
      position: "CAD Engineer",
      des: [
'Developed software flow to rename and enforce naming convention for a full-chip database while maintaining connectivity',
'Developed a data mining platform to highlight (critical net changes) design stability over the lifecycle of previous projects to enable designers prepare for future projects.',
'Developed API’s for querying waveform database and processing wave reports.',
'Develops and maintains scripts, tools and utilities to enhance designer efficiency.',
'Developed a GUI platform to enable designers cross probe waveforms and circuits.',
'Developed a web report tool to analyze the project database hourly and generate report of possible errors. A waiver methodology is also implemented to enable designers waive violations.',
'Developed reliability checks to ensure all devices are operating within the safe operating zones (SOA) and report worst-case violations',
      ],
      year: "2019-Present",
      techskills: [{techname: "Python"},{techname: "Perl"},{techname: "C"}],
    },
    {
      companyname: "Intel",
      position: "Graduate Technical Intern",
      des: [
    'Developed utility scripts for design automation',
    'Automation of FPGA flow from RTL compilation to programming FPGA bitstream files using command prompt and Quartus TCL shell',
    'Automation of image generation using Quartus TCL shell',
    'FPGA debug to validate image programming and bitstream programming',
      ],
      year: "July 2018- Dec 2018",
      techskills: [{techname: "Python"},{techname: "Perl"},{techname: "C"}],
    },
    {
      companyname: "Tennessee Technological University",
      position: "Research Assistant",
      des: [
    'Investigated the viability of a digital design technique for identifying counterfeit integrated circuits by exploiting changes in the timing characteristics of CMOS designs.',
    'Designed a Low Power Digital Aging Sensor for Counterfeit Detection (Remarked/Recycled) in Integrated Circuits which does not require a reference IC to provide a baseline signature.',
    'Used Cadence to design and implement an analog Hardware Trojan Detection circuit that is based on charge accumulation in a capacitor.',
    'Designed Privacy-Preserving Fine Grained Data Retrieval Schemes for Mobile Social Networks.',
      ],
      year: "2014-2018",
      techskills: [{techname: "C"},{techname: "Python"}],
    },
    
  ];

  //const colors = ["#800000","#FF8042","#001CCE","#4B088A","#FF6347","#FF1042"];

  return (
    <Wrapper>
  
    <div className="workexperience-section"  id="workexperience">

		<div className="title">
			<h2>Work Experience</h2>
		</div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#f9004d">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#191919", color: "#fff" } }
              contentArrowStyle={{ borderRight: "7px solid  #f9004d" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: "#f9004d", color: "#fff" }}
              icon={<MdGroupWork />}
              key={index}
            >
              <h3 className="vertical-timeline-element-title hpos">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle hpos">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
            
            <div className="desi">
            {item.des.map((de,ii)=> (
              <li key={ii}>{de}</li>
            ))}     
            </div>
                  
              
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>      

    	</div>  
    </Wrapper>
  );
};

export default WorkExperience;
