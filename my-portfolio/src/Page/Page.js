import { useEffect, useState, useRef  } from 'react';
import './Page.css';


import homeImage from "../img/image.png";
import phpLogo from "../img/phpLogo.png";


function Page() {
    const containerRef = useRef(null);
    
    //https://legacy.reactjs.org/docs/context.html

    //learning refs
    useEffect(() => {
      containerRef.current.style.scrollBehavior = 'smooth';
    }, []);
  
  
  return (
    <div ref={containerRef} className='h-full flex flex-row overflow-x-hidden bg-my-light rounded-lg'>
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <ProjectsPage></ProjectsPage>
    </div>
  )
}


function HomePage() {
  return (
    <section id='home' className='w-full h-full flex justify-between flex-shrink-0'>
      <img style={{width:200, height:200}} className='mx-6 mt-5 shake' src={homeImage} alt="Home Image" />
      <div className='mt-5'>Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.
          Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves. </div>
    </section>
  );
}


function AboutPage() {
  return (
    <section id='about' className='w-full h-full flex flex-col flex-shrink-0'>
      <h1 className='font-bold mx-3 mt-5'>Education:</h1>
      <div className='mx-3'>Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.</div>
      <h1 className='font-bold mx-3'>IT Knowledge:</h1>
      <div className='mx-3'>Fujak es ahujennais it fujaks</div>
      <div className='turuWidgetus'><LanguageShowcase img={phpLogo} text="php"></LanguageShowcase></div>
   </section>
  );
}

function ProjectsPage(){
  return (
    <section id='projects' className='w-full h-full flex-shrink-0'>
      <h1 className='font-bold mt-5 ml-3'>My personal projects:</h1>
      
      <section className='flex flex-wrap h-full justify-center overflow-auto mt-3'>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
      </section>
      
    </section>
  )
}

function ProjectShowcase(props){
    const [isHovered, setIsHovered] = useState(false);

    return(
        <span 
            className={`flex flex-col  text-center border mx-2 mt-5 border-black overflow-hidden projectShowcase ${isHovered ? 'hover:scale-110' : ''}`} 
            style={{width: isHovered ? '200px' : '200px', height: isHovered ? '200px' : '150px'}} 
            onMouseEnter={() => {
              setIsHovered(true);
            }} 
            onMouseLeave={() => setIsHovered(false)}>

              <img src={props.img} className="mx-auto mt-0" style={{width:100, height:100}} alt="Project Image" />
              <h1 className='font-bold'>{props.title}</h1>
              <span className={`slowAppearingText`}>{props.text}</span>
        </span>
    )

}

function LanguageShowcase(props){
  return (
    <span className='ml-2 inline-flex rounded-xl bord border select-none border-black items-center justify-between languageWidget'>
      <img src={props.img} className='ml-2 rounded-xl' style={{width:25, height:25}} alt="Language Icon" />
      <span className='mr-2 ml-1 font-arial'>{props.text}</span>
    </span>
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
