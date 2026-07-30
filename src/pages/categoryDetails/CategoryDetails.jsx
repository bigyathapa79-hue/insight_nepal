import { useParams } from "react-router";
import NewsCard from "../../components/NewsCard";
import news from "../../data/news";

const CategoryDetails = () => {
  const { categoryName } = useParams();

  const filteredNews = news.filter(
    (article) => article.category.toLowerCase() === categoryName.toLowerCase(),
  );

  return (
    <>


      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{categoryName} News</h1>

          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <h2 className="text-center text-2xl text-gray-500">
              No news available.
            </h2>
          )}
        </div>
      </section>


    </>
  );
};

export default CategoryDetails;
