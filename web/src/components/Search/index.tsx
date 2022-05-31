import React,{useState} from "react";
import { ArrowRight, X } from "phosphor-react";
import { SearchContainer } from "./containers/SearchContainer";
import axios from "axios";

import { useSearch } from '../../hooks/useSearch'

interface Prop {
    onRequestClosed:()=> void
}

export function Search({onRequestClosed}:Prop) {
    
    const [cityName,setCityName] = useState('')
    const [datasCity,setDatasCity] = useState<any>()
    const { handleSearch } = useSearch()

    const cityNames = ['São Paulo','Lisboa','Londres','Paris','New York']

async function handleSearchCity() {
    handleSearch(cityName)
    onRequestClosed()
}
    return (
        <div id="Aside" className="bg-blue-500 w-1/3 h-screen p-1 font-Raleway">
                <button className="w-100 text-right flex justify-end absolute left-96 top-4">
                    <X className="text-gray-300" weight="bold" size={20} onClick={onRequestClosed}/>
                </button>
                <header className="flex justify-between w-10/12 mx-auto pt-10 gap-2">
                        
                    <input 
                        type='text' 
                        className="bg-blue-500 border-gray-500 border text-gray-300 p-2 font-Raleway shadow-lg font-[500] hover:bg-gray-600 transition-colors w-3/4 focus:outline-gray-500 " placeholder="Search the city here"
                        onChange={e=>{setCityName(e.target.value)}}
                        />
                    <button 
                        className="bg-blue-400 p-4 hover:bg-blue-300 transition-colors text-gray-300"
                        onClick={handleSearchCity}
                    >
                        Search
                    </button>
                </header>
            <main>
                {cityNames.map((value,key)=>(
                    <div key={key} onClick={onRequestClosed}>
                        <SearchContainer city={value} key={key} />
                    </div>
                ))}
            </main>
        </div>
    )
}