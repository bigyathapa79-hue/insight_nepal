import { Link } from "react-router";


const NewsCard = ({ article }) => {
  const { slug, title, image, category, author, date, description } = article;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      <div className="p-5">
        <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h2>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>{author}</span>
          <span>{date}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <Link
          to={`/news/${slug}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
