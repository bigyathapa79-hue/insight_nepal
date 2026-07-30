import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import news from "../data/news";
import NewsCard from "./NewsCard";

const AllNews = () => {
  const [visibleNews, setVisibleNews] = useState(9);

  const { search } = useSearch();

  const filteredNews = news.filter((article) => {
    const keyword = search.toLowerCase();

    return (
      article.title.toLowerCase().includes(keyword) ||
      article.category.toLowerCase().includes(keyword) ||
      article.author.toLowerCase().includes(keyword) ||
      article.description.toLowerCase().includes(keyword)
    );
  });

 
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">All News</h2>

        {filteredNews.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.slice(0, visibleNews).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {visibleNews < filteredNews.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleNews((prev) => prev + 3)}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700">
              No news found.
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllNews;
