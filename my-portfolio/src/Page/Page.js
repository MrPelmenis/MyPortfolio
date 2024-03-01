import { useEffect, useState, useRef  } from 'react';
import './Page.css';
function Page() {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
          if (containerRef.current) {
            const maxScrollAmount = containerRef.current.scrollWidth - containerRef.current.clientWidth;
            if(containerRef.current.scrollLeft >= maxScrollAmount){
                containerRef.current.scrollLeft -= maxScrollAmount / 2;
            }else{
                containerRef.current.scrollLeft += maxScrollAmount / 2;
            }
           
          }
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);
  
  return (
    <div ref={containerRef} className='h-full opacity-50 flex flex-row overflow-x-hidden'>
            <ScrollElement text="a"></ScrollElement>
            <ScrollElement text="b"></ScrollElement>
            <ScrollElement text="c"></ScrollElement>
    </div>
  )
}

function ScrollElement(props){
    return(
        <div className='h-full w-full bg-slate-500 flex-shrink-0 flex-grow-0 scrollable-container hiddenScrollBar'>
            {props.text}
        </div>
    )
}

export default Page;
