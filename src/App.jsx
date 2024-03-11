import {useState} from 'react'
import PassingArray from './PassingArray'
import Header from './Header'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Footer from './Footer';

export default function App() {
  let [bulb,setBulb] = useState("bg-zinc-200");
  let [col,setCol] = useState(true);
  
  let light = ()=>{
    setBulb(bulb==="bg-zinc-200"?"bg-sky-100/90":"bg-zinc-200");
    setCol(!col);
  }
 



  
let rang = col? " text-sky-100":"text-zinc-900" ;
  return (
   
      <div className={`${bulb} transition-all duration-1000  h-screen`}>
    <span onClick={light} className={`${rang} fixed  right-4 top-2`}><LightbulbIcon/></span>
   
      <Header color={col}/>
 
   <PassingArray />

   <p className="text-center my-2">This Website is created by Ayush Chaubey</p>
<div className="flex justify-center top-12">
<Footer />
</div>


    </div>
  )
}
