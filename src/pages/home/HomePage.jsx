import BreakingNews from "../../components/BreakingNews";
import CategoryCard from "../../components/CategoryCard";
import FooterComponent from "../../components/FooterComponents";
import HeaderComponent from "../../components/HeaderComponent";
import HeroSection from "../../components/HeroSection";
import NewsCard from "../../components/NewsCard";
import Newsletter from "../../components/NewsLatter";
import Sidebar from "../../components/Sidebar";
import categories from "../../data/categories";
import news from "../../data/news";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
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
                {news.slice(0, 6).map((article) => (
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
        {/* Trending News */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Trending News</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.slice(6, 9).map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </section>
      <Newsletter />
      <FooterComponent />
    </>
  );
};

export default HomePage;
