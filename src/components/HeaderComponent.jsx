// const HeaderComponent = () => {
//   return (
//     <>
//       <header>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
//           <div>
//             <img className="w-50 h-auto" src="/images/logo/logo.png" alt="" />
//           </div>
//           <nav>
//             <ul className="flex gap-5">
//               <li>
//                 <Link href="#">Home</Link>
//               </li>
//               <li>
//                 <Link href="#">Categories</Link>
//               </li>

import { MdSearch } from "react-icons/md";
import { Link } from "react-router";

//               <li>
//                 <Link href="#">About</Link>
//               </li>
//               <li>
//                 <Link href="#">Contact</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HeaderComponent;

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Insight Nepal Logo"
              className="w-50 h-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search */}
          <div className="mt-4 md:mt-0">
            <button className="flex items-center gap-2 border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
              <span>Search</span>
              <MdSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;