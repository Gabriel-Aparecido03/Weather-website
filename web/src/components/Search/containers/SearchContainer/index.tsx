import { ArrowRight } from "phosphor-react";
import { useSearch } from "../../../../hooks/useSearch";

interface PropsSearchContainer {
    city:string
}



export function SearchContainer({ city }:PropsSearchContainer) {

    const { handleSearch } = useSearch()

    return(
        <button 
            className="w-10/12 mx-auto h-12 mt-3 flex justify-between p-3 hover:border hover:border-gray-300 duration-100"
            onClick={()=>{handleSearch(city)}}
            >
            <p className="my-auto text-gray-300">{city}</p>
            <ArrowRight
                className="text-gray-300 "
                weight="fill"
            />
        </button>
    )
}