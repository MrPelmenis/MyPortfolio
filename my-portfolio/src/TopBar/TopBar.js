import { useEffect, useState } from 'react';
import "./TopBar.css";

function TopBar() {

    const [toggledButtons, setToggledButtons] = useState({home:false, about:false, projects:false});
  
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
        <span className='mx-6 md:mx-3 lg:mg-6 xl:mx-9 select-none'>
          <a href='#home' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("home")} style={{borderBottom: toggledButtons.home ? "1px solid black" : ""}}>Home</a>
          <a href='#about' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("about")} style={{borderBottom: toggledButtons.about ? "1px solid black" : ""}}>About</a>
          <a href='#projects' className='mx-2 sizeOnHover' onClick={()=>changeToggleButtons("projects")} style={{borderBottom: toggledButtons.projects ? "1px solid black" : ""}}>Projects</a>
        </span>
      )
    };

  useEffect(() => {
      const handleResize = () => {
          const currentHash = window.location.hash;
          const element = document.querySelector(currentHash);
          if (element) {
              element.scrollIntoView({ behavior: "auto" });
          }
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);


    
  
    return (
      <div className='h-20 w-full rounded-lg flex justify-between items-center bg-my-light' >
          <span className='mx-6 md:mx-3 lg:mg-6 xl:mx-6 text-xl md:text-xl lg:text-2xl xl:text-3xl coolFont'>Normunds Malnačs</span>
          <NavigatorButtons></NavigatorButtons>
      </div>
    );
}



export default TopBar;
