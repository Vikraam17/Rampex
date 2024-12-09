import React, { createContext } from 'react'

export const AppContext = createContext();
const ContextProvider = (props) =>{
  const phone="+91 9361111689"
  const name="Vikraam V"
  return(
    <AppContext.Provider value={{phone,name}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider;