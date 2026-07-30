import CategoryCard from "../../components/CategoryCard";
import categories from "../../data/categories";

const Category = () => {
  return (
    <>

      <section className="py-12 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              News Categories
            </h1>

            <p className="text-gray-500 mt-3">
              Browse the latest news by your favorite category.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Category;
