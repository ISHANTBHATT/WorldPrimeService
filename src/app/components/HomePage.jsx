"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Zap,
  Package,
  Globe,
  ChevronDown,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Star,
  Building2,
  Scale,
  Calendar,
  CircleDollarSign,
  FileCheck,
  MessageCircle,
  MapPin,
  User,
  Handshake,
  Truck,
  Layers,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Create refs for each animated section
  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const detailsRef = useRef(null);
  const contactRef = useRef(null);

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const partnersInView = useInView(partnersRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const teamInView = useInView(teamRef, { once: true });
  const detailsInView = useInView(detailsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const services = [
    { id: 1, title: "General Sales & Service Agent (GSSA)", icon: User },
    { id: 2, title: "Total Cargo Management (TCM)", icon: Package },
    { id: 3, title: "General Sales Agent (GSA)", icon: Handshake },
    { id: 4, title: "Cargo Sales Agent (CSA)", icon: Truck },
    { id: 5, title: "Block Space Agreements (BSA)", icon: Layers },
  ];
  const teamItems = [
    { id: 1, title: "Airline Sales & Marketing" },
    { id: 2, title: "Cargo Operations & Documentation" },
    { id: 3, title: "Pricing & Revenue Optimization" },
    { id: 4, title: "Customer Service & Support" },
    { id: 5, title: "Regulatory Coordination" },
    { id: 6, title: "IT System Integration (Cargo Spot, SmartKargo, etc.)" },
  ];
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-40 h-20 object-contain"
          />
        </div>

        {/* <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-900 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Gallery
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div> */}
        <Button
          className="bg-[#B90004] text-white px-6 py-2 rounded-full hover:bg-red-800"
          onClick={() => scrollToSection(detailsRef)}
        >
          Contact
        </Button>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-4xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Your Trusted Wing
              <br />
              in <span className="text-[#B90004]">Japan</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Strengthening your footprint across Asia and beyond.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div variants={fadeIn}>
                <Button
                  onClick={() => scrollToSection(servicesRef)}
                  className="bg-[#192E72] text-white px-8 py-3 rounded-full hover:bg-blue-900"
                >
                  Our Services
                </Button>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Button
                  onClick={() => scrollToSection(detailsRef)}
                  variant="outline"
                  className="px-8 py-3 rounded-full border-[#192E72] text-[#192E72] hover:bg-[#192E72] hover:text-white bg-transparent"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image with Overlays */}
          <motion.div
            ref={targetRef}
            style={{
              scale,
              borderRadius: useTransform(
                scrollYProgress,
                [0, 0.7],
                ["2rem", "5rem"]
              ),
            }}
            className="relative  overflow-hidden"
          >
            <Image
              src="/images/1.jpg"
              alt="Cargo ship with containers"
              width={1200}
              height={600}
              className="w-full h-[600px] object-cover"
            />

            {/* User Count Overlay */}
            {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white">
                  <Image
                    src="/images/profile1.jpg"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white">
                  <Image
                    src="/images/profile2.jpg"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white">
                  <Image
                    src="/images/profile3.jpg"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-white">
                  <Image
                    src="/images/profile4.jpg"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <span className="text-sm font-medium">+10M User</span>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center space-x-2">
              <Star className="w-5 h-5 text-orange-500 fill-current" />
              <span className="text-sm font-medium">845K+ (4.5 Review)</span>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Global Partners Section */}
      <section ref={partnersRef} className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Partner Logos */}
          <motion.div
            initial="hidden"
            animate={partnersInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="w-full flex flex-wrap justify-around items-center mb-16  group"
          >
            {/* <Image
              src="/images/c1.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            />
            <Image
              src="/images/c2.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            />
            <Image
              src="/images/c3.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            />
            <Image
              src="/images/c7.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            />
            <Image
              src="/images/c5.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            />
            <Image
              src="/images/c6.png"
              alt="clients logo"
              width={1000}
              height={1000}
              className="w-40 h-10 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            /> */}
            {[1, 7, 8].map((num, index) => (
              <motion.div
                key={num}
                variants={fadeIn}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={`/images/c${num}.png`}
                  alt="clients logo"
                  width={160}
                  height={80}
                  className="w-40 h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={partnersInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <p className="text-[#B90004] font-medium mb-4">
                Company Overview
              </p>
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6">
                World Prime Services株式会社
                {/* <br />
                Networks */}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                World Prime Services株式会社 is a legally registered corporation
                in Japan, committed to delivering efficient, reliable, and
                strategic solutions in the aviation industry. Since our
                inception, we have built a strong reputation for providing
                integrated air cargo and passenger airline representation across
                sales, operations, and regulatory compliance.
              </p>
              {/* <Button
                variant="outline"
                className="px-8 py-3 rounded-full border-[#192E72] text-[#192E72] hover:bg-[#192E72] hover:text-white bg-transparent"
              >
                Stay our Partner
              </Button> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                partnersInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <Image
                src="/images/3.jpg"
                alt="Global logistics network map"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between gap-10 items-start mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Business Purpose
              <br />& Activities
            </h2>
            <div className=" md:text-right">
              {/* <Button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 mb-4">
                View all Service
              </Button> */}
              <p className="text-gray-600 max-w-md">
                We offer tailor-made solutions combining deep industry
                knowledge, local expertise, and operational excellence.
                <br />
                World Prime Services specializes in:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className={`${
                  index === 0
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white"
                } p-8 rounded-2xl relative overflow-hidden transition-colors duration-300`}
              >
                <div className="absolute top-6 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="absolute top-6 right-6">
                  <ChevronRight className="w-6 h-6" />
                </div>
                <div className="mt-24">
                  <h3 className="text-2xl font-bold mb-4 ">{service.title}</h3>
                </div>
              </motion.div>
            ))}
            {/* <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-gray-900" />
              </div>
              <div className="absolute top-6 right-6">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-4">
                  General Sales & Service Agent (GSSA)
                </h3>
              </div>
            </div>
            <div className="bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white p-8 rounded-2xl relative">
              <div className="absolute top-6 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-gray-600" />
              </div>
              <div className="absolute top-6 right-6">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-4 ">
                  Total Cargo Management (TCM)
                </h3>
              </div>
            </div>
            <div className="bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white p-8 rounded-2xl relative">
              <div className="absolute top-6 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-gray-600" />
              </div>
              <div className="absolute top-6 right-6">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-4">
                  General Sales Agent (GSA)
                </h3>
              </div>
            </div>
            <div className="bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white p-8 rounded-2xl relative">
              <div className="absolute top-6 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-gray-600" />
              </div>
              <div className="absolute top-6 right-6">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-4">
                  Cargo Sales Agent (CSA)
                </h3>
              </div>
            </div>
            <div className="bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white p-8 rounded-2xl relative">
              <div className="absolute top-6 left-6 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-gray-600" />
              </div>
              <div className="absolute top-6 right-6">
                <ChevronRight className="w-6 h-6" />
              </div>
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-4">
                  Block Space Agreements (BSA)
                </h3>
              </div>
            </div> */}
          </motion.div>

          {/* Bottom Section with Ship Image */}
          {/* <div className="relative gap-12 items-center">
            <div className=" rounded-2xl overflow-hidden">
              <Image
                src="/images/4.jpg"
                alt="Cargo ship at port"
                width={1000}
                height={1000}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute inset-0 flex justify-end m-10 p-20">
              <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
              <h3 className="text-2xl w-full font-bold text-white mb-6 z-10">
                Our leadership brings decades of combined experience in the
                global aviation industry, ensuring professionalism, precision,
                and performance.
              </h3>
            </div>
          </div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              servicesInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative gap-12 items-center"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/images/4.jpg"
                alt="Cargo ship at port"
                width={1000}
                height={1000}
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex justify-end m-4 md:m-10 p-8 md:p-20">
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent backdrop-blur-md rounded-2xl transition-opacity duration-300 "></div>
              <div className="relative z-10 w-full flex flex-col justify-center items-start">
                <hr className="my-4 w-16 border-t-4 border-[#B90004]" />
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                  Our leadership brings{" "}
                  <span className="text-red-600">
                    decades of combined experience
                  </span>{" "}
                  in the global aviation industry, ensuring{" "}
                  <span className="italic">professionalism</span>,{" "}
                  <span className="italic">precision</span>, and{" "}
                  <span className="italic">performance</span>.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route Optimization Section */}
      <section ref={teamRef} className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Route Optimization
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We analyze traffic patterns and use AI-driven mapping to ensure
              the fastest, most cost-effective delivery routes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Apply Online
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We analyze traffic patterns and use AI-driven mapping to ensure
                the fastest, most cost-effective delivery routes.
              </p>
              <button className="text-gray-900 font-medium flex items-center mx-auto">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Submit Documents
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We analyze traffic patterns and use AI-driven mapping to ensure
                the fastest, most cost-effective delivery routes.
              </p>
              <button className="text-gray-900 font-medium flex items-center mx-auto">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Receive Goods
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We analyze traffic patterns and use AI-driven mapping to ensure
                the fastest, most cost-effective delivery routes.
              </p>
              <button className="text-gray-900 font-medium flex items-center mx-auto">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div> */}

          {/* Trusted by Businesses */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-gray-600 mb-8">
                Our japan-based team comprises experienced professionals with
                specialized expertise in:
              </p>

              <motion.div
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                variants={staggerChildren}
                className="space-y-4"
              >
                {teamItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{
                      x: 10,
                      backgroundColor: "rgba(25, 46, 114, 0.05)",
                      transition: { duration: 0.3 },
                    }}
                    className="border border-gray-200 rounded-lg p-4 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
                {/* <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Airline Sales & Marketing
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Cargo Operations & Documentation
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Pricing & Revenue Optimization
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Customer Service & Support
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      Regulatory Coordination
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">
                      IT System Integration (Cargo Spot, SmartKargo, etc.)
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.8, type: "spring" }}
              className="relative rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/2.jpg"
                alt="Aerial view of cargo ship"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* 
      <section
        ref={detailsRef}
        className="relative px-6 py-20 bg-white border-t border-gray-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial="hidden"
              animate={detailsInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="bg-white rounded-2xl p-8 transform transition-all"
            >
              <div className="flex items-center mb-10">
                <div className="bg-[#192E72] from-[#B90004] to-[#192E72] p-3 rounded-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">
                  Company Details
                </h2>
              </div>

              <motion.div variants={staggerChildren} className="space-y-8">
                {[
                  {
                    icon: Building2,
                    label: "Company Name",
                    value: "World Prime Services Co. Ltd.",
                  },
                  {
                    icon: Scale,
                    label: "Legal Status",
                    value: "Corporation registered in South Korea",
                  },
                  {
                    icon: Calendar,
                    label: "Year of Establishment",
                    value: "2017",
                  },
                  {
                    icon: CircleDollarSign,
                    label: "Initial Capital",
                    value: "KRW 100,000,000",
                  },
                  {
                    icon: FileCheck,
                    label: "Business Registration",
                    value: "Complete and compliant with Korean authorities",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className="flex items-start group transform transition-all hover:-translate-y-1"
                  >
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon className="h-6 w-6 text-[#192E72]" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="bg-gray-100 rounded-2xl p-8">
                <p className="text-gray-600 mb-6">
                  For business inquiries or partnership opportunities:
                </p>
                <motion.div
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="flex items-center space-x-3 mb-8 transition-all hover:bg-gray-200 p-5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email:</p>
                    <a
                      href="mailto:marketing@groupconcorde.com"
                      className="text-lg font-semibold text-gray-900 hover:text-[#B90004] transition-colors"
                    >
                      marketing@groupconcorde.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="flex items-center space-x-3 transition-all hover:bg-gray-200 p-5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Office Address:
                    </p>
                    <a
                      href=""
                      className="text-lg font-semibold text-gray-900 hover:text-[#B90004] transition-colors"
                    >
                      Nextthey 55-ho, Panpacific B/D 2F,
                      <br />
                      Digital-ro 31-gil 12,
                      <br />
                      Guro-gu, Seoul, Korea 08380
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      <section
        ref={detailsRef}
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white border-t border-gray-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            {/* Company Details */}
            <motion.div
              initial="hidden"
              animate={detailsInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="bg-white rounded-2xl p-6 sm:p-8 transform transition-all"
            >
              <div className="flex items-center mb-6 sm:mb-10">
                <div className="bg-[#192E72] p-3 rounded-lg">
                  <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-3 sm:ml-4">
                  Company Details
                </h2>
              </div>

              <motion.div
                variants={staggerChildren}
                className="space-y-6 sm:space-y-8"
              >
                {[
                  {
                    icon: Building2,
                    label: "Company Name",
                    value: "World Prime Services株式会社",
                  },
                  {
                    icon: Scale,
                    label: "Legal Status",
                    value: "Company Registered in Japan",
                  },
                  {
                    icon: Calendar,
                    label: "Year of Establishment",
                    value: "2024",
                  },
                  {
                    icon: CircleDollarSign,
                    label: "Initial Capital",
                    value: "YEN 5000000",
                  },
                  {
                    icon: FileCheck,
                    label: "Business Registration",
                    value: "Complete and Complaint with Japan Authorities",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    className="flex items-start group transform transition-all hover:-translate-y-1"
                  >
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#192E72]" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs sm:text-sm font-medium text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-semibold text-gray-900 mt-1">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              ref={contactRef}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Get in Touch
              </h2>
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
                <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base">
                  For business inquiries or partnership opportunities:
                </p>

                <motion.div
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="flex flex-col sm:flex-row gap-2 items-start sm:items-center space-x-4 mb-6 sm:mb-8 transition-all hover:bg-gray-200 p-0 sm:p-5 rounded-xl"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Email:
                    </p>
                    <a
                      href="mailto:marketing@groupconcorde.com"
                      className="text-base sm:text-lg font-semibold text-gray-900 hover:text-[#B90004] transition-colors"
                    >
                      marketing@groupconcorde.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="flex flex-col sm:flex-row items-start gap-2 sm:items-center space-x-4 transition-all hover:bg-gray-200 p-0 sm:p-5 rounded-xl"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Office Address:
                    </p>
                    <address className="not-italic text-base sm:text-lg font-semibold text-gray-900 hover:text-[#B90004] transition-colors">
                      406, 4F Tekko Building
                      <br />
                      1-8-2 Marunouchi Chiyoda-ku
                      <br />
                      Tokyo, Japan  100-0005
                    </address>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="/images/logo2.png"
                  alt="Logo"
                  width={1000}
                  height={1000}
                  className="w-60 h-20 object-contain"
                />
              </div>
              <p className="text-gray-400 mb-6">
                World Prime Services株式会社 is a legally registered corporation
                in Japan, committed to delivering efficient, reliable, and
                strategic solutions in the aviation industry.
              </p>
            </div>

            {/* Navigation */}
            {/* <div>
              <h3 className="text-lg font-bold mb-6">Navigation</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Home
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  About Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Service
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Gallery
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Contact
                </a>
              </div>
            </div> */}

            {/* Courier Types */}
            <div>
              <h3 className="text-lg font-bold mb-6">ABOUT</h3>
              <div className="space-y-3 ">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-100 mb-1">
                      Office Address:
                    </p>
                    {/* <div></div> */}
                    <a
                      href=""
                      className="text-sm font-semibold text-gray-50 hover:text-[#B90004] transition-colors"
                    >
                      406, 4F Tekko Building
                      <br />
                      1-8-2 Marunouchi Chiyoda-ku
                      <br />
                      Tokyo, Japan  100-0005
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-[#B90004] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href="mailto:marketing@groupconcorde.com"
                    className="text-lg text-gray-100 hover:text-[#B90004] transition-colors"
                  >
                    marketing@groupconcorde.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h3 className="text-lg font-bold mb-6">FOLLOW US</h3>
              <div className="flex mb-6">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white rounded-l-full px-4 py-2 flex-1"
                />
                <Button className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
              <div className="">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400">(207) 555-0119</span>
                </div>

                <div className="flex space-x-4">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center text-gray-400">
              © World Prime Service2025. Designed by{" "}
              <a
                href="https://apacedigitalcargo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Apace Digital Cargo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
