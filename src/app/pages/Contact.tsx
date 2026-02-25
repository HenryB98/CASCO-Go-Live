import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import PageDecor from "../components/PageDecor.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["No.70, Maganda Road, Kano, Nigeria"],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+234 907 770 0017", "+234 702 666 3336"],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["cascoconstructionlimited@gmail.com"],
      color: "from-custom-blue-600 to-custom-blue-700"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "from-custom-blue-600 to-custom-blue-700"
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
              <span className="text-gray-700 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 bg-clip-text text-transparent">
                Build Together
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-white w-full">
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white to-sky-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="project-inquiry">Project Inquiry</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-custom-blue-100 to-custom-blue-50 rounded-2xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-sky-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">No.70, Maganda Road,Kano, Nigeria</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-custom-blue-600 to-custom-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Experienced team of professionals",
                    "Quality construction standards",
                    "Timely project delivery",
                    "Competitive pricing",
                    "Comprehensive project management",
                    "Sustainable construction practices"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sky-50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-sky-50 w-full">
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
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're planning a new construction project or need renovation services, our team is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+2349077700017"
                className="bg-gradient-to-r from-custom-blue-600 to-custom-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:info@cascoconstruction.ng"
                className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold border-2 border-sky-600 hover:bg-sky-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
