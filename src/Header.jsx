import React from 'react'

export default function Header({color}) {

    let bg = color? "bg-zinc-400" :"bg-sky-700";
    let text = color? "text-gray-600" : "text-white" ;
  return (
    <div className={`${bg} rounded-b-xl text-2xl transition-all duration-1000 font-bold text-center p-2 ${text}`}>
    Ayush password 
    </div>
  )
}