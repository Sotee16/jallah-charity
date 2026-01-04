import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
 
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-white">
            Rescue Liberia for better Life
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Rescue Liberia for better Life is committed to restoring peace, inspiring hope,
            and supporting vulnerable communities through humanitarian aid,
            education, and empowerment programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-red-400 font-semibold mb-4">Donors</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Ways to Give</a></li>
            <li><a href="#" className="hover:text-white">Start a Fundraiser</a></li>
            <li><a href="#" className="hover:text-white">Corporate Giving</a></li>
            <li><a href="#" className="hover:text-white">Success Stories</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-red-400 font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white">Who We Are</a></li>
            <li><a href="/team" className="hover:text-white">Our Team</a></li>
            <li><a href="/events" className="hover:text-white">Events</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-red-400 font-semibold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/volunteer" className="hover:text-white">Volunteer</a></li>
            <li><a href="/donate" className="hover:text-white">Donate</a></li>
            <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Partnerships</a></li>
          </ul>
        </div>
      </div>

      
        {/* Contact */}
        {/* <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="text-sm space-y-2 text-white/80">
            <li>Liberia</li>
            <li>Email: unityfoundation@email.com</li>
            <li>Phone: +231 000 000 000</li>
          </ul>
        </div> */}

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          
          <p>
            © {new Date().getFullYear()} Rescue Liberia for better Life. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
