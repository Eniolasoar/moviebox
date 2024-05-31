import { createContext, useContext ,useState} from "react";

const GlobalContext=createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider=({children})=>{
    const [loaded, setLoaded] = useState(false);
    return(
        <GlobalContext.Provider value={{loaded,setLoaded}}>{children}</GlobalContext.Provider>

    )
}