import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';

import { useState } from 'react';


export default function PassingArray({option}){


    let [password ,setPassword]  = useState('QZNiVbHg');

    let [number, setNumber] = useState(false);
    let [special, setSpecial] = useState(false);
    const [value, setValue] = useState(8);

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


    return(
        <div className='my-4 flex justify-center flex-col w-9/12 sm:w-4/12 mx-auto gap-4'>
           

           <TextField value={password} onChange={handleOnChange} id="outlined-basic" label="Your Password" variant="outlined"  />
           <Slider  defaultValue={8} min={5} max={20} step={1}  onChange={handleChange} />
  <span> password of length : {value}</span>


          <div className="">
            
          <Checkbox onClick={()=>{
         
          setNumber(!number);
        
        }} /> <span> Numbers</span>
            </div>   

            <div className="">
            
            <Checkbox onClick={()=>{
           
            setSpecial(!special);
          
          }}  /> <span> Specials </span>
              </div>   




           <Button onClick={generatePassword} variant="contained" color="success">
       Generate New
      </Button>

     
        </div>



    )
}