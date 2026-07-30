import { FaBullseye, FaEye, FaNewspaper } from "react-icons/fa";

const About = () => {
  return (
    <>
    
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Insight Nepal
          </h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Insight Nepal is a modern digital news portal dedicated to
            delivering accurate, timely, and trustworthy news from Nepal and
            around the world.
          </p>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/images/logo/logo.png"
              alt="About Insight Nepal"
              className="rounded-xl shadow-lg w-300 h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Insight Nepal is an independent online news platform that shares
              the latest stories on politics, business, sports, technology,
              entertainment, health, and culture. Our goal is to keep readers
              informed through reliable journalism and easy-to-read articles.
            </p>

            <p className="text-gray-600 leading-8">
              We believe everyone deserves access to quality news. Our platform
              focuses on delivering factual reporting, meaningful stories, and
              important updates that help people stay connected with Nepal and
              the world.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
            <FaBullseye className="text-5xl text-red-600 mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>

            <p className="text-gray-600">
              To provide accurate, reliable, and timely news that empowers
              readers with trustworthy information every day.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
            <FaEye className="text-5xl text-red-600 mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>

            <p className="text-gray-600">
              To become one of Nepal's most trusted digital news platforms by
              promoting responsible journalism and informed communities.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
            <FaNewspaper className="text-5xl text-red-600 mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">Our Values</h3>

            <p className="text-gray-600">
              We value honesty, transparency, accuracy, and balanced reporting
              while covering stories that matter to our readers.
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default About;
