import { Link } from "react-router";
import news from "../data/news";

const BreakingNews = () => {
  return (
    <section className="bg-red-600">
      <div className="container mx-auto flex items-center ticker">
        <div className="bg-white text-red-600 font-bold px-5 py-3">
          BREAKING NEWS
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="marquee">
            {[...news, ...news].map((article, index) => (
              <Link
                key={index}
                to={`/news/${article.slug}`}
                className="mx-8 whitespace-nowrap text-white hover:underline"
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
