import Nav from '../../components/Navbar/Nav'
import './Home.css'
import Header from '../../components/Header/Header'
import Feature from '../../components/Feature/Feature'
import Multipleproduct from '../Multipleproduct/Multipleproduct'
import Adminhome from '../admin/Home/Adminhome'
import { useContext, useEffect } from 'react'
import { Appcontext } from '../../Context/Appcontext'
const Home =  () => {
  const {currUser , user} = useContext(Appcontext);
  useEffect(()=>{
      currUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [])
  const {category} = user;
  return (
    <>
    {
      category === 'Admin' ?    <Adminhome/> :  <div className="userhome">
            <Nav/>
              <Header/>
              <Feature/>
              <Multipleproduct/>
      </div> 
    }

    </>
  )
}

export default Home