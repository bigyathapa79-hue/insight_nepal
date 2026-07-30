import AllNews from "../../components/AllNews";
import BackToTop from "../../components/BacktoTop";
import BreakingNews from "../../components/BreakingNews";
import CategoryCard from "../../components/CategoryCard";
import HeroSection from "../../components/HeroSection";
import NewsCard from "../../components/NewsCard";
import Newsletter from "../../components/NewsLatter";
import Sidebar from "../../components/Sidebar";
import categories from "../../data/categories";
import news from "../../data/news";
import { useSearch } from "../../context/SearchContext";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
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
    <>
      <Helmet>
        <title>Insight Nepal | Latest News from Nepal</title>

        <meta
          name="description"
          content="Read the latest breaking news from Nepal including politics, business, sports, technology, entertainment, health, and more."
        />

        <meta
          property="og:title"
          content="Insight Nepal | Latest News from Nepal"
        />

        <meta
          property="og:description"
          content="Latest breaking news and updates from Nepal."
        />
      </Helmet>

      <BreakingNews />
      <HeroSection />
      {/* Latest Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Latest News</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredNews.slice(0, 6).map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">News Categories</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        <AllNews />
      </section>
      <Newsletter />
      <BackToTop />
    </>
  );
};

export default HomePage;
