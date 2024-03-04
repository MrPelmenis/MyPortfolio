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
    <div ref={containerRef} className='h-full opacity-50 flex flex-row overflow-x-hidden '>
            <ScrollElement id="home"  text="Home" nextSec="2"></ScrollElement>
            <ScrollElement id="about" text="About" nextSec="3"></ScrollElement>
            <ScrollElement id="projects" text="Projects" nextSec="1"></ScrollElement>
    </div>
  )
}

function ScrollElement(props){
    return(
        <a href={"#section" + props.nextSec}  id={props.id} className='h-full w-full bg-slate-500 flex-shrink-0 flex-grow-0 scrollable-container hiddenScrollBar'>
            {props.text}
        </a>
    )
}

export default Page;
