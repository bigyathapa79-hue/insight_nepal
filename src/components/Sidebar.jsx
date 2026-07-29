import { Link } from "react-router";
import news from "../data/news";
import categories from "../data/categories";

const Sidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Trending News */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3 mb-5">
          Trending News
        </h2>

        <div className="space-y-5">
          {news.slice(0, 5).map((article) => (
            <div
              key={article.id}
              className="flex gap-4 border-b pb-4 last:border-none"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <Link
                  to={`/news/${article.slug}`}
                  className="font-semibold hover:text-red-600 transition"
                >
                  {article.title}
                </Link>

                <p className="text-sm text-gray-500 mt-1">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold border-l-4 border-red-600 pl-3 mb-5">
          📂 Categories
        </h2>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/categories"
              className="px-4 py-2 bg-gray-100 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/images/ads/ad1.jpeg"
          alt="Advertisement"
          className="w-full h-100 object-cover"
        />
      </div>

      
    </aside>
  );
};

export default Sidebar;
