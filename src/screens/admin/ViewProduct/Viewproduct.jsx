import React, { useContext } from 'react'
import './Viewproduct.css'
import Adminsidebar from '../Components/AdminSidebar/Adminsidebar'
import { Admincontext } from '../../../Context/Admincontext'
import Admincard from '../Components/AdminCard/Admincard'

const Viewproduct = () => {
  const {isLoading , adminproduct} = useContext(Admincontext);
  if(isLoading){
    return <p>Please Wait for loading the data</p>
  }
  return (
    <>
    <div className="view-main">
      <Adminsidebar/>
      <div className="cards">
        {
          adminproduct?.length > 0 ? adminproduct.map((e , index)=>{
            return <Admincard  key={index+1} {...e}/>
          }) :<h1>There is No Data Present</h1>
        }
      </div>

    </div>
    </>
  )
}

export default Viewproduct