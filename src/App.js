
import { useState } from 'react';
import Action from './Action';
import './App.css';
import Card from './Card';
import Comedy from './Comedy';
import Horror from './Horror';
import Thriller from './Thriller';

function App() {
  const [genre, setGenre] = useState("thriller");

  const thriller =()=>{
    setGenre("thriller");
  };

  const action =()=>{
    setGenre("action");
    
  };
  
  const horror =()=>{
    setGenre("horror");
    
  };

  const comedy =()=>{
    setGenre("comedy");
    
  };

  
  return (
    <div  >
      <div className='text-center'><h1>Movies Guide</h1></div>
      
      <div className="main">
        <button onClick={thriller} className="text-center" >Thriller</button >
        <button onClick={()=>action()} className="text-center" >Action</button >
        <button onClick={comedy} className="text-center" >Comedy</button >
        <button onClick={horror} className="text-center" >Horror</button >
      </div> 

      <div className="displayBox">

        {genre=="thriller" && (<><h2 className='text-center'>Thriller</h2><Thriller/></>)}
        {genre=="action" && (<><h2 className='text-center'>Action</h2><Action/></>)}
        {genre=="horror" && (<><h2 className='text-center'>Horror</h2><Horror/></>)}
        {genre=="comedy" && (<><h2 className='text-center'>Comedy</h2><Comedy/></>)}

        {/* <Card/>
        <Card/>
        <Card/> */}
      </div>
    </div>
  );
}

export default App;
