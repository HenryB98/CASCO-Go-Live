import { useRef } from "react";
import Slider, { type Settings as SliderSettings } from "react-slick";
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback.js";

// fallback type for slider ref
// the actual Slider type from module can be weird under node16 resolution
// using `any` keeps it simple and avoids the JSX error below
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SliderRefType = any;

// Expert interface for type safety
export interface Expert {
  id: number;
  name: string;
  position: string;
  bio: string;
  email?: string;
  linkedin?: string;
  image?: string; // Optional - can be uploaded later
}

interface ExpertsCarouselProps {
  experts?: Expert[];
}

// Default expert data with placeholders
const defaultExperts: Expert[] = [
  {
    id: 1,
    name: "ALI HASSAN",
    position: "CEO, CASCO CONSTRUCTION LIMITED.",
    bio: "At the helm of Casco Construction Limited is our visionary CEO, Architect Ali Hassan. Born and raised in Nigeria, Ali Hassan's passion for architecture and construction began early. After completing his foundational education at Samadi International School in Kano (graduating in 2009), he broadened his horizons internationally. He pursued Interior Architecture at LAU in Beirut, Lebanon, advanced his studies in Architecture at Polytechnic De Torino (Polito) in Italy, and further honed his expertise in Management of the Built Environment at Polytechnic De Milano in Milan, Italy-institutions renowned as some of the best in the world. Prior to establishing Casco Construction Limited, Architect Ali Hassan gained valuable experience by undertaking sub-contracts, which laid the groundwork for his entrepreneurial vision. His global educational background and hands-on experience have been instrumental in shaping our company's innovative approach to construction and project management.",
    email: "ceo@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-1.jpg",
  },
  {
    id: 2,
    name: "MUHAMMAD ISMA BASHIR",
    position: "CIVIL ENGINEER, CASCO CONSTRUCTIONS LIMITED.",
    bio: "As a COREN-certified Civil Engineer and Member of the Nigerian Society of Engineers (NSE), Engr. Bashir brings rigorous regulatory compliance and technical excellence to Casco Construction Limited. His registration under COREN Decree 55 of 1970 ensures adherence to national engineering standards, critical for executing high-quality infrastructure projects at Casco. In roles such as project oversight or structural design, his expertise in civil engineering aligns with Casco's commitment to sustainable construction and innovation. Membership in the NSE further strengthens collaborative opportunities and access to industry best practices, enhancing the firm's capacity to deliver compliant, large-scale developments. Engr. Bashir's credentials reinforce Casco's reputation as a firm that priorities certified professionals, regulatory adherence, and ethical engineering solutions.",
    email: "coo@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-2.jpg",
  },
  {
    id: 3,
    name: "ARCH. KARIM CHAITANI",
    position: "HEAD ARCHITECTURE, CASCO CONSTRUCTIONS LIMITED.",
    bio: "A Lebanese architect, holds a Master of Business Administration from the Collège des Ingénieurs (2019-2020) and both a Master and Bachelor of Science in Architecture from the Politecnico di Torino, where he graduated with honors and published research in sustainable design. With a solid foundation in architecture, innovation, and business management, he brings a unique interdisciplinary perspective to his work. Karim joined Casco Construction Limited, where he has gained extensive experience in architectural design, project management, and sustainable Monstruction solutions, contributing to the company's commitment to excellence and modern development.",
    email: "engineering@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-3.jpg",
  },
  {
    id: 4,
    name: "ENGR. ALI KHECHEN",
    position: "ELECTRICAL ENGINEER, CASCO CONSTRUCTIONS LIMITED.",
    bio: "With a Masters Degree In Electrical Engineering from Lebanese International University, a membership in Lebanese Order of Engineering, and 10+ years of Experience in both Industrial and Energy Sector, privileged to be a member of CASCO Team. The genuine goal is empowering the company with the gained knowledge, practical and managerial experience. This is achieved by the coherence between all Engineering departments of the company to end up with Elite and Modern Projects.",
    email: "architecture@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-4.jpg",
  },
  {
    id: 5,
    name: "DAM KATOR DICKSON",
    position: "SITE ARCHITECT, CASCO CONSTRUCTIONS LIMITED.",
    bio: "A graduate of Architecture from Bayero University Kano with a Bachelor of Science (B.Sc.) in Architecture. He is a creative and detail-oriented professional at Casco Construction Limited, where he collaborates with design and construction teams to deliver functional and inspiring spaces. skilled in AutoCAD, Revit, SketchUp, 3ds Max, V-Ray, and Photoshop, he combines artistic vision with technical expertise to enhance design quality and visualization. His internship with the Federal Housing Authority further strengthened his understanding of large-scale housing and project coordination.",
    email: "pm@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-5.jpg",
  },
  {
    id: 6,
    name: "SADIQ ABDULKADIR",
    position: "HEAD SURVEYOR, CASCO CONSTRUCTIONS LIMITED.",
    bio: "Geomatics professional with 5+ years of experience in surveying and civil engineering. Holds a BSc in Geomatics (Ahmadu Bello University, 2018) and certifications in Data Processing, NYSC (2019). Proficient in GPS, Total Station, AutoCAD, Civil 3D, and GIS tools. Kurrent Role: Chief Surveyor at Casco Construction Limited, managing data acquisition, structural setting-out, and project oversight. Previously led projects as Chief Surveyor at X-rock Steel (2020-2021) and served as Assistant Surveyor at Triacta Nig. Ltd. (2018-2020) and SKY Engineering (2017-2018). Trained with FCA Abuja and ABU Zaria in boundary surveys and geospatial mapping. skilled in leveraging technology for precision and efficiency. Certified NYSC member and Kaduna State native, committed to advancing sustainable infrastructure through innovation.",
    email: "qa@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-6.jpg",
  },
  {
    id: 7,
    name: "ENGR. LORTIM SHIMA CALEB",
    position: "HEAD STRUCTURAL, CASCO CONSTRUCTIONS LIMITED.",
    bio: "A dedicated Structural Engineer and Civil Engineering graduate from the University of Jos, currently pursuing a Master's in Bridge and Tunnel Engineering in China. He began his career with Arab Construction Company (ACC) in Abuja, gaining practical experience on major structural projects. Skilled in AutoCAD, Revit, STAAD Pro, ETABS, and Orion, Caleb has contributed to numerous residential, commercial, and infrastructure developments. Renowned for his precision, problemsolving, and commitment to sustainable engineering, he consistently delivers innovative and structurally sound solutions.",
    email: "bd@cascoconstruction.ng",
    linkedin: "#",
    image: "/experts/expert-7.jpg",
  },
];

export default function ExpertsCarousel({ experts = defaultExperts }: ExpertsCarouselProps) {
  const sliderRef = useRef<SliderRefType | null>(null);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <div className="flex items-center gap-3 mb-2 w-fit mr-auto -ml-4 lg:-ml-8">
            <span className="h-0.5 w-12 sm:w-14 rounded-full bg-gray-700" />
            <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Meet Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Experienced professionals dedicated to delivering excellence in every project
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Slider ref={sliderRef} {...settings}>
            {experts.map((expert, index) => (
              <div key={expert.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden h-[58rem] sm:h-[60rem] lg:h-[38rem]"
                >
                  <div className="grid lg:grid-cols-2 gap-8 h-full">
                    {/* Image Section */}
                    <div className="relative h-[24rem] sm:h-[28rem] lg:h-[38rem] bg-gradient-to-br from-custom-blue-100 to-custom-blue-50">
                      {expert.image ? (
                        <ImageWithFallback
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 rounded-full flex items-center justify-center">
                              <svg
                                className="w-20 h-20 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-500 italic">
                              Photo placeholder - Upload image here
                            </p>
                          </div>
                        </div>
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12 flex flex-col h-[34rem] sm:h-[32rem] lg:h-[38rem]">
                      <div className="mb-6">
                        <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                          Expert {index + 1} of {experts.length}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-gray-900">
                          {expert.name}
                        </h3>
                        <p className="text-xl text-sky-600 font-semibold mb-6">
                          {expert.position}
                        </p>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 text-lg flex-1 overflow-y-auto pr-2">
                        {expert.bio}
                      </p>

                      {/* Contact Links */}
                      <div className="flex gap-4">
                        {expert.email && (
                          <a
                            href={`mailto:${expert.email}`}
                            className="flex items-center gap-2 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Contact</span>
                          </a>
                        )}
                        {expert.linkedin && (
                          <a
                            href={expert.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Previous expert"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 bg-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 hover:scale-110 group"
            aria-label="Next expert"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* Custom Dots Styling */}
        <style>{`
          .slick-dots {
            bottom: -50px;
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #0ea5e9;
            opacity: 0.3;
          }
          .slick-dots li.slick-active button:before {
            opacity: 1;
            color: #0ea5e9;
          }
          .slick-dots li button:hover:before {
            opacity: 0.7;
          }
        `}</style>
        </div>
      </div>
    </section>
  );
}