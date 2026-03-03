import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [highlightedProjectId, setHighlightedProjectId] = useState<number | null>(null);
  const [portfolioClock, setPortfolioClock] = useState(() => Date.now());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setPortfolioClock(Date.now());
    }, 400);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const applyHashHighlight = () => {
      const hashMatch = window.location.hash.match(/^#project-(\d+)$/);
      if (!hashMatch) {
        return;
      }

      const projectId = Number(hashMatch[1]);
      if (Number.isNaN(projectId)) {
        return;
      }

      setFilter("all");
      setHighlightedProjectId(projectId);

      window.setTimeout(() => {
        setHighlightedProjectId((current) => (current === projectId ? null : current));
      }, 2500);
    };

    applyHashHighlight();
    window.addEventListener("hashchange", applyHashHighlight);

    return () => {
      window.removeEventListener("hashchange", applyHashHighlight);
    };
  }, []);

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
      image: "/Sani Abacha Stadium/Screenshot 2026-02-28 154632.png",
      images: [
        "/Sani Abacha Stadium/Screenshot 2026-02-28 154632.png",
        "/Sani Abacha Stadium/Screenshot 2026-02-28 155341.png",
        "/Sani Abacha Stadium/Screenshot 2026-02-28 155359.png",
        "/Sani Abacha Stadium/Screenshot 2026-02-28 155416.png",
        "/Sani Abacha Stadium/Screenshot 2026-02-28 155435.png",
        "/Sani Abacha Stadium/Screenshot 2026-02-28 155448.png"
      ],
      tag: "Sports Infrastructure",
      pdfUrl: "/casco-profile-2025.pdf#page=28"
    },
    {
      id: 2,
      title: "2-Coat Surface Dressed Road",
      location: "Kwanar Gwammawa, Gezawa LGA, Kano State",
      year: "2023",
      category: "roads",
      description: "Construction of a 2-coat surface dressed road",
      image: "/2-Coat Surface/Screenshot 2026-02-28 143907.png",
      images: [
        "/2-Coat Surface/Screenshot 2026-02-28 143907.png",
        "/2-Coat Surface/Screenshot 2026-02-28 143922.png",
        "/2-Coat Surface/Screenshot 2026-02-28 143941.png",
        "/2-Coat Surface/Screenshot 2026-02-28 144000.png",
        "/2-Coat Surface/Screenshot 2026-02-28 144014.png",
        "/2-Coat Surface/Screenshot 2026-02-28 144122.png",
        "/2-Coat Surface/Screenshot 2026-02-28 144200.png",
        "/2-Coat Surface/Screenshot 2026-02-28 161605.png",
        "/2-Coat Surface/Screenshot 2026-02-28 161625.png"
      ],
      tag: "Road Construction",
      pdfUrl: "/casco-profile-2025.pdf#page=32"
    },
    {
      id: 3,
      title: "Kofar Na'isa Games Village",
      location: "Kano, Nigeria",
      year: "2023",
      category: "sports",
      description: "Project proposal 2023 - QR code to scan and see construction video",
      image: "/Kofar Na'Isa/Screenshot 2026-03-01 030008.png",
      images: [
        "/Kofar Na'Isa/Screenshot 2026-03-01 030008.png",
        "/Kofar Na'Isa/Screenshot 2026-03-01 030107.png",
        "/Kofar Na'Isa/Screenshot 2026-03-01 030122.png",
        "/Kofar Na'Isa/Screenshot 2026-03-01 030140.png",
        "/Kofar Na'Isa/Screenshot 2026-03-01 030158.png",
        "/Kofar Na'Isa/Screenshot 2026-03-01 030212.png"
      ],
      tag: "Sports Complex",
      pdfUrl: "/casco-profile-2025.pdf#page=36"
    },
    {
      id: 4,
      title: "Ahmadu Bello State Road Street Light",
      location: "Kano, Nigeria",
      year: "2023",
      category: "infrastructure",
      description: "Street light proposal 2023",
      image: "/Ahmadu Bello State/Screenshot 2026-03-01 030754.png",
      images: [
        "/Ahmadu Bello State/Screenshot 2026-03-01 030754.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030819.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030832.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030856.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030908.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030925.png",
        "/Ahmadu Bello State/Screenshot 2026-03-01 030939.png"
      ],
      tag: "Infrastructure",
      pdfUrl: "/casco-profile-2025.pdf#page=45"
    },
    {
      id: 5,
      title: "Dangi Flyover Landscaping Project",
      location: "Kano, Nigeria",
      year: "2023",
      category: "infrastructure",
      description: "Landscaping project for major flyover",
      image: "/Dangi Flyover/Screenshot 2026-03-01 031446.png",
      images: [
        "/Dangi Flyover/Screenshot 2026-03-01 031446.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031512.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031530.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031618.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031632.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031646.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031700.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031713.png",
        "/Dangi Flyover/Screenshot 2026-03-01 031728.png"
      ],
      tag: "Landscaping",
      pdfUrl: "/casco-profile-2025.pdf#page=49"
    },
    {
      id: 6,
      title: "MC Group Administrative Building",
      location: "Kano, Nigeria",
      year: "2023",
      category: "buildings",
      description: "Project proposal 2023",
      image: "/MC Group/Screenshot 2026-03-01 032042.png",
      images: [
        "/MC Group/Screenshot 2026-03-01 032042.png",
        "/MC Group/Screenshot 2026-03-01 032102.png",
        "/MC Group/Screenshot 2026-03-01 032116.png",
        "/MC Group/Screenshot 2026-03-01 032131.png",
        "/MC Group/Screenshot 2026-03-01 032154.png",
        "/MC Group/Screenshot 2026-03-01 032211.png",
        "/MC Group/Screenshot 2026-03-01 032237.png",
        "/MC Group/Screenshot 2026-03-01 032301.png",
        "/MC Group/Screenshot 2026-03-01 032321.png"
      ],
      tag: "Commercial Building",
      pdfUrl: "/casco-profile-2025.pdf#page=54"
    },
    {
      id: 7,
      title: "Nigerian Lebanese School Teachers Dorm",
      location: "Nigeria",
      year: "2023",
      category: "buildings",
      description: "Residential facility project",
      image: "/NLS Teachers Dorm/Screenshot 2026-03-01 032602.png",
      images: [
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032602.png",
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032614.png",
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032629.png",
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032647.png",
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032658.png",
        "/NLS Teachers Dorm/Screenshot 2026-03-01 032711.png"
      ],
      tag: "Educational Facility",
      pdfUrl: "/casco-profile-2025.pdf#page=58"
    },
    {
      id: 8,
      title: "Luxury Racquet Club",
      location: "Qatar",
      year: "2018",
      category: "sports",
      description: "Layout overview for luxury sports facility",
      image: "/Luxury Racquet Club/Screenshot 2026-03-01 032923.png",
      images: [
        "/Luxury Racquet Club/Screenshot 2026-03-01 032923.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 032951.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033005.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033027.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033040.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033052.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033105.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033131.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033436.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033455.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033521.png",
        "/Luxury Racquet Club/Screenshot 2026-03-01 033543.png"
      ],
      tag: "Sports Complex",
      pdfUrl: "/casco-profile-2025.pdf#page=60"
    },
    {
      id: 9,
      title: "Place Torino Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan, Yi Shan, Xin Guan, Ada Erinal",
      image: "/Place Torino/Screenshot 2026-03-01 034004.png",
      images: [
        "/Place Torino/Screenshot 2026-03-01 034004.png",
        "/Place Torino/Screenshot 2026-03-01 034036.png",
        "/Place Torino/Screenshot 2026-03-01 034052.png",
        "/Place Torino/Screenshot 2026-03-01 034102.png",
        "/Place Torino/Screenshot 2026-03-01 034116.png",
        "/Place Torino/Screenshot 2026-03-01 034142.png",
        "/Place Torino/Screenshot 2026-03-01 034159.png",
        "/Place Torino/Screenshot 2026-03-01 034212.png"
      ],
      tag: "Mixed-Use Development",
      pdfUrl: "/casco-profile-2025.pdf#page=66"
    },
    {
      id: 10,
      title: "Transformation of Nielbolo Factory",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Ada Erinal",
      image: "/Transformation of Nielbolo/Screenshot 2026-03-01 034646.png",
      images: [
        "/Transformation of Nielbolo/Screenshot 2026-03-01 034646.png",
        "/Transformation of Nielbolo/Screenshot 2026-03-01 034706.png",
        "/Transformation of Nielbolo/Screenshot 2026-03-01 034719.png",
        "/Transformation of Nielbolo/Screenshot 2026-03-01 034732.png"
      ],
      tag: "Industrial Renovation",
      pdfUrl: "/casco-profile-2025.pdf#page=72"
    },
    {
      id: 11,
      title: "Housing Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Hussein El Khatib",
      image: "/Housing Projects/Screenshot 2026-03-01 035127.png",
      images: [
        "/Housing Projects/Screenshot 2026-03-01 035127.png",
        "/Housing Projects/Screenshot 2026-03-01 035153.png",
        "/Housing Projects/Screenshot 2026-03-01 035208.png",
        "/Housing Projects/Screenshot 2026-03-01 035243.png"
      ],
      tag: "Residential",
      pdfUrl: "/casco-profile-2025.pdf#page=78"
    },
    {
      id: 12,
      title: "Night Life Projects",
      location: "International",
      year: "2023",
      category: "buildings",
      description: "By Ali Hassan and Hussein El Khatib",
      image: "/Night Life/Screenshot 2026-03-01 035459.png",
      images: [
        "/Night Life/Screenshot 2026-03-01 035459.png",
        "/Night Life/Screenshot 2026-03-01 035525.png",
        "/Night Life/Screenshot 2026-03-01 035543.png"
      ],
      tag: "Entertainment",
      pdfUrl: "/casco-profile-2025.pdf#page=83"
    },
    {
      id: 13,
      title: "Supply of Agricultural Equipment",
      location: "Pakistan Partnership",
      year: "2023",
      category: "infrastructure",
      description: "In partnership with Malik Agro Industries Pakistan",
      image: "/Supply of Agric Eqt/Screenshot 2026-03-01 035900.png",
      images: [
        "/Supply of Agric Eqt/Screenshot 2026-03-01 035900.png",
        "/Supply of Agric Eqt/Screenshot 2026-03-01 035910.png",
        "/Supply of Agric Eqt/Screenshot 2026-03-01 035925.png",
        "/Supply of Agric Eqt/Screenshot 2026-03-01 035942.png",
        "/Supply of Agric Eqt/Screenshot 2026-03-01 040003.png",
        "/Supply of Agric Eqt/Screenshot 2026-03-01 040016.png"
      ],
      tag: "Equipment Supply",
      pdfUrl: "/casco-profile-2025.pdf#page=87"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCurrentProjectImage = (project: { id: number; image: string; images?: string[] }) => {
    if (!project.images?.length) {
      return project.image;
    }

    const intervalMs = 1800 + (project.id % 5) * 350;
    const startOffsetMs = project.id * 700;
    const frameIndex = Math.floor((portfolioClock + startOffsetMs) / intervalMs) % project.images.length;

    return project.images[frameIndex];
  };

  return (
    <div className="w-full">
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
            {filteredProjects.map((project, index) => {
              const currentImage = getCurrentProjectImage(project);

              return (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={project.pdfUrl ? () => window.open(project.pdfUrl, "_blank", "noopener,noreferrer") : undefined}
                onKeyDown={project.pdfUrl ? (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.open(project.pdfUrl, "_blank", "noopener,noreferrer");
                  }
                } : undefined}
                role={project.pdfUrl ? "link" : undefined}
                tabIndex={project.pdfUrl ? 0 : undefined}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 scroll-mt-32 ${
                  project.pdfUrl ? "cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" : ""
                } ${
                  highlightedProjectId === project.id ? "ring-4 ring-custom-blue-400 shadow-2xl" : ""
                }`}
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    src={currentImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-sky-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                      {project.tag}
                    </span>
                  </div>
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
              );
            })}
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
