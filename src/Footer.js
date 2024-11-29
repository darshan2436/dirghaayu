import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full bg-gray-950 text-white py-8 text-center mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul>
                <li className="text-gray-300 mt-2">
                  <a href="mailto:shrestha.nishan060@email.com" className="hover:text-yellow-300">Email: shrestha.nishan060@email.com</a>
                </li>
                <li className="text-gray-300 mt-2">
                  <a href="mailto:ranahari836@email.com" className="hover:text-yellow-300">Email: ranahari836@email.com</a>
                </li>
                <li className="text-gray-300">
                  <a href="tel:+9779818866274" className="hover:text-yellow-300">Phone: +977 9818866274</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul>
                <li>
                  <Link to="/donation" className="text-gray-300 hover:text-yellow-300">Blood Donation</Link>
                </li>
                <li>
                  <Link to="/appointment" className="text-gray-300 hover:text-yellow-300">Appointment Booking</Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-gray-300 hover:text-yellow-300">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-yellow-300">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://facebook.com" className="text-gray-300 hover:text-yellow-300">Facebook</a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-yellow-300">Twitter</a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-yellow-300">Instagram</a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-yellow-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-gray-300 text-sm">
            &copy; 2024 Dirghaayu. All rights reserved.
          </div>
        </div>
      </footer>
    )
}
export default Footer;