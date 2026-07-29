import { MdEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className="bg-red-600 py-5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Insight Nepal
          </h2>

          {/* Description */}
          <p className="text-red-100 mb-8">
            Stay updated with the latest news, breaking stories, and exclusive
            updates from Insight Nepal delivered directly to your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative flex-1">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white rounded-lg py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-black transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
