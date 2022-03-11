import React, {useState, useEffect, useCallback , useContext} from 'react';
import axios from "axios";
import { linkTrimer } from "../Helpers/linkTrimmer";


const ApiContext = React.createContext()

export const useApiData = () => useContext(ApiContext)

export const ApiContextProvider = ({children}) =>{
const [state, setState] = useState({
    apiData: {},
    allTags: [],
    navlink3: []
})

useEffect(()=>{
    let tagsCheck = []
      if(state?.apiData?.paths){
        Object.entries(state?.apiData.paths).forEach(([key, value])=>{
        Object.entries(value?.post || value?.get || value?.put || value?.delete).forEach(([key, value])=> (key=== "tags" && value) &&
          tagsCheck.push(...value)
        )
      })
    }
    setState((prev)=>{
      return{
        ...prev,
        allTags: tagsCheck.filter((x, i, a) => a.indexOf(x) === i)
      }
    })
  },[state?.apiData])




  useEffect(()=>{
    let id = 0
    const links = state?.allTags?.map?.(item=>{
      id = id + 1
      return(
      {id: id, pagelink: `/docs/${linkTrimer(item)}`, title: `${item}` }
      )
    })

    setState((prev)=>{
      return{
        ...prev,
        navlink3: links
      }
    })
  },[state?.allTags])


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
        <ApiContext.Provider 
        value={{apiData: state?.apiData, 
                navlink3: state?.navlink3,
                allTags: state?.allTags
                }}>
            {children}
        </ApiContext.Provider>
    )
}