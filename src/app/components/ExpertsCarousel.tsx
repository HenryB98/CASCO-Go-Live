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
    name: "Expert Name 1",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in construction and project management, our CEO leads CASCO with vision and expertise. Expert in large-scale infrastructure development and strategic planning.",
    email: "ceo@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Expert Name 2",
    position: "Chief Operations Officer",
    bio: "A seasoned professional with extensive experience in construction operations and quality management. Specializes in ensuring project excellence and operational efficiency.",
    email: "coo@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Expert Name 3",
    position: "Head of Engineering",
    bio: "Leading our engineering team with innovative solutions and technical expertise. Specializes in structural engineering and sustainable construction methods.",
    email: "engineering@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 4,
    name: "Expert Name 4",
    position: "Chief Architect",
    bio: "Award-winning architect with a portfolio of iconic buildings and structures. Brings creative vision and technical precision to every project.",
    email: "architecture@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 5,
    name: "Expert Name 5",
    position: "Project Manager",
    bio: "Expert in managing complex construction projects from conception to completion. Ensures timely delivery and budget compliance on all assignments.",
    email: "pm@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 6,
    name: "Expert Name 6",
    position: "Quality Assurance Director",
    bio: "Dedicated to maintaining the highest standards of quality and safety. Implements rigorous quality control measures across all projects.",
    email: "qa@cascoconstruction.ng",
    linkedin: "#",
  },
  {
    id: 7,
    name: "Expert Name 7",
    position: "Business Development Manager",
    bio: "Drives growth and strategic partnerships for CASCO. Expert in identifying opportunities and building lasting client relationships.",
    email: "bd@cascoconstruction.ng",
    linkedin: "#",
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
                  className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative h-96 lg:h-auto bg-gradient-to-br from-custom-blue-100 to-custom-blue-50">
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
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
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

                      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
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