import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, QrCode } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "buildings", name: "Buildings" },
    { id: "roads", name: "Roads" },
    { id: "sports", name: "Sports Facilities" },
  ];

  const projects = [
    {
      id: 1,
      title: "Sani Abacha Stadium",
      location: "Kofar Mata, Kano State",
      year: "2023",
      category: "sports",
      description: "Provisional award contract for supply and installation",
      image: "https://images.unsplash.com/photo-1770039998244-7ed06c2c9259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwY29uc3RydWN0aW9uJTIwc3BvcnRzfGVufDF8fHx8MTc3MTE4MjMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Sports Infrastructure"
    },
    {
      id: 2,
      title: "2-Coat Surface Dressed Road",
      location: "Kwanar Gwammawa, Gezawa LGA, Kano State",
      year: "2023",
      category: "roads",
      description: "Construction of a 2-coat surface dressed road",
      image: "https://images.unsplash.com/photo-1708117242652-25dc76c4b30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NzExODIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Road Construction"
    },
    {
      id: 3,
      title: "Kofar Na'isa Games Village",
      location: "Kano, Nigeria",
      year: "2023",
      category: "sports",
      description: "Project proposal 2023 - QR code to scan and see construction video",
      image: "https://images.unsplash.com/photo-1770039998244-7ed06c2c9259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFkaXVtJTIwY29uc3RydWN0aW9uJTIwc3BvcnRzfGVufDF8fHx8MTc3MTE4MjMxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Sports Complex",
      hasQR: true
    },
    {
      id: 4,
      title: "Ahmadu Bello State Road Street Light",
      location: "Kano, Nigeria",
      year: "2023",
      category: "infrastructure",
      description: "Street light proposal 2023",
      image: "https://images.unsplash.com/photo-1708117242652-25dc76c4b30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NzExODIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Infrastructure"
    },
    {
      id: 5,
      title: "Dangi Flyover Landscaping Project",
      location: "Kano, Nigeria",
      year: "2023",
      category: "infrastructure",
      description: "Landscaping project for major flyover",
      image: "https://images.unsplash.com/photo-1708117242652-25dc76c4b30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwaGlnaHdheXxlbnwxfHx8fDE3NzExODIzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Landscaping"
    },
    {
      id: 6,
      title: "MC Group Administrative Building",
      location: "Kano, Nigeria",
      year: "2023",
      category: "buildings",
      description: "Project proposal 2023",
      image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTI0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Commercial Building"
    },
    {
      id: 7,
      title: "Nigerian Lebanese School Teachers Dorm",
      location: "Nigeria",
      year: "2023",
      category: "buildings",
      description: "Residential facility project",
      image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTI0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Educational Facility"
    },
    {
      id: 8,
      title: "Luxury Racquet Club",
      location: "Qatar",
      year: "2018",
      category: "sports",
      description: "Layout overview for luxury sports facility",
      image: "https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzEwODU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Sports Complex"
    },
    {
      id: 9,
      title: "Place Torino Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan, Yi Shan, Xin Guan, Ada Erinal",
      image: "https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzEwODU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Mixed-Use Development"
    },
    {
      id: 10,
      title: "Transformation of Nielbolo Factory",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Ada Erinal",
      image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTI0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Industrial Renovation"
    },
    {
      id: 11,
      title: "Housing Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Hussein El Khatib",
      image: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTI0MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Residential"
    },
    {
      id: 12,
      title: "Night Life Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Hussein El Khatib",
      image: "https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzEwODU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Entertainment"
    },
    {
      id: 13,
      title: "Supply of Agricultural Equipment",
      location: "Pakistan Partnership",
      year: "2023",
      category: "infrastructure",
      description: "In partnership with Malik Agro Industries Pakistan",
      image: "https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmV8ZW58MXx8fHwxNzcxMTAzNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tag: "Equipment Supply"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-custom-blue-50 via-white to-custom-blue-100 overflow-hidden w-full">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="w-full px-4 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-left"
          >
            <div className="flex items-center gap-3 mb-2 w-fit mr-auto -ml-4 lg:-ml-8">
              <span className="h-0.5 w-12 sm:w-14 rounded-full bg-gray-700" />
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Our Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                Projects
              </span>{" "}
              We're Proud Of
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Showcasing excellence in construction, infrastructure development, and architectural innovation
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-20 lg:top-[72px] z-40 border-b border-gray-200 w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-sky-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {project.tag}
                    </span>
                  </div>
                  {project.hasQR && (
                    <div className="absolute top-4 right-4 bg-white p-2 rounded-lg">
                      <QrCode className="w-6 h-6 text-sky-600" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-sky-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4 text-sky-600" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "13+", label: "Completed Projects" },
                { value: "5+", label: "Countries Served" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "12+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sky-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Have a Project in Mind?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Let's collaborate to bring your vision to life with our expertise and commitment to excellence
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
