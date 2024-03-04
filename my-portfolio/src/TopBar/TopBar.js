import { useEffect, useState } from 'react';
import "./TopBar.css";

function TopBar() {

    const [toggledButtons, setToggledButtons] = useState({home:true, about:false, projects:false});
  
    const changeToggleButtons = (button) => {
      switch (button) {
        case "home":
          setToggledButtons({home:true, about:false, projects:false});
          break;
        case "about":
          setToggledButtons({home:false, about:true, projects:false});
          break;
        case "projects":
          setToggledButtons({home:false, about:false, projects:true});
          break;

        default:
          break;

      }
    };
  
    const NavigatorButtons = ()=> {
      return (
        <span>
          <a href='#home' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("home")} style={{borderBottom: toggledButtons.home ? "1px solid black" : ""}}>Home</a>
          <a href='#about' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("about")} style={{borderBottom: toggledButtons.about ? "1px solid black" : ""}}>About</a>
          <a href='#projects' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("projects")} style={{borderBottom: toggledButtons.projects ? "1px solid black" : ""}}>Projects</a>
        </span>
      )
    };
  
    return (
      <div className='h-20 border-b-2 border-black w-full flex justify-between items-center' >
          <span>aa</span>
          <NavigatorButtons></NavigatorButtons>
          <span>aa</span>
      </div>
    );
}



export default TopBar;
