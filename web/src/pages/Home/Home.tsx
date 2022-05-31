import React, { useEffect, useState } from "react";
import { Aside } from "../../components/aside";
import { Footer } from "../../components/Footer";
import { useSearch } from "../../hooks/useSearch";

type TypeCityObject = {
    name:string,
    feels_like:number,
    temp_min:number,
    temp_max:number,
    temp:number,
    speed:number,
    description:string,
    icon:string
}

export function Home() {

    const { cityObj } = useSearch()
    const [ city,setCity] = useState<TypeCityObject>()
    const [ isCelsius,setIsCelsius] = useState<boolean>(false)

    const { handleSearch } = useSearch()

    useEffect(()=>{
        if(typeof cityObj !== 'undefined') {
            setCity(cityObj)
            return
        }
        
        return handleSearch('Brasilia',isCelsius)
        
    },[cityObj,isCelsius])

    return (
        <div id="Home" className="flex font-Raleway"> 
            <Aside name={cityObj?.name} imgLink={cityObj?.icon} type={city?.description} temp={city?.temp} isCelsius={isCelsius}/>
            <main className="bg-blue-700 w-2/3 float-right">
                <header className="flex justify-end w-11/12 mx-auto mt-8 gap-2">
                    <button 
                        className={isCelsius?'bg-gray-300 font-semibold rounded-full p-1 h-8 w-8 flex justify-center ':'bg-blue-300 font-semibold rounded-full p-1 h-8 w-8 flex justify-center'}
                        onClick={()=>{handleSearch(city?.name,true);setIsCelsius(true)}}
                        >
                            C
                        </button>
                    <button 
                    className={isCelsius?'bg-blue-300 font-semibold rounded-full p-1 h-8 w-8 flex justify-center ':'bg-gray-300 font-semibold rounded-full p-1 h-8 w-8 flex justify-center'}
                    onClick={()=>{handleSearch(city?.name,false);setIsCelsius(false)}}
                    >F</button>
                </header>
                <div className="w-11/12 mx-auto flex-row justify-center my-auto">
                    <h1 className="text-gray-300 text-2xl font-semibold ">Today's Highlights</h1>
                    <div className="grid grid-cols-2 mx-auto mt-10 gap-5">

                        <div className="bg-blue-300 w-3/4 p-4 text-gray-300 text-center">
                            <h3 className="text-md">Temp Max</h3>
                            <h1 className="text-4xl font-bold">{city? city.temp : '78'}{isCelsius?'°C':'°F'}</h1>
                            <span></span>
                        </div>
                        <div className="bg-blue-300 w-3/4 p-4 text-gray-300 text-center">
                            <h3 className="text-md">Temp Min</h3>
                            <h1 className="text-4xl font-bold">{city? city.temp_min : '78'}{isCelsius?'°C':'°F'}</h1>
                            <span></span>
                        </div>
                        <div className="bg-blue-300 w-3/4 p-4 text-gray-300 text-center">
                            <h3 className="text-md">Feel Like</h3>
                            <h1 className="text-4xl font-bold">{city? city.temp_max : '78'}{isCelsius?'°C':'°F'}</h1>
                            <span></span>
                        </div>
                        <div className="bg-blue-300 w-3/4 p-4 text-gray-300 text-center">
                            <h3 className="text-md">Speed Wind</h3>
                            <h1 className="text-4xl font-bold">{city? city.speed : '78'} Km/h</h1>
                            <span></span>
                        </div>

                        
                    </div>
                    
                </div>
            </main>
            <Footer/>
        </div>
    )
}