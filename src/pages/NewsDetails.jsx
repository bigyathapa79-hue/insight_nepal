import { Link, useParams } from "react-router";
import news from "../data/news";
import { Helmet } from "react-helmet-async";

const NewsDetails = () => {
  // Get the slug from the URL
  const { slug } = useParams();

  // Find the matching article
  const article = news.find((item) => item.slug === slug);

  // If article is not found
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">News Not Found</h1>

        <Link
          to="/"
          className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{news.title} | Insight Nepal</title>

        <meta name="description" content={news.description} />

        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.image} />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category */}
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold mt-5 mb-4">{article.title}</h1>

          {/* Author & Date */}
          <div className="flex gap-6 text-gray-500 mb-6">
            <p>By {article.author}</p>
            <p>{article.date}</p>
          </div>

          {/* Featured Image */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-112.5 object-cover rounded-lg mb-8"
          />

          {/* Description */}
          <p className="text-lg text-gray-700 font-medium mb-6">
            {article.description}
          </p>

          {/* Content */}
          <p className="text-gray-700 leading-8 text-justify">
            {article.content}
          </p>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block mt-10 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
