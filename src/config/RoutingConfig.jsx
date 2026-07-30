import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../pages/home/HomePage"
import Category from "../pages/categories/Categories"
import NewsDetails from "../pages/NewsDetails";
import About from "../pages/about/AboutPage";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/contact/ContactPage";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="categories" element={<Category />} />
            <Route path="news/:slug" element={<NewsDetails />} />
            <Route path="about" element={<About />} />
            <Route
              path="category/:categoryName"
              element={<CategoryDetails />}
            />
            <Route path="contact" element={<ContactPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutingConfig
