import ProjectList from "./ProjectList";
import Wrapper from "../wrapper/Project";

const Project = () => {
  
  const data = [
    {
      name: "MERN Stack High School Alumni Website",
      des: "Designed and developed a full stack alumni website with Javascript, React, NodeJS & MongoDB to allow ex-high school students network, store data and post alumni updates",
      projectlink: "https://delssadiaspora.onrender.com",
      techused: [
        {techname: "Node JS"},{techname: "Expres Js"},{techname: "React Js"},{techname: "Javascript"}
      ],
    },
    {
      name: "Personal Portfolio",
      des: "Designed and developed a personal portfolio website with React to highlight my skills, accomplishments and completed projects",
      projectlink: "https://enahoro.onrender.com",
      techused: [{techname: "Node JS"},{techname: "Expres Js"},{techname: "React Js"},{techname: "Javascript"}],
    },
    {
      name: "Photo Gallery App",
      des: "Designed and developed a a full stack photo gallery website using REST API, where users can store, update and delete their image gallery",
      projectlink: "https://pwgallery.onrender.com",
      techused: [{techname: "Node JS"},{techname: "Expres Js"},{techname: "React Js"},{techname: "Javascript"}],
    },
    {
      name: "Web scrapping app",
      des: "Built a web scraping app using python to scrape for pdf files in a website",
      projectlink: "https://github.com/enahororenas/crawler",
      techused: [
        {techname: "Python"},
      ],
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
