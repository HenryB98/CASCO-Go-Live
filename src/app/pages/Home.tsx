import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Building2,
  Ruler,
  HardHat,
  ClipboardCheck,
  ArrowRight,
  Award,
  Users,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import ExpertsCarousel from "../components/ExpertsCarousel.jsx";

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: "Road Construction & Renovation",
      description: "Expert construction and renovation of roads and highways to world-class standards.",
    },
    {
      icon: Ruler,
      title: "Architectural Drawings",
      description: "Professional architectural design services with innovative and sustainable solutions.",
    },
    {
      icon: HardHat,
      title: "Building Construction",
      description: "Complete building construction services from foundation to finishing.",
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project management and consultation for all construction needs.",
    },
  ];

  const stats = [
    { icon: Award, value: "12+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Projects Completed" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "50+", label: "Expert Team" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] md:h-screen overflow-hidden bg-gradient-to-br from-custom-blue-700 to-custom-blue-600">
        <div
          className="absolute inset-0 md:hidden bg-center bg-cover"
          style={{ backgroundImage: 'url("/image.png")' }}
        />

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/homevid.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-[22rem] sm:max-w-md mx-auto md:hidden">
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.28, duration: 0.55, ease: "easeOut" }}
                  className="w-[4px] h-36 sm:h-44 bg-white rounded-full mt-1 origin-top shrink-0"
                />

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                  className="text-[2.35rem] sm:text-[3.25rem] font-bold leading-[1.05] tracking-tight text-left"
                >
                  <motion.span
                    className="block text-white"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.42, duration: 0.55, ease: "easeOut" }}
                  >
                    Shaping Your Vision.
                  </motion.span>
                  <motion.span
                    className="block text-custom-blue-500"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.58, duration: 0.55, ease: "easeOut" }}
                  >
                    Building Your Future.
                  </motion.span>
                </motion.h1>
              </div>
            </div>

            <div className="hidden md:block max-w-5xl mx-auto text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="bg-custom-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold ring-1 ring-white/40">
                  Building Nigeria's Future
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-custom-blue-700"
              >
                <span className="bg-custom-blue-700 text-white px-2 rounded">Excellence</span> in Every{" "}
                <span className="bg-custom-blue-700 text-white px-2 rounded">Structure</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl text-custom-blue-700 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                CASCO Construction Limited delivers world-class infrastructure, from roads and bridges to
                iconic buildings. We combine innovation, quality, and sustainability to build projects that
                drive national development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <Link
                  to="/portfolio"
                  className="group bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 w-full sm:w-auto"
                >
                  View Our Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-custom-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex items-center gap-3 mb-2 w-fit mr-auto -ml-4 lg:-ml-8">
              <span className="h-0.5 w-12 sm:w-14 rounded-full bg-gray-700" />
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet your project needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white to-custom-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-custom-blue-600 font-semibold mt-4 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Video */}
      <section className="relative w-full h-56 sm:h-72 md:h-96 overflow-hidden bg-custom-blue-700">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/corevid.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Stats Section */}
      <section className="py-1.5 sm:py-2 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="w-full px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible lg:justify-between py-1">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center shrink-0 min-w-[84px] sm:min-w-[120px]"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full mb-1">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold mb-0.5">{stat.value}</div>
                <div className="text-sky-100 text-[10px] sm:text-xs lg:text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}          
            </div>
          </div>
        </div>
      </section>

      {/* Experts Carousel Section */}
      <ExpertsCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1636414722386-a73bd3fc368c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwd29ya2luZ3xlbnwxfHx8fDE3NzExMzk2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-sky-100 mb-8 leading-relaxed">
              Partner with CASCO Construction Limited for excellence in construction and infrastructure development. 
              Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                to="/portfolio"
                className="bg-sky-700 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-sky-800 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}