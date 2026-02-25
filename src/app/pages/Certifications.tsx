import { motion } from "motion/react";
import { Award, CheckCircle, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback.jsx";
import PageDecor from "../components/PageDecor.js";

// Certification interface for type safety
export interface Certification {
  id: number;
  name: string;
  issuedBy: string;
  description: string;
  year: string;
  image?: string; // Optional - can be uploaded later
}

// Default certifications with placeholders
const certifications: Certification[] = [
  {
    id: 1,
    name: "Certificate of Incorporation",
    issuedBy: "Corporate Affairs Commission (CAC)",
    description: "Officially recognizes Casco Construction Limited as a legally incorporated entity under the laws of the Federal Republic of Nigeria.",
    year: "2022",
    image: "/certificates/certificate1.png",
  },
  {
    id: 2,
    name: "Special Control Unit Against Money Laundering (SCUML)",
    issuedBy: "Special Control Unit Against Money Laundering (SCUML)",
    description: "Certifies our compliance with anti-money laundering regulations as part of our commitment to transparency and ethical practices.",
    year: "2023",
    image: "/certificates/certificate2.png",
  },
  {
    id: 3,
    name: "Federal Inland Revenue Service (FIRS)",
    issuedBy: "Federal Inland Revenue Service (FIRS)",
    description: "Confirms that Casco Construction Limited is up-to-date with its tax obligations, in compliance with federal regulations.",
    year: "2023",
    image: "/certificates/certificate3.png",
  },
  {
    id: 4,
    name: "ECS Clearance Certificate",
    issuedBy: "Employee Compensation Scheme (ECS)",
    description: "This clearance ensures our compliance with employee compensation and insurance regulations, reinforcing our commitment to the welfare of our team.",
    year: "2022",
    image: "/certificates/certificate4.png",
  },
  {
    id: 5,
    name: "National Pension Commission (PenCom) Clearance",
    issuedBy: "National Pension Commission (PenCom)",
    description: "This clearance confirms our compliance with pension regulations, reinforcing our commitment to protecting employees’ retirement benefits in accordance with the National Pension Commission standards for Casco Construction Limited.",
    year: "2023",
    image: "/certificates/certificate5.png",
  },
  {
    id: 6,
    name: "Interim Registration Report",
    issuedBy: "Bureau of Public Procurement (BPP)",
    description: "This report certifies our registration with the Bureau of Public Procurement (BPP) for participation in public sector projects, demonstrating our readiness to engage in government contracts.",
    year: "2022",
    image: "/certificates/certificate6.png",
  },
  {
    id: 7,
    name: "Certificate of Compliance",
    issuedBy: "Industrial Training Fund (ITF)",
    description: "This certificate confirms our compliance with mandatory contributions for training and development, ensuring the growth of skills within the workforce.",
    year: "2023",
    image: "/certificates/certificate7.png",
  },
  {
    id: 8,
    name: "Contractor Registration - Kano State",
    issuedBy: "Kano State Works Registration Board",
    description: "CASCO is registered with the Kano State Works Registration Board for Building and Civil Engineering Construction under Class XX, Group NI.",
    year: "2022",
    image: "/certificates/certificate8.png",
  },
  {
    id: 9,
    name: "Business Premises Registration",
    issuedBy: "Kano State Ministry of Commerce",
    description: "Certified by the Kano State Ministry of Commerce for operations at No. 78 Maganda Road, Kano. Registered for Civil and Building Construction.",
    year: "2024",
    image: "/certificates/certificate9.png",
  },
];

export default function Certifications() {
  return (
    <div className="page-shell">
      <PageDecor />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-custom-blue-50 via-white to-custom-blue-100 overflow-hidden w-full">
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
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Our Achievements</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                Certifications
              </span>{" "}
              & Accreditations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Recognized excellence in construction, quality management, and professional standards
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { icon: Award, value: certifications.length.toString(), label: "Certifications" },
              { icon: CheckCircle, value: "100%", label: "Compliance" },
              { icon: Calendar, value: "2025", label: "Last Updated" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-10 h-10 mb-3" />
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sky-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.image ?? "#"}
                target={cert.image ? "_blank" : undefined}
                rel={cert.image ? "noopener noreferrer" : undefined}
                onClick={(event) => {
                  if (!cert.image) event.preventDefault();
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Certificate Image/Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-custom-blue-100 to-custom-blue-50 overflow-hidden">
                  {cert.image ? (
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <Award className="w-20 h-20 text-sky-500 mx-auto mb-4" />
                        <p className="text-sm text-gray-500 italic">
                          Certificate image placeholder
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Upload certificate image here
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {cert.name}
                    </h3>
                  </div>

                  <p className="text-sm text-sky-600 font-semibold mb-3">
                    {cert.issuedBy}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <p className="mt-3 text-xs font-medium text-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Click to view certificate
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Commitment to{" "}
                <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At CASCO Construction Limited, our certifications are more than just credentials—they represent 
                our unwavering commitment to quality, safety, and professional excellence. Each certification 
                reflects rigorous standards we maintain across all our projects and operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Continuous Improvement",
                  description: "We regularly update our certifications and pursue new accreditations to stay ahead of industry standards."
                },
                {
                  title: "Global Standards",
                  description: "Our certifications align with international best practices, ensuring world-class quality in all our projects."
                },
                {
                  title: "Client Confidence",
                  description: "Our accreditations provide assurance of our capability to deliver on complex and demanding projects."
                },
                {
                  title: "Regulatory Compliance",
                  description: "We maintain full compliance with all relevant Nigerian and international construction regulations."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-custom-blue-100 to-custom-blue-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Work With a Certified Leader
            </h2>
            <p className="text-xl text-sky-100 mb-8 leading-relaxed">
              Partner with CASCO Construction Limited for certified excellence in construction and infrastructure development
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/portfolio"
                className="bg-sky-700 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-sky-800 transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
