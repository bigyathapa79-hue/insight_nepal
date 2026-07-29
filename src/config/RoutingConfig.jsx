import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/home/HomePage"
import Category from "../pages/categories/Categories"
import NewsDetails from "../pages/NewsDetails";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutingConfig
