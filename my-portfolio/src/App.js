import { useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar/TopBar";

function App() {

  useEffect(()=>{
  });

  return (
        <section className="h-screen w-screen bg-slate-600 flex justify-center items-center">
          <span className='bg-orange-500 h-1/2 w-3/4 rounded-xl slideIn'>
              <TopBar></TopBar>
          </span>
        </section>
  )
}

export default App;
