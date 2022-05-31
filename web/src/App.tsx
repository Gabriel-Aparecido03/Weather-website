import { SearchContextProvider } from "./context/searchContext"
import { Home } from "./pages/Home/Home"

export function App() {
  return (
    <>
      <SearchContextProvider>
        <Home/>
      </SearchContextProvider>
    </>
  )
}


