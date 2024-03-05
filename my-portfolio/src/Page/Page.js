import { useEffect, useState, useRef  } from 'react';
import './Page.css';
function Page() {
    const containerRef = useRef(null);
    
    //https://legacy.reactjs.org/docs/context.html

    //learning refs
    useEffect(() => {
      containerRef.current.style.scrollBehavior = 'smooth';
    }, []);
  
  
  return (
    <div ref={containerRef} className='h-full flex flex-row overflow-x-hidden bg-my-light rounded-lg'>
            <ScrollElement id="home"  text="Home" nextSec="2"></ScrollElement>
            <ScrollElement id="about" text="About" nextSec="3"></ScrollElement>
            <ScrollElement id="projects" text="Projects" nextSec="1"></ScrollElement>
    </div>
  )
}


function ScrollElement(props){
    return(
        <a href={"#section" + props.nextSec}  id={props.id} className='h-full w-full flex-shrink-0 flex-grow-0 scrollable-container hiddenScrollBar'>
            {props.text}
        </a>
    )
}

export default Page;
