import { Link } from "react-router";
import news from "../data/news";

const HeroSection = () => {
  // Featured news (first article)
  const featuredNews = news[0];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full mb-4">
              {featuredNews.category}
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {featuredNews.title}
            </h1>

            <p className="text-gray-600 mb-6">{featuredNews.description}</p>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <span>By {featuredNews.author}</span>
              <span>{featuredNews.date}</span>
            </div>

            <Link
              to={`/news/${featuredNews.slug}`}
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Read Full Story
            </Link>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
              className="w-full h-112 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
