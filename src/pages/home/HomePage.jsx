import BreakingNews from "../../components/BreakingNews";
import FooterComponent from "../../components/FooterComponents";
import HeaderComponent from "../../components/HeaderComponent";
import HeroSection from "../../components/HeroSection";
import NewsCard from "../../components/NewsCard";
import news from "../../data/news";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <BreakingNews/>
      <HeroSection/>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Latest News</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
