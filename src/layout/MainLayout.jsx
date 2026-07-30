import { Outlet } from "react-router"
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponents"


const MainLayout = () => {
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
  
    
    </>
  )
}

export default MainLayout
