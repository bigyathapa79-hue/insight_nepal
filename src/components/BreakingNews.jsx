import { Link } from "react-router";
import news from "../data/news";

const BreakingNews = () => {
  return (
    <section className="bg-red-600 overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="bg-white text-red-600 font-bold px-5 py-3 shrink-0">
          BREAKING NEWS
        </div>

        <div className="ticker-wrapper">
          <div className="ticker-track">
            {news.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
                className="ticker-item"
              >
                🔴 {article.title}
              </Link>
            ))}
          </div>

          <div className="ticker-track" aria-hidden="true">
            {news.map((article) => (
              <Link
                key={`copy-${article.id}`}
                to={`/news/${article.slug}`}
                className="ticker-item"
              >
                🔴 {article.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
