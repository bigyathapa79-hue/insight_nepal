import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Message sent successfully!");

    reset();
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a question, suggestion, or news tip? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <FaMapMarkerAlt className="text-red-600 text-3xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">Address</h3>
                <p className="text-gray-600">Putalisadak, Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <FaPhoneAlt className="text-red-600 text-3xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-600">+977-9769732152</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <FaEnvelope className="text-red-600 text-3xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600">info@insightnepal.com</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex gap-4">
              <FaClock className="text-red-600 text-3xl mt-1" />

              <div>
                <h3 className="font-bold text-xl">Office Hours</h3>
                <p className="text-gray-600">Sunday - Friday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block mb-2 font-medium">Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                  />

                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />

                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-medium">Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-600"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                />

                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-red-600"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                ></textarea>

                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4562050339005!2d85.32265929999998!3d27.7031974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64b5f13e1%3A0x28b2d0eacda46b98!2sPutalisadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1785377275277!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Insight Nepal Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
