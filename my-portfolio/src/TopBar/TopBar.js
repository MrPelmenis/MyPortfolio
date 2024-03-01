import { useEffect } from 'react';

function TopBar() {

  useEffect(()=>{
  });

  return (
    <div className='h-20 border-b-2 border-black w-full flex justify-between items-center' >
        <span>aa</span>
        <NavigatorButtons></NavigatorButtons>
        <span>aa</span>
    </div>
  )
}

function NavigatorButtons(){
  return (
    <span>
      <button className='mx-1'>1</button>
      <button className='mx-1'>2</button>
      <button className='mx-1'>3</button>
    </span>
  )
}

export default TopBar;
