import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/home/HomePage"

const RoutingConfig = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories" element={<HomePage/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default RoutingConfig
