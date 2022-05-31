import React,{useEffect, useState} from "react";
import { Crosshair, MapPin } from "phosphor-react";

import clear from '../assets/Clear.png'
import { Search } from "./Search";
import { SearchContainer } from "./Search/containers/SearchContainer";

interface TypesProps {
    name?:string,
    type?:string,
    imgLink?:string,
    temp?:number,
    isCelsius:boolean
}

export function Aside({name,type,imgLink,temp,isCelsius}:TypesProps) {
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const monthOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December']
    
    const [searching,setSearching] = useState(false)
    const [date,setDate] = useState('')

    useEffect(()=>{
        const today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setDate(`Today,${daysOfWeek[today.getDay()]}.${today.getDate()},${today.getFullYear()}`)
    },[date])

    if(searching) {
        return (
            <Search onRequestClosed={()=>{setSearching(false)}}/>
        )
    }
    

    return (
        <div id="Aside" className="bg-blue-500 w-1/3 h-screen p-1 font-Raleway">
            <header className="flex justify-between w-10/12 mx-auto pt-10">
                <button 
                className="bg-gray-500 text-gray-300 p-2 font-Raleway shadow-lg font-[500] hover:bg-gray-600 transition-colors"
                onClick={()=>{setSearching(true)}}
                >
                    Search for places
                </button>
            </header>
            <main>
                <div  className="bg-cloudy bg-no-repeat bg-contain h-1/2">
                    <img src={`http://openweathermap.org/img/wn/${imgLink}@2x.png`} alt="" className="mx-auto my-auto w-60"/>
                </div>
                <div className="text-center">
                    <h1 className="text-7xl text-gray-300 mt-5 ">{temp}<span className="text-gray-500 text-6xl">{isCelsius?'°C':'°F'}</span></h1>
                    <h3 className="text-gray-400 mt-10 text-2xl">{type}</h3>
                </div>
            </main>
            <footer className="flex justify-center text-gray-600 ">
                <div className="absolute bottom-6 mt-4">
                    <p className="mt-4">{date}</p>
                    <p className="flex justify-center mt-2 items-center gap-2"> 
                    <span>
                        <MapPin
                            size={20}
                            weight="fill"
                        />
                    </span> {name}</p>
                </div>
            </footer>
        </div>
    )
}