import { motion } from "motion/react";
import { Building2, Ruler, HardHat, ClipboardCheck, Wrench, Users, CheckCircle } from "lucide-react";
import PageDecor from "../components/PageDecor.js";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Road Construction & Renovation",
      description: "Comprehensive road construction and renovation services delivering world-class highways and urban roads.",
      features: [
        "Highway and expressway construction",
        "Urban road development",
        "Road surface treatment and resurfacing",
        "Bridge and overpass construction",
        "Traffic management systems",
        "Quality assurance and testing"
      ],
      color: "from-custom-blue-500 to-custom-blue-600"
    },
    {
      icon: Ruler,
      title: "Architectural Drawings & Design",
      description: "Professional architectural design services with innovative and sustainable solutions tailored to your vision.",
      features: [
        "Conceptual design development",
        "Detailed architectural drawings",
        "3D visualization and rendering",
        "Building Information Modeling (BIM)",
        "Sustainable design solutions",
        "Regulatory compliance planning"
      ],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: HardHat,
      title: "Building Construction",
      description: "Complete building construction services from foundation to finishing for residential, commercial, and institutional projects.",
      features: [
        "Residential building construction",
        "Commercial complexes",
        "Public facilities and institutions",
        "Structural engineering",
        "Quality materials and workmanship",
        "Timely project delivery"
      ],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: ClipboardCheck,
      title: "Comprehensive Project Management",
      description: "End-to-end project management services ensuring efficiency, quality, and successful project delivery.",
      features: [
        "Project planning and scheduling",
        "Budget management and cost control",
        "Quality assurance and control",
        "Risk management and mitigation",
        "Stakeholder communication",
        "Documentation and reporting"
      ],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: Wrench,
      title: "Construction Execution",
      description: "Expert execution of construction projects with precision, safety, and adherence to industry standards.",
      features: [
        "Site preparation and earthworks",
        "Foundation and structural works",
        "MEP installations",
        "Safety management",
        "Equipment and machinery deployment",
        "Progress monitoring and control"
      ],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: Users,
      title: "Construction Consultation",
      description: "Professional consultation services providing expert guidance throughout your construction journey.",
      features: [
        "Feasibility studies",
        "Technical advisory services",
        "Value engineering",
        "Contractor selection support",
        "Contract administration",
        "Post-construction services"
      ],
      color: "from-rose-500 to-red-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet with you to understand your vision, requirements, and project goals."
    },
    {
      step: "02",
      title: "Planning & Design",
      description: "Our team develops comprehensive plans and designs tailored to your needs."
    },
    {
      step: "03",
      title: "Approval & Permits",
      description: "We handle all regulatory requirements and obtain necessary approvals."
    },
    {
      step: "04",
      title: "Construction Execution",
      description: "Expert execution of your project with strict quality and safety standards."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous testing and inspection ensuring compliance with specifications."
    },
    {
      step: "06",
      title: "Project Handover",
      description: "Successful completion and handover with comprehensive documentation."
    }
  ];

  return (
    <div className="page-shell">
      <PageDecor />
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
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Our Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                Comprehensive
              </span>{" "}
              Construction Solutions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              From concept to completion, we deliver excellence in every phase of your construction project
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video bg-gray-900">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/homevid.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-sky-50 w-full">
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
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, efficiency, and successful project delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <span className="text-5xl sm:text-6xl font-bold text-sky-100 group-hover:text-sky-200 transition-colors">
                    {item.step}
                  </span>
                  <div className="absolute top-4 left-0 w-12 h-1 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 group-hover:w-full transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white w-full">
        <div className="w-full px-4 lg:px-8">
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
              Let's discuss your construction needs and turn your vision into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get a Quote
              </a>
              <a
                href="/portfolio"
                className="bg-sky-700 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-sky-800 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
