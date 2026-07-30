import { useState } from "react";
import news from "../data/news";
import NewsCard from "./NewsCard";

{
  /* All News */
}

const AllNews=()=>{
  const [visibleNews, setVisibleNews] = useState(9);
  return(
    <>
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">All News</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.slice(0, visibleNews).map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleNews < news.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleNews(visibleNews + 3)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  </section>;
  </>
  )
}
export default AllNews;
