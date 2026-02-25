import { motion } from "motion/react";
import { Target, Eye, Shield, Users, TrendingUp, Award } from "lucide-react";
import PageDecor from "../components/PageDecor.js";

export default function About() {
  const values = [
    {
      letter: "C",
      title: "Commitment to Quality",
      description: "We deliver durable, high-standard infrastructure that meets industry and regulatory benchmarks.",
      color: "from-custom-blue-600 to-custom-blue-700",
    },
    {
      letter: "A",
      title: "Accountability & Integrity",
      description: "We operate with transparency, ethical practices, and full responsibility for every project.",
      color: "from-custom-blue-600 to-custom-blue-700",
    },
    {
      letter: "S",
      title: "Sustainability & Social Responsibility",
      description: "We embrace eco-friendly construction and invest in CSR initiatives that benefit communities.",
      color: "from-custom-blue-600 to-custom-blue-700",
    },
    {
      letter: "C",
      title: "Collaboration & Innovation",
      description: "We leverage cutting-edge technology and teamwork to build transformative infrastructure.",
      color: "from-custom-blue-600 to-custom-blue-700",
    },
    {
      letter: "O",
      title: "Outstanding Service Delivery",
      description: "We prioritize client satisfaction and excellence, ensuring every project contributes to national development.",
      color: "from-custom-blue-600 to-custom-blue-700",
    },
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
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">About CASCO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Building{" "}
              <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                Nigeria's Future
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              A trusted partner in construction excellence and sustainable infrastructure development
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmV8ZW58MXx8fHwxNzcxMTAzNDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 text-white p-4 sm:p-8 rounded-xl shadow-xl">
                  <div className="text-2xl sm:text-4xl font-bold">12+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Casco Construction Limited is a trusted Nigerian construction company specializing in the design, 
                  development, and execution of projects across private, public, commercial, and government sectors. 
                  With a strong reputation for excellence and reliability, we deliver high-quality infrastructure, 
                  public buildings, and large-scale developments that drive national growth.
                </p>
                <p>
                  Our expertise extends to government-funded projects, where we ensure strict compliance with 
                  regulatory standards, safety protocols, and sustainability practices. We prioritize trust, 
                  transparency, and strategic collaboration, fostering strong partnerships with government 
                  agencies and stakeholders to execute projects that serve the public good.
                </p>
                <p>
                  With cutting-edge construction technology and a team of highly skilled professionals, Casco 
                  Construction Limited efficiently handles complex government contracts, from roads and bridges 
                  to hospitals, schools, and administrative buildings.
                </p>
                <p>
                  Our adherence to international best practices and certified Quality Management systems underscores 
                  our commitment to delivering durable, cost-effective, and sustainable solutions. As a preferred 
                  partner for government projects, we are dedicated to building infrastructure that enhances 
                  communities, supports economic development, and stands the test of time.
                </p>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-sky-50 w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading force in engineering and construction, delivering innovative, durable, and 
                sustainable infrastructure that shapes the future. We aspire to build iconic structures, bridges, 
                roads, and public facilities that drive economic growth and enhance communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
            >
              <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional construction and architectural solutions by transforming client ideas into 
                innovative, sustainable, and high-quality structures while maintaining a commitment to safety, 
                efficiency, and excellence at every stage of the project.
              </p>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex items-center gap-3 mb-2 w-fit mr-auto -ml-4 lg:-ml-8">
              <span className="h-0.5 w-12 sm:w-14 rounded-full bg-gray-700" />
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Our Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">C.A.S.C.O Core Values</h2>
            <p className="text-gray-600 max-w-2xl">
              The principles that guide every decision we make and every project we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${value.color} p-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-md bg-white/15 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{value.letter}</span>
                    </div>
                    <h3 className="text-base font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-sm text-white/90 leading-snug">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 text-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose CASCO?</h2>
            <p className="text-sky-100 max-w-2xl mx-auto text-lg">
              Excellence in every aspect of construction and infrastructure development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Certified Quality Management systems ensuring international standards"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Highly skilled professionals with extensive industry experience"
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description: "Successful delivery of major infrastructure and building projects"
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Trusted partner for government and private sector projects"
              },
              {
                icon: Target,
                title: "Client-Focused",
                description: "Dedicated to exceeding client expectations on every project"
              },
              {
                icon: Eye,
                title: "Innovation",
                description: "Cutting-edge construction technology and sustainable practices"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sky-100 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left mb-12"
            >
              <div className="flex items-center gap-3 mb-2 w-fit mr-auto -ml-4 lg:-ml-8">
                <span className="h-0.5 w-12 sm:w-14 rounded-full bg-gray-700" />
                <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Sustainability</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our Commitment to{" "}
                <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text text-transparent">
                  Sustainable Construction
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                At CASCO Construction Limited, we recognize the importance of environmental stewardship and 
                sustainable development. Our sustainability practices are integrated into every phase of our 
                projects, from planning and design to execution and completion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                "Eco-friendly construction materials and methods",
                "Energy-efficient building designs",
                "Waste reduction and recycling programs",
                "Water conservation strategies",
                "Community engagement and CSR initiatives",
                "Compliance with environmental regulations",
                "Green building certifications",
                "Long-term sustainability planning"
              ].map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-sky-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{practice}</p>
                </div>
              ))}
            </motion.div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
