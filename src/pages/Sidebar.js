//import React,{useContext} from 'react'
import Wrapper from '../wrapper/Sidebar';
import SidebarList from './SidebarList';
import Home from './Home';
//import { ThemeContext } from "../App";


const Sidebar = () => {
    //const {expandSidebar, setExpandSidebar} = useContext(ThemeContext);
    //const handleExpandClick = () => {   setExpandSidebar(!expandSidebar) };

    return (
    <Wrapper>
      <div className="sidebar-section">
      <div className="sidebar">
          <SidebarList/>
        </div>
  
        <div>
          <Home/>
        </div>
      </div>
</Wrapper>
    );
}

export default Sidebar