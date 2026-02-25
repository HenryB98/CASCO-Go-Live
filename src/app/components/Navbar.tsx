import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "../../styles/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="CASCO logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,75,115,0.35)]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-2 text-sm"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-custom-blue-600 font-semibold"
                        : "text-gray-700 hover:text-custom-blue-600"
                    }`}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-blue-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-custom-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-40 lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-4">
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-3 rounded-lg transition-colors text-sm ${
                        location.pathname === link.path
                          ? "bg-custom-blue-50 text-custom-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Link
              to="/contact"
              className="block w-full bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white text-center px-6 py-3 rounded-lg hover:shadow-lg transition-all text-sm font-medium"
            >
              Get Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 pb-6 pt-6 border-t border-gray-200"
          >
            <div className="flex flex-col gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-custom-blue-600" />
                <span>Kano, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-custom-blue-600" />
                <span>+234 907 770 0017</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-custom-blue-600" />
                <span>info@cascoconstruction.ng</span>
              </div>
            </div>
          </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}