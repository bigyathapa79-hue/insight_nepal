import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  const { name, image, totalNews } = category;

  return (
    <Link to={`/category/${name.toLowerCase()}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
        {/* Category Image */}
        <img src={image} alt={name} className="w-full h-44 object-cover" />

        {/* Category Content */}
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>

          <p className="text-gray-500">{totalNews} Articles</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
