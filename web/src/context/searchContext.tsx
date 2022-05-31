import axios from 'axios'
import React,{createContext, useState,ReactNode} from 'react'
import { api } from '../libs/api'

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

interface TypeSearchContext {
    cityObj:TypeCityObject | undefined,
    handleSearch:any
}

type SearchContextProviderProps = {
    children: ReactNode;
  }

export const SearchContext = createContext({} as TypeSearchContext)

export function SearchContextProvider({children}:SearchContextProviderProps) {


    const [cityObj,setCityObj] = useState<TypeCityObject>()

    var correctName = '' 
    function handleFixedName(city:string) {
        var arrCity = city.split(' ')
        arrCity.map((value,index)=>{
            const newPartName = value.charAt(0).toUpperCase() + value.slice(1)
            arrCity.splice(index,1,newPartName)
        })
        
        correctName =  arrCity.length > 1 ? arrCity.join('+') : arrCity[0]
    }

    function handleSearch(city:string,metric:boolean) {

        handleFixedName(city)
        if(metric) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${import.meta.env.VITE_API_KEY}&&q=${correctName}&units=metric`).then((resolve)=>{
            if(resolve.data) {

                const { name } = resolve.data
                const {temp,temp_min,temp_max,feels_like} = resolve.data.main
                const { speed } = resolve.data.wind
                const { description } = resolve.data.weather[0]
                const { icon } = resolve.data.weather[0]

                setCityObj({
                    name,
                    temp,
                    temp_min,
                    temp_max,
                    feels_like,
                    speed,
                    description,
                    icon
                })
            }
        })
        }
        else {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${import.meta.env.VITE_API_KEY}&&q=${correctName}`).then((resolve)=>{
            if(resolve.data) {

                const { name } = resolve.data
                const {temp,temp_min,temp_max,feels_like} = resolve.data.main
                const { speed } = resolve.data.wind
                const { description } = resolve.data.weather[0]
                const { icon } = resolve.data.weather[0]

                setCityObj({
                    name,
                    temp,
                    temp_min,
                    temp_max,
                    feels_like,
                    speed,
                    description,
                    icon
                })
            }
        })
        }
    }

    return (
        <SearchContext.Provider value={{ cityObj,handleSearch }}>
            {children}
        </SearchContext.Provider>
    )
}