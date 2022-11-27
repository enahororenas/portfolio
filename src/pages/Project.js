import ProjectList from "./ProjectList";
import Wrapper from "../wrapper/Project";

const Project = () => {
  
  const data = [
    {
      name: "MERN Stack High School Alumni Website",
      des: "Designed and developed an alumni website for ex high school students to connect and store information",
      projectlink: "https://delssadiaspora.onrender.com",
      techused: [
        {techname: "Node JS"},{techname: "Expres Js"},{techname: "React Js"},{techname: "Javascript"}
      ],
    },

    {
      name: "Personal Portfolio",
      des: "Designed and developed a personal portfolio website to highlight my skills, accomplishments and completed projects",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [{techname: "Node JS"},{techname: "Expres Js"},{techname: "React Js"},{techname: "Javascript"}],
    },

  ];

  return (
    <Wrapper>
      
    <div className="general" id="project">

    <div className="section-title">
        <h2>Projects</h2>
      </div>


      <div>
        {data.map((item, index) => (
          <div  key={index}>
            <ProjectList  {...item} />
          </div>
        ))}
      </div>

      
    </div>
    </Wrapper>
  );
};

export default Project;
