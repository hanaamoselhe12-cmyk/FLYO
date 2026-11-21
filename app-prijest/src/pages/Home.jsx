import { Fragment } from "react"
import Landing from "../components/Landing"
import Features from "../components/Features"
import StayProduct from "../components/StayProduct"
import Testmonials from "../components/Testmonials"
import GetStarted from "../components/GetStarted"

const Home = () => {
  return (
   <Fragment>
     <Landing/>
     <Features/>
     <StayProduct/>
     <Testmonials/>
     <GetStarted/>
   </Fragment>
  )
}

export default Home
