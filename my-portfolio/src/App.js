import { useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar/TopBar";
import Page  from './Page/Page';
function App() {
  useEffect(()=>{
  });

  return (
        <section className="h-screen w-screen bg-my-gray flex justify-center items-center">
          <span className='bg-my-light h-1/2 w-1/2 rounded-xl slideIn flex flex-col justify-between'>
              <TopBar></TopBar>
              <Page></Page>
          </span>
        </section>
  )
}

export default App;
