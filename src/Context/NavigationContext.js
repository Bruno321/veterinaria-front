import React, {createContext, useState} from "react";

export const NavigationContext = createContext();

const Provider = ({children})=>{
    const [screen, setScreen] = useState(null);
    const [itemId,setItemId] = useState()
    const [examenType,setExamenType] = useState()
    return(
      <NavigationContext.Provider value ={{
        screen,
        setScreen,
        itemId,
        setItemId,
        examenType,
        setExamenType
      }}>
      {children}   
      </NavigationContext.Provider>   
    )
}

export default {
    Provider,
    Consumer: NavigationContext.Consumer
}