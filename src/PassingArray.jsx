import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Slider from '@mui/material/Slider';
import copy from "copy-to-clipboard";

import { useState } from 'react';


export default function PassingArray({option}){


    let [password ,setPassword]  = useState('QZNiVbHg');

    let [number, setNumber] = useState(false);
    let [special, setSpecial] = useState(false);
    const [value, setValue] = useState(8);
    let [saved,setSave] = useState("");
    let [hides,setHides] = useState("hidden");
    let [hideCopy,setHideCopy] = useState("hidden");
    
    const handleChange = (event) => {
    //   setValue(newValue as number);
    setValue(event.target.value);
    };


    let generatePassword = ()=>{
        let character = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        let nmbr = "0123456789087654321";
        let spcl ="!@#$%^&*()_+=-}{:<>/|\?"

        let pwd = "";
        
        if(number) character = character+nmbr;
        if(special) character = character+spcl;
        

        console.log(character);
        console.log(value)
        for(let i =1;i<=value;i++)
        {
            let charPos = Math.floor(Math.random()*(character.length))+1;
            pwd+= character.charAt(charPos);
        }
        console.log(pwd)
     setPassword(pwd);
 
        }




    let handleOnChange = (event)=>{
        setPassword(event.target.value);
    }

   


    let saveFun = ()=>{
        setSave(password);
        setHides("");
        
        
    }



       
       
     
        const copyToClipboard = () => {
            copy(password);
            
            setHideCopy("");
           
            setTimeout(() => {
                setHideCopy("hidden");
        
            }, 2000);
        };
    


    return(
        <div className='my-4 flex justify-center flex-col w-9/12 sm:w-4/12 mx-auto gap-4'>
           
<div className="parrent flex justify-center flex-col gap-4">
<div className='font-bold border-2 transition-all duration-1000 border-zinc-400 shadow-md shadow-black  rounded-lg p-1 text-center' onChange={handleOnChange}  >{password}</div>
          <nav className="flex justify-center">
          <Button onClick={saveFun} className='w-fit ' variant="contained" color="primary">
       Save password
      </Button>
          </nav>

</div>
           <Slider  defaultValue={8} min={5} max={20} step={1}  onChange={handleChange} />
  <span className='text-blue-900 fo'> password of length :<span className='font-bold'>  {value}</span></span>


          <div className="-my-4">
            
          <Checkbox onClick={()=>{
         
          setNumber(!number);
        
        }} /> <span className='font-bold'> Numbers</span>
            </div>   

            <div className="-my-4">
            
            <Checkbox onClick={()=>{
           
            setSpecial(!special);
          
          }}  /> <span className='font-bold'> Specials </span>
              </div>   




           <Button onClick={generatePassword} variant="contained" color="success">
       Generate New
      </Button>




            <div className={`saved ${hides} flex space-x-6 justify-center border-2 border-zinc-800 p-2 rounded-lg`}>

                <h1 className="font-bold">{saved}</h1>
                <div onClick={copyToClipboard}  className={`${hides} flex  justify-center space-x-4  hover:cursor-pointer hover:text-violet-800`}>

                <ContentCopyIcon />
                
                </div>
               

            </div>
            <div className={`relative ${hideCopy}  bg-black font-bold  w-fit mx-auto text-white px-2 py-1 rounded-md`}>copied</div>













        </div>



    )
}