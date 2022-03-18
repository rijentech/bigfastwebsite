import React, {useState, useEffect, useCallback} from 'react'
import Docsidebar from '../../../components/docSidebar';
import "./workingwithget.scss";
import { useApiData } from "../../../context/ApiContextProvider";
import vplayer from "../../../assets/svgs/defaultvideoplayer.svg";
import { useParams } from 'react-router-dom';
import { linkTrimer } from '../../../Helpers/linkTrimmer';



const WorkingWithGet = ({sidebaropen}) => {

  const [state, setState] = useState({
    content: {},
    method: "",
    group: [],
    loading: true,
    intro: "",
    paramDesc: "",
    paramsList: [],
    returnDesc: "",
    returnBody: ""
  })

  const {apiData} = useApiData()
  const {id} = useParams()
  const urlArray = window.location.pathname.split("/")
  const mainId = urlArray[urlArray.length - 2]

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[id])


  const setGroup = useCallback(async ()=>{
    try{
    const curator = []
    if(apiData?.paths){
      Object.entries?.(apiData?.paths).forEach((item)=>{
        if(Object.values(item)){
          if((Object.values?.(item[1]).map?.(item=> item?.tags).flat()).map?.(item => linkTrimer?.(item)).includes(mainId)){
          curator.push(item)
         }

        }
     })
    }
    setState((prev)=>{
      return{
        ...prev,
        group: curator
      }
    })
  }catch(err){
      console.log(err)
    }

  },[apiData?.paths, mainId])

  useEffect(()=>{
    setGroup()
  }, [setGroup])


 const setContent = useCallback(()=>{
  state.group?.map?.(item=>{
     Object.entries(item[1]).forEach(([key, value])=>{    
      if(value?.operationId === id){
        setState((prev)=>{
          return{
            ...prev,
            content: value,
            method: key
          }
        })
      }
    })
    return null
  })
 },[state.group, id])

 useEffect(()=>{
  setContent()
 },[setContent])

 useEffect(()=>{
  const contentArr = state.content?.description?.split("\n").map(item=>item.trim(" "))
  const paramslist = []
  contentArr?.map?.(item=>{
    const itemArr = item?.split("-")
    if(itemArr[0] === "param"){
      paramslist.push(itemArr[1])
      console.log("LOOKING",itemArr[1])
    }
    setState((prev)=>{
      return{
        ...prev,
        paramsList: paramslist
      }
    })
    setState((prev)=>{
      return{
        ...prev,
        intro: itemArr[0] === "intro" ? itemArr[1] : prev.intro,
        paramDesc: itemArr[0] === "paramDesc" ? itemArr[1] : prev.paramDesc,
        returnBody: itemArr[0] === "returnBody" ? itemArr[1] : prev.returnBody,
        returnDesc: itemArr[0] === "returnDesc" ? itemArr[1] : prev.returnDesc,
      }
    })
    return ""
  })

 },[state.content?.description])

 console.log("content", state.content?.description?.split("\n").map(item=>item.trim(" ")))


  return (
    <div className="workingwithget_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="contents">
        <div className="heading_container">
          <div className="label">{state?.method}</div>
          <div className="title">{state?.content?.summary}</div>
        </div>
        <div className="mb-30">
              {state?.intro}
            <br/>
            <br/>

            <h2>Parameters</h2>
            {state.paramDesc ? 
            <>
            {state?.paramDesc}
            <br/>
            <ul className='list'>
              {state?.paramsList?.map?.(item=>(
                <li key={Math.random()}>{item}</li>
              ))}
            </ul>
            </>
            :
            <span>No Parameter for this request</span>
            }
            
            <br/>
            <br/>
            
            <h2>Returns</h2>
            {state?.returnDesc}
            <br />
            {state?.returnBody}

        </div>
        <div className="subtitle">How to get started</div>
        <div className="vplayer_container mb-30">
          <img src={vplayer} alt="" />
        </div>
        <div className="mb-30">
          {/* content maybe */}
        </div>
      </div>
    </div>
  );
}

export default WorkingWithGet;