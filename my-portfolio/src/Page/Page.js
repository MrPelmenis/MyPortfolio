import { useEffect, useState, useRef  } from 'react';
import './Page.css';


import homeImage from "../img/image.png";

import phpLogo from "../img/phpLogo.png";
import jsLogo from "../img/jsLogo.png";
import htmlLogo from "../img/htmlLogo.png";
import cssLogo from "../img/cssLogo.png";
import mysqlLogo from "../img/mysqlLogo.png";
import reactLogo from "../img/reactLogo.png";
import nodeJsLogo from "../img/nodeJsLogo.png";
import javaLogo from "../img/javaLogo.jpg";
import csharpLogo from "../img/csharpLogo.png";
import cPlusPlusLogo from "../img/c++Logo.png";
import tailwindLogo from "../img/tailwindLogo.png";



import boidsImg from "../img/boids.png";
import naggersImg from "../img/naggers.png";
import beatMakerImg from "../img/beatMaker.png";
import asteroidGameImg from "../img/asteroidGame.png";
import epicKillingGame from "../img/crimsonland.png";
import tankGame from "../img/tankGame.png";
import threeDterrain from "../img/3dterrain.png"
import game2048 from "../img/2048.png";
import gameofLife from "../img/game of life.png";
import bird from "../img/bird.png";
import imgtoTxt from "../img/imgtotext.png";
import maze from "../img/3dmaze.png";

import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
    <section id='home' className='w-full h-full flex justify-between overflow-hidden flex-shrink-0 flex-col items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
      <img className='mx-6 h-48 md:h-auto lg:h-auto xl:h-auto shake' src={homeImage} alt="Home Image" />
      <div className='mx-6 md:text-lg lg:text-xl xl:text-2xl max-w-full md:max-w-3/4 lg:max-w-2/3 xl:max-w-1/2 h-full overflow-y-auto flex flex-col justify-center items-center' style={{paddingBottom:"90px", padding:"20px"}}>
        Mind what no by kept. Celebrated no he decisively thoroughly. Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.
        Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves.
        <div className='flex flex-wrap justify-center'>
          <ContactMe></ContactMe>
          <GithubDisplay></GithubDisplay>  
          <Socials></Socials>
        </div>
      </div>
  </section>
  );
}


function ContactMe(){
  const [isHovered, setIsHovered] = useState(false);
  return(
  <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-my-cyan overflow-hidden projectShowcase transition-all duration-300 ${isHovered ? 'hover:scale-110' : ''}`}
            style={{width: isHovered ? '260px' : '150px', height: isHovered ? '90px' : '30px'}}
            onMouseEnter={() => {
                setIsHovered(true);
            }} 
            onMouseLeave={() => setIsHovered(false)}>

            <h1 className='select-none'>Contact Me</h1>
            <span className="slowAppearingText text-base">
                <div className='flex justify-center items-center'><MdLocalPhone className='mx-1'/>25299736</div>
                <div className='flex justify-center items-center'><MdEmail className='mx-1'/> normundsmalnacs@gmail.com</div>
            </span> 
  </span>
  )
}

function Socials(){
  const [isHovered, setIsHovered] = useState(false);
  return(
  <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-orange-400 overflow-hidden projectShowcase transition-all duration-300 ${isHovered ? 'hover:scale-110' : ''}`}
            style={{width: isHovered ? '260px' : '150px', height: isHovered ? '90px' : '30px'}}
            onMouseEnter={() => {
                setIsHovered(true);
            }} 
            onMouseLeave={() => setIsHovered(false)}>

            <h1 className='select-none'>Socials</h1>
            <span className="slowAppearingText text-base">
                <div className='flex justify-center items-center'><FaInstagram className='mx-1'></FaInstagram><a href='https://www.instagram.com/normuns/' className='underlineOnHover'>normuns</a></div>
                <div className='flex justify-center items-center'><MdFacebook className='mx-1'></MdFacebook> <a href='https://www.facebook.com/normis.malcs/?locale=lv_LV' className='underlineOnHover'>Normunds Malnačs</a></div>
            </span> 
  </span>
  )
}


function GithubDisplay(){
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <span
      className={`flex text-center flex-col items-center mx-3 mt-5 border border-black rounded-lg bg-purple-600 overflow-hidden projectShowcase transition-all duration-300 ${isHovered || isClicked ? 'hover:scale-110' : ''} ${isClicked ? 'clicked' : ''}`}
      style={{width: isHovered || isClicked ? '200px' : '150px', height: isHovered || isClicked ? '60px' : '30px'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={() => setIsClicked(!isClicked)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className='select-none' style={{color:"white"}}>Github</h1>
      <span className="slowAppearingText text-base">
        <div className='flex justify-center items-center underlineOnHover' style={{color:"white"}}>
          <a href='https://github.com/MrPelmenis' className='font-bold flex justify-center items-center'>
            <FaGithub className='mx-1'/> Check out my work
          </a>
        </div>
      </span> 
    </span>
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
        <LanguageShowcase img={jsLogo} text="Js"></LanguageShowcase>
        <LanguageShowcase img={htmlLogo} text="Html"></LanguageShowcase>
        <LanguageShowcase img={cssLogo} text="Css"></LanguageShowcase>
        <LanguageShowcase img={reactLogo} text="React"></LanguageShowcase>
        <LanguageShowcase img={tailwindLogo} text="Tailwind"></LanguageShowcase>
        <br/>
        <LanguageShowcase img={nodeJsLogo} text="Node Js"></LanguageShowcase>
        <LanguageShowcase img={phpLogo} text="php"></LanguageShowcase>
        <LanguageShowcase img={mysqlLogo} text="mysql"></LanguageShowcase>
        <br/>
        <LanguageShowcase img={csharpLogo} text="C#"></LanguageShowcase>
        <LanguageShowcase img={cPlusPlusLogo} text="C++"></LanguageShowcase>
        <LanguageShowcase img={javaLogo} text="Java"></LanguageShowcase>
      </div>
   </section>
  );
}

function ProjectsPage(){
  return (
    <section id='projects' className='w-full h-full flex-shrink-0 flex flex-col' >
      
      <h1 className='font-bold mt-5 ml-5 md:text-lg lg:text-xl xl:text-2xl'>My personal projects:</h1>
      <section className='flex flex-wrap overflow-y-auto h-full justify-center mt-3' style={{paddingBottom:"60px"}}>
        <ProjectShowcase img={naggersImg} title={"Full Stack Website"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        
        <ProjectShowcase img={beatMakerImg} title={"Beat Maker Web"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>

        <ProjectShowcase img={asteroidGameImg} title={"Retro Asteroid Game"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={epicKillingGame} title={"Crimsonland Alternative"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={tankGame} title={"Online Multiplayer Game"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={bird} title={"Flappy Bird Remake"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>

        <ProjectShowcase img={game2048} title={"2048 Alternative"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={gameofLife} title={"Conway's Game Of Life"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        
        <ProjectShowcase img={imgtoTxt} title={"Image To Text Converter"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>

        <ProjectShowcase img={threeDterrain} title={"3D Terrain Generation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={maze} title={"3D Maze Generation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
        <ProjectShowcase img={boidsImg} title={"3D Boids Simulation"} text={"Nu kko jau es te uztaisiju, bija kinda gruti bet beigaas sagaaja viss kaa gribeju"}></ProjectShowcase>
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
            style={{width: isHovered ? '250px' : '200px', height: isHovered ? '200px' : '150px', marginBottom: isHovered ? "10px": "0"}}
            onMouseEnter={() => {
              setIsHovered(true);
            }} 
            onMouseLeave={() => setIsHovered(false)}>

              <img src={props.img} className="mx-auto mt-0 projectImage"  alt="Project Image" />
              <h1 className='font-bold'>{props.title}</h1>
              <span className={`slowAppearingText`}>{props.text}</span>
        </span>
    )

}

function LanguageShowcase(props){
  return (
    <span className='ml-2 inline-flex rounded-full bord border select-none border-black items-center justify-between languageWidget'>
      <img src={props.img} className='ml-2 rounded-full' style={{width:30, height:30}} alt="Language Icon" />
      <span className='mr-2 ml-1 font-arial font-bold'>{props.text}</span>
    </span>
  )
}


export default Page;
