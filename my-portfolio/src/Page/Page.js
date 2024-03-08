import { useEffect, useState, useRef  } from 'react';
import './Page.css';


import homeImage from "../img/image.png";
import phpLogo from "../img/phpLogo.png";
import boidsImg from "../img/boids.png";

import { MdLocalPhone } from "react-icons/md";

function Page() {
    const containerRef = useRef(null);
    
    //https://legacy.reactjs.org/docs/context.html

    //learning refs
    useEffect(() => {
      containerRef.current.style.scrollBehavior = 'smooth';
    }, []);
  
  
  return (
    <div ref={containerRef} className='h-full flex flex-row overflow-x-hidden bg-my-light rounded-lg overflow-hidden'>
            <HomePage></HomePage>
            <AboutPage></AboutPage>
            <ProjectsPage></ProjectsPage>
    </div>
  )
}


function HomePage() {
  return (
    <section id='home' className='w-full h-full flex justify-between overflow-hidden flex-shrink-0 items-center'>
      <img className='mx-6 h-48 md:h-64 lg:h-72 xl:h-80 shake' src={homeImage} alt="Home Image" />
      <div className='mx-6 md:text-lg lg:text-xl xl:text-2xl max-w-full md:max-w-3/4 lg:max-w-2/3 xl:max-w-1/2 h-full overflow-y-auto' style={{paddingBottom:"60px"}}>
        Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.
        Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.
       
        <div className='bg-my-cyan w-40 text-center rounded-full flex flex-col show-appear'>
          <div className="flex justify-center items-center">
              <span className="contact-text select-none">Contact me</span>
          </div>
          <div className='appear flex justify-start items-center'>
              <MdLocalPhone></MdLocalPhone>
              25299736
          </div>
        </div>
      </div>
  </section>
  );
}


function AboutPage() {
  return (
    <section id='about' className='w-full h-full flex flex-col flex-shrink-0 items-left justify-center'>
      <h1 className='font-bold mx-3 md:text-xl lg:text-2xl xl:text-3xl'>Education:</h1>
      <div className='mx-3 md:text-lg lg:text-xl xl:text-2xl '>Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.</div>
      <h1 className='font-bold mx-3 md:text-xl lg:text-2xl xl:text-3xl mt-5'>IT Knowledge:</h1>
      <div className='mx-3 md:text-lg lg:text-xl xl:text-2xl mb-1'>Fujak es ahujennais it fujaks</div>
      <div className='turuWidgetus mb-20'>
        <LanguageShowcase img={phpLogo} text="php"></LanguageShowcase>
        <LanguageShowcase img={phpLogo} text="php"></LanguageShowcase>
        <LanguageShowcase img={phpLogo} text="php"></LanguageShowcase>
      </div>
   </section>
  );
}

function ProjectsPage(){
  return (
    <section id='projects' className='w-full h-full flex-shrink-0' >
      
      <h1 className='font-bold mt-5 ml-5 md:text-lg lg:text-xl xl:text-2xl'>My personal projects:</h1>
      <section className='flex flex-wrap overflow-y-auto h-full justify-center mt-3' style={{paddingBottom:"60px"}}>
        <ProjectShowcase img={boidsImg} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={phpLogo} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <div className='w-full' style={{height:100}}></div>
      </section>
      
    </section>
  )
}

function ProjectShowcase(props){
    const [isHovered, setIsHovered] = useState(false);


    return(
        <span 
            className={`flex flex-col items-center text-center  mx-2 mt-5 border-black overflow-hidden projectShowcase ${isHovered ? 'hover:scale-110' : ''}`} 
            style={{width: isHovered ? '200px' : '200px', height: isHovered ? '200px' : '150px', marginBottom: isHovered ? "10px": "0"}}
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


export default Page;
