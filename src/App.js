import React, { useState, createContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import Sidebar from "./pages/Sidebar";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Education from './pages/Education';
import Project from "./pages/Project";
import Contact from "./pages/Contact";

//import SmallSidebar from "./pages/SmallSideBar";

export const ThemeContext = createContext(null);


const App = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  return (
    <ThemeContext.Provider value={{ expandSidebar, setExpandSidebar}}>
      
    
      <div>
        <Sidebar/>
        <About />
        <WorkExperience />
        <Skills/>
        <Education />
        <Project />
        <Contact />
      </div>
  
      <ScrollToTop smooth={true} top="20" color="white" height="20" width="20"style={{ borderRadius: "90px", backgroundColor: "#38004c" }}/>
    </ThemeContext.Provider>
  );
};

export default App;
