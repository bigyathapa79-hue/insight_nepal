import { MdSearch } from "react-icons/md";
import { Link } from "react-router";
import { useSearch } from "../context/SearchContext";


const HeaderComponent = () => {
  const { search, setSearch } = useSearch();
  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching:", search);
    console.log(search);

    // Later you can navigate to a search page
    // navigate(`/search?q=${search}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4 gap-4">
          {/* Logo */}
          <Link to="/">
            <img
              src="/images/logo/logo.png"
              alt="Insight Nepal Logo"
              className="w-44 lg:w-52 object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-red-600 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="hover:text-red-600 transition duration-300"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-red-600 transition duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-600 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search */}
          <form onSubmit={handleSearch} className="w-full lg:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full lg:w-72 border border-gray-300 rounded-lg py-2.5 pl-4 pr-12 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-200"
              />

              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-700"
              >
                <MdSearch className="text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </header>
  );
};

export default HeaderComponent;
