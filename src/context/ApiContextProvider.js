import React, {useState, useEffect, useCallback , useContext} from 'react';
import axios from "axios";


const ApiContext = React.createContext()

export const useApiData = () => useContext(ApiContext)

export const ApiContextProvider = ({children}) =>{
const [state, setState] = useState({
    apiData: {}
})


const getApi = useCallback(()=>{
    axios.get(`https://bigfastapi.com/docs/swagger.json`)
    .then(res=>setState((prev)=>{
      return{
        ...prev,
        apiData: res?.data 
      }
    })
  ).catch(err=>{
    console.log("error", err)
  })
  },[])
  
  useEffect(()=>{
    getApi()
  },[getApi])

    return(
        <ApiContext.Provider value={{apiData: state?.apiData}}>
            {children}
        </ApiContext.Provider>
    )
}