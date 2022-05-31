import { useContext } from "react";

import { SearchContext} from '../context/searchContext'

export function useSearch() {
    const value = useContext(SearchContext)

    return value
}
