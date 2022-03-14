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
    loading: true
  })

  const {apiData} = useApiData()
  const {id} = useParams()
  const urlArray = window.location.pathname.split("/")
  const mainId = urlArray[urlArray.length - 2]


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

 console.log("content", state.content)

  return (
    <div className="workingwithget_container">
      <Docsidebar sidebaropen={sidebaropen} />
      <div className="contents">
        <div className="heading_container">
          <div className="label">{state?.method}</div>
          <div className="title">{state?.content?.summary}</div>
        </div>
        <div className="mb-30">
            {state?.content?.description?.split("\n").map(item=>item.trim(" "))[0] ?? "No description yet"}
            <br/>
            {state?.content?.description?.split("\n").map(item=>item.trim(" "))[2] ?? ""}
            <br/>
            {state?.content?.description?.split("\n").map(item=>item.trim(" "))[3] ?? ""}
          {/* You may not know what an API does. You may not know what it stands
          for. But everyday APIs are working behind the scenes to provide you
          richer digital experiences. The movie ticket you bought online, the
          blogger’s recipe you shared on Facebook, and the cheap flight you
          booked on Expedia are all thanks to APIs. */}     
        </div>
        <div className="subtitle">How to get started</div>
        <div className="vplayer_container mb-30">
          <img src={vplayer} alt="" />
        </div>
        <div className="mb-30">
          The Authentication API enables you to manage all aspects of user
          identity when you use Auth0. It offers endpoints so your users can log
          in, sign up, log out, access APIs, and more. Learn more on how to
          perform Authentication with the
        </div>
      </div>
    </div>
  );
}

export default WorkingWithGet;