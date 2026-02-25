import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
  Pause,
  Play,
  ChevronRight,
} from "lucide-react";
import ExpertsCarousel from "../components/ExpertsCarousel.jsx";
import PageDecor from "../components/PageDecor.js";

export default function Home() {
  const HERO_ROTATION_SECONDS = 5;

  const heroSlides = [
    {
      section: "Sports Infrastructure",
      title: "Sani Abacha Stadium",
      topic: "Sani Abacha Stadium",
      description: "Provisional award contract for supply and installation",
      video: "/homevid.mp4",
      portfolioId: 1,
    },
    {
      section: "Road Construction",
      title: "2-Coat Surface Dressed Road",
      topic: "2-Coat Surface Dressed Road",
      description: "Construction of a 2-coat surface dressed road",
      video: "/homevid.mp4",
      portfolioId: 2,
    },
    {
      section: "Sports Complex",
      title: "Kofar Na'isa Games Village",
      topic: "Kofar Na'isa Games Village",
      description: "Project proposal 2023 - QR code to scan and see construction video",
      video: "/homevid.mp4",
      portfolioId: 3,
    },
    {
      section: "Infrastructure",
      title: "Ahmadu Bello State Road Street Light",
      topic: "Ahmadu Bello Road Street Light",
      description: "Street light proposal 2023",
      video: "/homevid.mp4",
      portfolioId: 4,
    },
    {
      section: "Landscaping",
      title: "Dangi Flyover Landscaping Project",
      topic: "Dangi Flyover Landscaping",
      description: "Landscaping project for major flyover",
      video: "/homevid.mp4",
      portfolioId: 5,
    },
    {
      section: "Commercial Building",
      title: "MC Group Administrative Building",
      topic: "MC Group Admin Building",
      description: "Project proposal 2023",
      video: "/homevid.mp4",
      portfolioId: 6,
    },
    {
      section: "Educational Facility",
      title: "Nigerian Lebanese School Teachers Dorm",
      topic: "Teachers Dorm Project",
      description: "Residential facility project",
      video: "/homevid.mp4",
      portfolioId: 7,
    },
    {
      section: "Sports Complex",
      title: "Luxury Racquet Club",
      topic: "Luxury Racquet Club",
      description: "Layout overview for luxury sports facility",
      video: "/homevid.mp4",
      portfolioId: 8,
    },
  ];

  const [activeHeroSlide, setActiveHeroSlide] = useState(1);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [countdownProgress, setCountdownProgress] = useState(1);
  const heroVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const countdownElapsedMsRef = useRef(0);
  const countdownAnimationRef = useRef<number | null>(null);

  const goToNextHeroSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  useEffect(() => {
    if (isHeroPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, HERO_ROTATION_SECONDS * 1000);

    return () => window.clearInterval(interval);
  }, [heroSlides.length, isHeroPaused]);

  useEffect(() => {
    countdownElapsedMsRef.current = 0;
    setCountdownProgress(1);
  }, [activeHeroSlide]);

  useEffect(() => {
    if (isHeroPaused) {
      if (countdownAnimationRef.current !== null) {
        window.cancelAnimationFrame(countdownAnimationRef.current);
      }
      return;
    }

    const totalDurationMs = HERO_ROTATION_SECONDS * 1000;
    const animationStartTime = performance.now() - countdownElapsedMsRef.current;

    const animateCountdown = (timestamp: number) => {
      const elapsedMs = Math.min(timestamp - animationStartTime, totalDurationMs);
      countdownElapsedMsRef.current = elapsedMs;
      setCountdownProgress(1 - elapsedMs / totalDurationMs);

      if (elapsedMs < totalDurationMs) {
        countdownAnimationRef.current = window.requestAnimationFrame(animateCountdown);
      }
    };

    countdownAnimationRef.current = window.requestAnimationFrame(animateCountdown);

    return () => {
      if (countdownAnimationRef.current !== null) {
        window.cancelAnimationFrame(countdownAnimationRef.current);
      }
    };
  }, [activeHeroSlide, isHeroPaused]);

  useEffect(() => {
    heroVideoRefs.current.forEach((videoElement, index) => {
      if (!videoElement) {
        return;
      }

      const isActiveVideo = index === activeHeroSlide;
      if (isActiveVideo && !isHeroPaused) {
        videoElement.play().catch(() => {
          // Ignore autoplay interruptions caused by browser policies.
        });
      } else {
        videoElement.pause();
      }
    });
  }, [activeHeroSlide, isHeroPaused]);

  const activeHero = heroSlides[activeHeroSlide] ?? {
    section: "Sports Infrastructure",
    title: "Sani Abacha Stadium",
    topic: "Sani Abacha Stadium",
    description: "Provisional award contract for supply and installation",
    video: "/homevid.mp4",
    portfolioId: 1,
  };

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
    <div className="page-shell">
      <PageDecor />
      {/* Hero Section */}
      <section className="relative w-full min-h-[82vh] sm:min-h-[88vh] overflow-hidden bg-black">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <video
              key={`${slide.title}-${index}`}
              autoPlay
              muted
              loop
              playsInline
              ref={(element) => {
                heroVideoRefs.current[index] = element;
              }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === activeHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ))}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <button
          onClick={goToNextHeroSlide}
          className="absolute z-20 right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/30 border border-white/70 text-white flex items-center justify-center"
          aria-label="Next hero slide"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        <div className="relative z-10 w-full h-full px-6 sm:px-10 lg:px-16 pt-12 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 flex flex-col">
          <motion.div
            key={activeHero.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-7">
              <span className="text-white/90 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">
                {activeHero.section}
              </span>
              <span className="h-0.5 flex-1 max-w-[22rem] bg-custom-blue-600" />
            </div>

            <h1 className="text-white text-[3.2rem] leading-[1.03] sm:text-[4.4rem] lg:text-[5.2rem] font-bold tracking-tight">
              {activeHero.title}
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl mt-5 max-w-2xl">
              {activeHero.description}
            </p>

            <Link
              to={`/portfolio#project-${activeHero.portfolioId}`}
              className="inline-flex flex-col items-start gap-1 mt-9 sm:mt-10 text-white text-sm sm:text-base font-semibold tracking-[0.12em] uppercase"
            >
              <span>Read the Story</span>
              <span className="h-0.5 w-full bg-custom-blue-600" />
            </Link>
          </motion.div>

          <div className="mt-auto pt-10">
            <button className="text-left" onClick={goToNextHeroSlide}>
              <span className="text-3xl sm:text-4xl font-semibold text-white">{activeHero.topic}</span>
              <span className="block h-1 w-full max-w-[19rem] bg-custom-blue-600 mt-2" />
            </button>

            <div className="relative mt-7 w-12 h-12">
              <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="currentColor"
                  className="text-custom-blue-600"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={138.23}
                  strokeDashoffset={138.23 * (1 - countdownProgress)}
                />
              </svg>

              <button
                onClick={() => setIsHeroPaused((current) => !current)}
                className="relative w-12 h-12 rounded-full text-white bg-black/30 flex items-center justify-center"
                aria-label={isHeroPaused ? "Play hero slider" : "Pause hero slider"}
                aria-pressed={isHeroPaused}
              >
                {isHeroPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </button>
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
      <section className="relative w-full aspect-[3/5] md:aspect-auto md:h-96 overflow-hidden bg-custom-blue-700">
        {/* Mobile Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        >
          <source src="/corevid-mobile.mp4" type="video/mp4" />
        </video>

        {/* Desktop Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        >
          <source src="/corevid-desktop.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Stats Section */}
      <section className="py-1.5 sm:py-2 bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="w-full px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto py-1 lg:overflow-visible lg:justify-between lg:gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center shrink-0 min-w-[76px] lg:min-w-0 lg:flex-1"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full mb-1">
                  <stat.icon className="w-4 h-4" />
                </div>
                <div className="text-lg font-bold mb-0.5">{stat.value}</div>
                <div className="text-sky-100 text-[10px] leading-tight">{stat.label}</div>
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