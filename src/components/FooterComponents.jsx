const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo & About */}
          <div>
            <img
              src="/images/logo/logo.png"
              alt="Insight Nepal Logo"
              className="w-50 h-auto mb-3"
            />
          
            <p className="mt-2 text-sm leading-6">
              Bringing you the latest news from Nepal and around the world with
              accuracy and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

            <p>Email: info@insightnepal.com</p>
            <p>Phone: +977-9800000000</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Insight Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
