import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import logo2 from "../../styles/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white w-full">
      <div className="w-full px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo2} alt="CASCO logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="font-bold text-xl">CASCO</h3>
                <p className="text-xs text-gray-400">CONSTRUCTION LIMITED</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building excellence, delivering innovation, and creating sustainable infrastructure for Nigeria's future.
            </p>
            <a
              href="/casco-profile-2025.pdf"
              download
              className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
            >
              Download Company Profile (PDF)
            </a>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-1.5V15.6a5.46 5.46 0 1 1-4.72-5.4v2.7a2.78 2.78 0 1 0 1.95 2.65V2.5h2.77a4.84 4.84 0 0 0 3.77 4.19v0Z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/casco_construction.ng?igsh=MWpqdjV4cjk4a3VsNw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-sky-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/certifications" className="hover:text-sky-400 transition-colors">Certifications</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Road Construction & Renovation</li>
              <li>Architectural Drawings</li>
              <li>Building Construction</li>
              <li>Project Management</li>
              <li>Construction Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-sky-500 flex-shrink-0" />
                <span>No. 70, Maganda Road, Kano State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>+234 907 770 0017, +234 702 666 3336</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>cascoconstructionlimited@gmail.com</span>
              </li>
            </ul>
          </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} CASCO Construction Limited. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}